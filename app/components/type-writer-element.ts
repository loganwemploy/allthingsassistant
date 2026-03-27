/* eslint-disable no-underscore-dangle */

// Registers the <type-writer> custom element once.
// This is a direct adaptation of the user-provided Web Component.

export function defineTypeWriterElement() {
  if (typeof window === "undefined") return;
  if (customElements.get("type-writer")) return;

  class TypeWriter extends HTMLElement {
    _gen = 0;
    _paused = false;
    _running = false;
    _idx = 0;
    _nodes: any[] = [];
    _totalChars = 0;
    _currentCharCount = 0;
    _lastEmittedPercent = 0;
    _animationTimeout: ReturnType<typeof setTimeout> | null = null;
    _original: DocumentFragment | null = null;
    _container: HTMLDivElement | null = null;
    _prefersReducedMotion = false;
    _cfg = { speed: 100 , minDur: 50, maxDur: 500 };

    connectedCallback() {
      const dir = this.getAttribute("dir") || "ltr";
      const speed = Number(this.getAttribute("speed")) || 100;
      const minDur = Number(this.getAttribute("min-duration")) || 50;
      const maxDur = Number(this.getAttribute("max-duration")) || 500;
      const autostart = this.getAttribute("autostart") !== "false";
      const respectMotion = this.getAttribute("respect-motion-preference") === "true";

      this._original = document.createDocumentFragment();
      this._original.append(...[...this.childNodes].map((n) => n.cloneNode(true)));

      this.textContent = "";

      this._container = document.createElement("div");
      this._container.className = "type-writer-container";
      this._container.setAttribute("role", "region");
      this._container.setAttribute("aria-live", "polite");
      this._container.setAttribute("aria-atomic", "false");
      this._container.style.direction = dir;

      const label = this.getAttribute("aria-label");
      if (label) this._container.setAttribute("aria-label", label);

      this.appendChild(this._container);

      this._prefersReducedMotion =
        respectMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      this._cfg = { speed, minDur, maxDur };

      if (autostart) this.start();
    }

    disconnectedCallback() {
      this._gen++;
      this._running = false;
      this._paused = false;
      this._nodes.length = 0;
      this._original = null;
      if (this._animationTimeout) {
        clearTimeout(this._animationTimeout);
        this._animationTimeout = null;
      }
    }

    _flattenNodes(node: Node) {
      const result: any[] = [];
      let charCount = 0;

      const walk = (n: Node, parent: Node, inPre: boolean) => {
        if (n.nodeType === Node.TEXT_NODE) {
          const text = n.textContent ?? "";
          if (!inPre && !/\S/.test(text)) return;
          const normalized = inPre ? text : text.replace(/\s+/g, " ");
          const textLen = normalized.length;
          charCount += textLen;
          for (let i = 0; i < textLen; i++) {
            result.push({ type: "char", char: normalized[i], parent });
          }
        } else if (n.nodeType === Node.ELEMENT_NODE) {
          const clone = (n as Element).cloneNode(false) as Element;
          result.push({ type: "open", node: clone, parent });
          const children = (n as Element).childNodes;
          const nextInPre = inPre || (n as Element).nodeName === "PRE";
          for (let i = 0; i < children.length; i++) {
            walk(children[i], clone, nextInPre);
          }
          result.push({ type: "close", node: clone, parent });
        }
      };

      const rootChildren = (node as Element).childNodes;
      for (let i = 0; i < rootChildren.length; i++) {
        walk(rootChildren[i], this._container as Node, false);
      }
      return { nodes: result, totalChars: charCount };
    }

    _stopAnimation() {
      if (this._animationTimeout) {
        clearTimeout(this._animationTimeout);
        this._animationTimeout = null;
      }
    }

    _rebuildFromOriginal() {
      const { nodes, totalChars } = this._flattenNodes(this._original!.cloneNode(true));
      this._nodes = nodes;
      this._totalChars = totalChars;
    }

    _getProgressDetail() {
      const total = this._totalChars;
      const current = this._currentCharCount;
      const position = total > 0 ? current / total : 0;
      return { current, total, percent: position * 100, position };
    }

    _continueAnimation() {
      this._stopAnimation();

      const gen = this._gen;
      const dur =
        this._totalChars > 0
          ? Math.max(
              this._cfg.minDur,
              Math.min(this._cfg.maxDur, Math.round((this._totalChars / this._cfg.speed) * 1000)),
            )
          : 0;
      const delay = this._totalChars ? Math.max(8, Math.round(dur / this._totalChars)) : 0;
      const len = this._nodes.length;

      const processNext = () => {
        if (this._idx >= len) {
          this._running = false;
          this._container?.setAttribute("aria-busy", "false");
          if (this._totalChars > 0) {
            this._currentCharCount = this._totalChars;
            this._lastEmittedPercent = 1;
            this.dispatchEvent(new CustomEvent("progress", { detail: this._getProgressDetail() }));
          }
          this.dispatchEvent(new CustomEvent("complete"));
          return;
        }

        if (gen !== this._gen || !this._running || this._paused) return;

        const item = this._nodes[this._idx];

        if (item.type === "open") {
          item.parent.appendChild(item.node);
        } else if (item.type === "char") {
          const parent = item.parent as Node;
          const lastChild = parent.lastChild;

          if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
            (lastChild as Text).textContent = ((lastChild as Text).textContent ?? "") + item.char;
          } else {
            parent.appendChild(document.createTextNode(item.char));
          }

          this._currentCharCount++;

          if (this._totalChars > 0) {
            const pct = this._currentCharCount / this._totalChars;
            if (pct - this._lastEmittedPercent >= 0.02) {
              this._lastEmittedPercent = pct;
              this.dispatchEvent(new CustomEvent("progress", { detail: this._getProgressDetail() }));
            }
          }
        }

        this._idx++;

        const nextDelay = item.type === "char" ? delay + ((Math.random() * 6) | 0) : 0;
        this._animationTimeout = setTimeout(processNext, nextDelay);
      };

      processNext();
    }

    start() {
      if (!this._original || !this._container) return;
      if (this._running) return;

      this._gen++;
      this._stopAnimation();
      this._idx = 0;
      this._paused = false;
      this._container.textContent = "";

      this._rebuildFromOriginal();
      this._currentCharCount = 0;
      this._lastEmittedPercent = 0;

      if (this._prefersReducedMotion) {
        const clone = this._original.cloneNode(true) as DocumentFragment;
        this._container.append(...clone.childNodes);
        this._container.setAttribute("aria-busy", "false");
        this._currentCharCount = this._totalChars;
        this._idx = this._nodes.length;
        if (this._totalChars > 0) {
          this._lastEmittedPercent = 1;
          this.dispatchEvent(new CustomEvent("progress", { detail: this._getProgressDetail() }));
        }
        this.dispatchEvent(new CustomEvent("complete"));
        return;
      }

      this._running = true;
      this._container.setAttribute("aria-busy", "true");
      this.dispatchEvent(new CustomEvent("start"));

      this._continueAnimation();
    }

    reset() {
      this._gen++;
      this._running = false;
      this._paused = false;
      this._stopAnimation();
      this._idx = 0;
      this._nodes.length = 0;
      this._currentCharCount = 0;
      this._lastEmittedPercent = 0;
      this._totalChars = 0;
      if (this._container) this._container.textContent = "";
      this.dispatchEvent(new CustomEvent("reset"));
    }
  }

  customElements.define("type-writer", TypeWriter);
}

