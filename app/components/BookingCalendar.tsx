"use client";

import { useMemo, useState } from "react";
import { CalendarRange, ChevronLeft, ChevronRight, Clock, Mail } from "lucide-react";

type BookingForm = {
  firstName: string;
  lastName: string;
  reason: string;
  message: string;
};

type BookingSubmission = BookingForm & {
  date: string;
};

function buildMonth(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay(); // 0–6
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];

  // leading blanks
  for (let i = 0; i < startDay; i++) {
    cells.push(null);
  }

  // actual days
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }

  // trailing blanks to complete weeks
  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

export function BookingCalendar() {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const [form, setForm] = useState<BookingForm>({
    firstName: "",
    lastName: "",
    reason: "",
    message: "",
  });
  const [submissions, setSubmissions] = useState<BookingSubmission[]>([]);
  const [error, setError] = useState<string | null>(null);

  const cells = useMemo(
    () => buildMonth(cursor.getFullYear(), cursor.getMonth()),
    [cursor],
  );

  const monthLabel = cursor.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  function isSameDay(a: Date | null, b: Date | null) {
    if (!a || !b) return false;
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function isPastDay(d: Date | null) {
    if (!d) return false;
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    const copy = new Date(d);
    copy.setHours(0, 0, 0, 0);
    return copy < t;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDate) {
      setError("Please select a date from the calendar.");
      return;
    }
    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError("Please add your first and last name.");
      return;
    }

    setError(null);
    const isoDate = selectedDate.toISOString().split("T")[0];

    const submission: BookingSubmission = {
      ...form,
      date: isoDate,
    };

    setSubmissions((prev) => [submission, ...prev]);

    // This is where you would POST to a Next.js route
    // that talks to Google Calendar / Sheets / Apps Script.
    // await fetch("/api/book", { method: "POST", body: JSON.stringify(submission) })

    setForm({
      firstName: "",
      lastName: "",
      reason: "",
      message: "",
    });
  }

  const latest = submissions[0];

  return (
    <section id="booking" className="section">
      <div className="container bookingGrid">
        <div className="card pad bookingIntro">
          <div className="eyebrow">Book an intake</div>
          <h2 className="h2 pinline">
            <span>Pick a time that works for you.</span>
          </h2>
          <p className="muted">
            Choose a date that fits your schedule and share a few details.
            Behind the scenes, this calendar can be wired to Google Calendar and Sheets so every
            inquiry is tracked and follow-ups are automatic.
          </p>
          <div className="bookingBullets">
            <div className="bookingBullet">
              <Clock className="bookingIcon" aria-hidden="true" />
              <div>
                <div className="bookingBulletTitle">Availability in one view</div>
                <p className="muted small">
                  Tap a date to select it; unavailable days can be blocked using Google Calendar
                  busy times.
                </p>
              </div>
            </div>
            <div className="bookingBullet">
              <Mail className="bookingIcon" aria-hidden="true" />
              <div>
                <div className="bookingBulletTitle">Automated reminders</div>
                <p className="muted small">
                  Use Apps Script on your linked sheet to send reminder emails 3 days and 1 day
                  before each appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card pad bookingShell">
          <div className="bookingCalendarShell">
            <div className="bookingCalendarHeader">
              <div className="bookingCalendarTitle">
                <CalendarRange className="bookingIcon" aria-hidden="true" />
                <span>{monthLabel}</span>
              </div>
              <div className="bookingCalendarNav">
                <button
                  type="button"
                  onClick={() =>
                    setCursor(
                      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
                    )
                  }
                  aria-label="Previous month"
                >
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCursor(
                      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
                    )
                  }
                  aria-label="Next month"
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="bookingCalendarWeekdays" aria-hidden="true">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="bookingCalendarGrid">
              {cells.map((day, idx) => {
                const disabled = !day || isPastDay(day);
                const selected = isSameDay(day, selectedDate);
                const isToday =
                  day &&
                  isSameDay(day, today) &&
                  day.getMonth() === today.getMonth() &&
                  day.getFullYear() === today.getFullYear();

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={disabled}
                    className={[
                      "bookingDay",
                      disabled ? "bookingDayDisabled" : "",
                      selected ? "bookingDaySelected" : "",
                      isToday ? "bookingDayToday" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => day && setSelectedDate(day)}
                  >
                    {day ? day.getDate() : ""}
                  </button>
                );
              })}
            </div>
          </div>

          <form className="bookingForm" onSubmit={handleSubmit} noValidate>
            <div className="bookingFormHeader">
              <div className="eyebrow">Selected date</div>
              <div className="bookingSelectedDate">
                {selectedDate ? selectedDate.toLocaleDateString() : "Tap a date on the calendar"}
              </div>
              <p className="muted small">
                Your request isn&apos;t confirmed until you hear back with a calendar invite.
              </p>
            </div>

            <div className="bookingFormRow">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                  autoComplete="given-name"
                  placeholder="First name"
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                  autoComplete="family-name"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="reason">Reason you&apos;re interested</label>
              <input
                id="reason"
                name="reason"
                value={form.reason}
                onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
                placeholder="Inbox help, systems, calendar, operations..."
              />
            </div>

            <div className="field">
              <label htmlFor="message">Anything you&apos;d like to share ahead of time?</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />
            </div>

            {error ? (
              <div className="formError" role="alert">
                {error}
              </div>
            ) : null}

            <button type="submit" className="btn btnPrimary">
              Submit intake request
            </button>
          </form>

          <div className="bookingPreview" aria-live="polite">
            <div className="eyebrow">Form data preview</div>
            {latest ? (
              <div className="bookingPreviewBody">
                <div>
                  <strong>Name:</strong> {latest.firstName} {latest.lastName}
                </div>
                <div>
                  <strong>Date:</strong> {latest.date}
                </div>
                {latest.reason && (
                  <div>
                    <strong>Reason:</strong> {latest.reason}
                  </div>
                )}
                {latest.message && (
                  <div>
                    <strong>Message:</strong> {latest.message}
                  </div>
                )}
              </div>
            ) : (
              <p className="muted small">
                When someone submits, their first name, last name, chosen date, reason, and message
                will appear here. In production you&apos;d send this payload to Google Calendar,
                Sheets, and Apps Script.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

