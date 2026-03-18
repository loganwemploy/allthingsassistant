export type AwardRow = {
  award_id: string;
  organization: string;
  start_date: string; // MM/DD/YYYY
  end_date: string; // MM/DD/YYYY
  amount: number;
};

/**
 * Awards data provided by user (TSV-like).
 * We keep it as a raw string so it’s easy to update/replace.
 *
 * Columns:
 * award_id<TAB>organization<TAB>start_date<TAB>end_date<TAB>amount
 */
const RAW = `
23SNPAGISI\tAgudath Israel of Illinois\t10/01/2023\t09/30/2026\t150,000
23SNPAIW35\tAgudath Israel Warsaw Bikur Cholim Congregation\t10/01/2023\t09/30/2026\t150,000
23SNPAIW41\tAgudath Israel Warsaw Bikur Cholim Congregation\t10/01/2023\t09/30/2026\t150,000
23SNPALSAP\tAll Saints Academy Catholic School\t10/01/2023\t09/30/2026\t124,000
23SNPALSAM\tAll Saints Academy Catholic School\t10/01/2023\t09/30/2026\t143,000
23SNPALLHS\tAlleman High School\t10/01/2023\t09/30/2026\t150,000
23SNPAMSHA\tam shalom\t10/01/2023\t09/30/2026\t110,296
25SNPAMSHA\tam shalom\t10/01/2025\t09/30/2028\t42,000
25SNPBEZEA\tAnshe Emet Synagogue\t10/01/2025\t09/30/2028\t150,000
23SNPANSHE\tAnshe Emet Synagogue\t10/01/2023\t09/30/2026\t150,000
23SNPANSBI\tAnshe Sholom B'nai Israel Congregation\t10/01/2023\t09/30/2026\t148,500
25SNPAPOSA\tApostolics of Salem\t10/01/2025\t09/30/2028\t150,000
23SNPAQSAS\tAqsa School\t10/01/2023\t09/30/2026\t148,496
25SNPARIEC\tArie Crown Hebrew Day School\t10/01/2025\t09/30/2028\t150,000
25SNPASTTC\tAssociated Talmud Torahs of Chicago\t10/01/2025\t09/30/2028\t150,000
25SNPANCI2\tASSYIAN NATIONAL COUNCIL OF ILLINOIS\t10/01/2025\t09/30/2028\t107,250
25SNPANCI1\tASSYIAN NATIONAL COUNCIL OF ILLINOIS\t10/01/2025\t09/30/2028\t107,250
25SNPANCIB\tASSYIAN NATIONAL COUNCIL OF ILLINOIS\t10/01/2025\t09/30/2028\t107,250
23SNPATYEH\tAtereth Yehoshua\t10/01/2023\t09/30/2026\t150,000
25SNPAUGCO\tAugustana College\t10/01/2025\t09/30/2028\t58,590
23SNPBMBOL\tBais Medrash Binyan Olam\t10/01/2023\t09/30/2026\t150,000
23SNPBMMHA\tBEIS MEDRASH MIKOR HACHAIM\t10/01/2023\t09/30/2026\t150,000
25SNPBMMHA\tBEIS MEDRASH MIKOR HACHAIM\t10/01/2025\t09/30/2028\t150,000
23SNPBEZEA\tBernard Zell Anshe Emet Day School\t10/01/2023\t09/30/2026\t150,000
23SNPBETHH\tBeth Hillel Bnai Emunah\t10/01/2023\t09/30/2026\t150,000
23SNPCBESH\tBeth Shalom Congregation\t10/01/2023\t09/30/2026\t150,000
23SNPBEECC\tBethesda Evangelical Covenant Church\t10/01/2023\t09/30/2026\t150,000
23SNPBLSAS\tBlessed Sacrament Roman Catholic Congregation of Morton\t10/01/2023\t09/30/2026\t30,963
23SNPBBCHS\tBronzeville/Black Chicagoan Historical Society\t10/01/2023\t09/30/2026\t142,000
25SNPCAMWR\tCamp Moshava Wild Rose WI\t10/01/2025\t09/30/2028\t150,000
25SNPCAMP1\tCAMP NAGEELA MIDWEST INC\t10/01/2025\t09/30/2028\t150,000
25SNPCAMP2\tCAMP NAGEELA MIDWEST INC\t10/01/2025\t09/30/2028\t150,000
25SNPCAMP3\tCAMP NAGEELA MIDWEST INC\t10/01/2025\t09/30/2028\t150,000
25SNPCCLCN\tCenter Church Lake County NFP\t10/01/2025\t09/30/2028\t71,000
23SNPHALST\tCenter on Halsted\t10/01/2023\t09/30/2026\t142,773
23SNPCHOOP\tChabad of Oak Park\t10/01/2023\t09/30/2026\t150,000
25SNPCLCB2\tChain of Lakes Community Bible Church\t10/01/2025\t09/30/2028\t1,596
25SNPCLCBC\tChain of Lakes Community Bible Church\t10/01/2025\t09/30/2028\t21,742
23SNPCHEDE\tCheder Lubavitch hebrew Day School\t10/01/2023\t09/30/2026\t150,000
23SNPCLAND\tChesed L'Avrohom Nachlas David\t10/01/2023\t09/30/2026\t84,000
23SNPCLNGH\tChesed L'Avrohom Nachlas David\t10/01/2023\t09/30/2026\t150,000
23SNPCCTAC\tChicago Center for Torah & Chesed\t10/01/2023\t09/30/2026\t150,000
23SNPCCTCR\tChicago Center for Torah & Chesed\t10/01/2023\t09/30/2026\t137,500
23SNPCHESE\tChicago Chesed Fund\t10/01/2023\t09/30/2026\t55,000
25SNPCHESE\tChicago Chesed Fund\t10/01/2025\t09/30/2028\t150,000
25SNPCHES2\tChicago Chesed Fund\t10/01/2025\t09/30/2028\t150,000
23SNPCCKOL\tCHICAGO COMMUNITY KOLLEL INC\t10/01/2023\t09/30/2026\t150,000
23SNPCCKSA\tCHICAGO COMMUNITY KOLLEL INC\t10/01/2023\t09/30/2026\t115,500
23SNPCCKSB\tCHICAGO COMMUNITY KOLLEL INC\t10/01/2023\t09/30/2026\t120,750
25SNPCHCNA\tChicago Heights Nazarene Nursery School & Kindergarten\t10/01/2025\t09/30/2028\t150,000
23SNPCIC57\tChicago Islamic Center, INC.\t10/01/2023\t09/30/2026\t150,000
23SNPCIC53\tChicago Islamic Center, INC.\t10/01/2023\t09/30/2026\t106,500
23SNPCICEN\tChicago Islamic Center, INC.\t10/01/2023\t09/30/2026\t150,000
23SNPCHDAY\tChicago Jewish Day School\t10/01/2023\t09/30/2026\t75,000
25SNPCHISI\tChicago Sinai Congregation\t10/01/2025\t09/30/2028\t75,000
23SNPCHURL\tChicago Urban League\t10/01/2023\t09/30/2026\t145,776
23SNPCASLE\tChinese American Service\t10/01/2023\t09/30/2026\t150,000
25SNPCCUC3\tChinese Christian Union Church\t10/01/2025\t09/30/2028\t150,000
23SNPCHOIC\tCHOICES Center for Reproductive Health\t10/01/2023\t09/30/2026\t83,028
25SNPCCCS2\tChrist Community Church of St. Charles Illinois\t10/01/2025\t09/30/2028\t102,753
25SNPCCCS1\tChrist Community Church of St. Charles Illinois\t10/01/2025\t09/30/2028\t94,353
25SNPCCCS3\tChrist Community Church of St. Charles Illinois\t10/01/2025\t09/30/2028\t149,997
25SNPCELCH\tChrist Evangelical Lutheran Church\t10/01/2025\t09/30/2028\t150,000
23SNPCLCOP\tChrist Lutheran Church of Peoria, IL\t10/01/2023\t09/30/2026\t150,000
25SNPCHRAC\tChristian Activity Center\t10/01/2025\t09/30/2028\t150,000
23SNPCFC57\tCity First Church\t10/01/2023\t09/30/2026\t150,000
23SNPCFC59\tCity First Church\t10/01/2023\t09/30/2026\t150,000
23SNPCFC17\tCity First Church\t10/01/2023\t09/30/2026\t149,000
23SNPCLBCH\tCityLine Bible Church\t10/01/2023\t09/30/2026\t149,500
23SNPCCACA\tCommunity Christian Alternative (CCA) Academy\t10/01/2023\t09/30/2026\t150,000
25SNPCOMMDI\tCommunity Development Institute\t10/01/2025\t09/30/2028\t150,000
23SNPKHALO\tCong. Khal Ohr Yisocher Chodorov\t10/01/2023\t09/30/2026\t150,000
23SNPADASY\tCONGREGATION ADAS YESHURUN ANSHE KANESSES ISRAEL\t10/01/2023\t09/30/2026\t134,835
23SNPBNJEH\tCongregation B'nai Jehoshua Beth Elohim\t10/01/2023\t09/30/2026\t95,000
25SNPBNJEH\tCongregation B'nai Jehoshua Beth Elohim\t10/01/2025\t09/30/2028\t150,000
25SNPCBTIK\tCongregation B'nai Tikvah\t10/01/2025\t09/30/2028\t30,000
23SNPBETHJ\tCongregation Beth Judea\t10/01/2023\t09/30/2026\t57,750
25SNPCBESH\tCongregation Beth Shalom\t10/01/2025\t09/30/2028\t149,140
23SNPKHALC\tCONGREGATION K'HAL CHASIDIM\t10/01/2023\t09/30/2026\t10,000
25SNPKINSW\tCongregation KINS of West Rogers Park\t10/01/2025\t09/30/2028\t150,000
23SNPKINSW\tCongregation KINS of West Rogers Park\t10/01/2023\t09/30/2026\t116,000
23SNPTORAH\tCongregation Or Torah\t10/01/2023\t09/30/2026\t140,000
25SNPRODFE\tCongregation Rodfei Zedek\t10/01/2025\t09/30/2028\t40,000
23SNPBNEIR\tCongregation Shaarei Tfilo Bnei Ruven Nusach Hoari\t10/01/2023\t09/30/2026\t42,000
25SNPSUKKA\tCongregation Sukkat Shalom\t10/01/2025\t09/30/2028\t149,625
23SNPSUKKA\tCongregation Sukkat Shalom\t10/01/2023\t09/30/2026\t149,272
25SNPCTT40\tCONGREGATION TZEMACH TZEDEK\t10/01/2025\t09/30/2028\t150,000
25SNPCTT44\tCONGREGATION TZEMACH TZEDEK\t10/01/2025\t09/30/2028\t150,000
23SNPCTZTZ\tCONGREGATION TZEMACH TZEDEK\t10/01/2023\t09/30/2026\t150,000
25SNPCYHS20\tCoordinated Youth & Human Services\t10/01/2025\t09/30/2028\t150,000
25SNPCYHS11\tCoordinated Youth & Human Services\t10/01/2025\t09/30/2028\t150,000
25SNPCFCHU\tCornerstone Family Church\t10/01/2025\t09/30/2028\t150,000
23SNPCJERR\tCouncil for Jewish Elderly\t10/01/2023\t09/30/2026\t150,000
23SNPCCORO\tCrosspoint Church Of Rockford\t10/01/2023\t09/30/2026\t149,988
23SNPDNOGL\tDarchei Noam Of Glenbrook\t10/01/2023\t09/30/2026\t150,000
25SNPEMPOW\tDecatur Macon County Opportunities Corporation\t10/01/2025\t09/30/2028\t150,000
23SNPDEPCP\tDePaul College Prep\t10/01/2023\t09/30/2026\t150,000
25SNPECIRM\tEast Central Illinois Refugee Mutual Assistance Center\t10/01/2025\t09/30/2028\t54,400
23SNPELCRC\tElmhurst Christian Reformed Church\t10/01/2023\t09/30/2026\t95,665
25SNPEMCON\tEmanuel Congregation\t10/01/2025\t09/30/2028\t150,000
23SNPEHSOC\tEthical Humanist Society of Chicago\t10/01/2023\t09/30/2026\t85,300
25SNPFACRC\tFairhaven Christian Retirement Center\t10/01/2025\t09/30/2028\t150,000
25SNPFFCHU\tFaith Family Church\t10/01/2025\t09/30/2028\t85,937
23SNPFHPAR\tFamily Health Partnership Clinic\t10/01/2023\t09/30/2026\t11,104
23SNPFBACH\tFellowship Baptist Church of Vienna\t10/01/2023\t09/30/2026\t90,250
25SNPFMBCH\tFellowship Missionary Baptist Church\t10/01/2025\t09/30/2028\t143,000
25SNPFBCOP\tFirst Baptist Church of Sterling\t10/01/2025\t09/30/2028\t85,654
23SNPFCCDI\tFirst Christian Church of Decatur\t10/01/2023\t09/30/2026\t38,546
23SNPFNACH\tFirst Church of the Nazarene of Lemont Township\t10/01/2023\t09/30/2026\t144,799
23SNPFEFCH\tFirst Evangelical Free Church\t10/01/2023\t09/30/2026\t150,000
23SNPFPRCH\tFirst Presbyterian Church\t10/01/2023\t09/30/2026\t75,600
23SNPFUMCC\tFirst United Methodist Church Carterville\t10/01/2023\t09/30/2026\t94,171
25SNPFOREA\tForging Opportunities for Refugees in America Inc., NFP\t10/01/2025\t09/30/2028\t81,100
23SNPFRHFD\tFranciscan Health Foundation\t10/01/2023\t09/30/2026\t150,000
25SNPFRCAA\tFrassati Catholic Academy\t10/01/2025\t09/30/2028\t149,500
25SNPFRESH\tFresh Visions Community Church\t10/01/2025\t09/30/2028\t78,607
25SNPFRIBC\tFRIENDSHIP BAPTIST CHURCH, INC. OF CHICAGO, ILLINOIS\t10/01/2025\t09/30/2028\t150,000
25SNPGCSAA\tGalesburg Christian School\t10/01/2025\t09/30/2028\t150,000
25SNPGCSAF\tGalesburg Christian School\t10/01/2025\t09/30/2028\t150,000
23SNPGLMPR\tGlenview Methodist Preschool\t10/01/2023\t09/30/2026\t117,800
25SNPGSLCN\tGood Shepherd Lutheran Church of Naperville\t10/01/2025\t09/30/2028\t150,000
23SNPGCBCO\tGreat Commission Broadcasting Corporation\t10/01/2023\t09/30/2026\t9,800
25SNPGUCEN\tGuidance Center NFP\t10/01/2025\t09/30/2028\t150,000
23SNPHATZL\tHatzalah Chicago\t10/01/2023\t09/30/2026\t115,000
23SNPHAINT\tHeartland Alliance International\t10/01/2023\t09/30/2026\t150,000
23SNPHEBBI\tHebrew Theological College\t10/01/2023\t09/30/2026\t135,000
23SNPHEBRE\tHebrew Theological College\t10/01/2023\t09/30/2026\t145,000
23SNPHILLE\tHillel Torah North Suburban Day School\t10/01/2023\t09/30/2026\t150,000
23SNPIHMEC\tHolocaust Memorial Foundation of Illinois, Inc.\t10/01/2023\t09/30/2026\t150,000
23SNPHCRHO\tHoly Cross Hospital\t10/01/2023\t09/30/2026\t120,000
23SNPHOTHS\tHoly Trinity High School\t10/01/2023\t09/30/2026\t150,000
25SNPICSCH\tIC School\t10/01/2025\t09/30/2028\t39,650
23SNPICNAC\tICNA CHICAGO ILLINOIS ORGANIZATION\t10/01/2023\t09/30/2026\t67,410
23SNPIDACR\tIda Crown Jewish Academy\t10/01/2023\t09/30/2026\t150,000
23SNPIOJED\tIllinois Organization for Jewish Education NFP\t10/01/2023\t09/30/2026\t150,000
23SNPILSCC\tIllinois Sikh Community Center\t10/01/2023\t09/30/2026\t150,000
23SNPICOPE\tISLAMIC CENTER OF PEORIA\t10/01/2023\t09/30/2026\t150,000
23SNPICC35\tISLAMIC COMMUNITY CENTER OF ILLINOIS\t10/01/2023\t09/30/2026\t130,000
23SNPICC51\tISLAMIC COMMUNITY CENTER OF ILLINOIS\t10/01/2023\t09/30/2026\t130,000
23SNPICC25\tISLAMIC COMMUNITY CENTER OF ILLINOIS\t10/01/2023\t09/30/2026\t130,000
23SNPICOIL\tIslamic Community of Illinois\t10/01/2023\t09/30/2026\t150,000
23SNPISFPE\tIslamic Foundation of Peoria\t10/01/2023\t09/30/2026\t150,000
23SNPISNWS\tIslamic Society of Northwest Suburbs of Chicago\t10/01/2023\t09/30/2026\t148,000
25SNPIGCWH\tIsrael of God's Church\t10/01/2025\t09/30/2028\t83,027
23SNPISPOF\tIsrael Portuguese Fraternity of Chicago/Sephardic Congregation\t10/01/2023\t09/30/2026\t150,000
25SNPJECCM\tJCC Chicago\t10/01/2025\t09/30/2028\t150,000
25SNPJECCC\tJCC Chicago\t10/01/2025\t09/30/2028\t150,000
25SNPJECFS\tJCFS Chicago\t10/01/2025\t09/30/2028\t150,000
23SNPJCFSE\tJCFS Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPJCYSE\tJewish Council for Youth Services - NWFC\t10/01/2023\t09/30/2026\t98,070
23SNPJFMCH\tJewish Federation of Metropolitan Chicago\t10/01/2023\t09/30/2026\t50,000
23SNPJFMCC\tJewish Federation of Metropolitan Chicago\t10/01/2023\t09/30/2026\t140,000
23SNPJFMCC\tJewish Federation of Metropolitan Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPFACOJ\tJFMC Facilities Corporation\t10/01/2023\t09/30/2026\t150,000
23SNPFACOB\tJFMC Facilities Corporation\t10/01/2023\t09/30/2026\t0
23SNPJDBYB\tJoan Dachs Bais Yaakov Elementary School-Yeshivas Tiferes Tzvi\t10/01/2023\t09/30/2026\t150,000
23SNPJDBYE\tJoan Dachs Bais Yaakov Elementary School-Yeshivas Tiferes Tzvi\t10/01/2023\t09/30/2026\t150,000
23SNPJDBYY\tJoan Dachs Bais Yaakov Elementary School-Yeshivas Tiferes Tzvi\t10/01/2023\t09/30/2026\t150,000
25SNPKEMV1\tKemmerer Village\t10/01/2025\t09/30/2028\t147,000
25SNPKEMV2\tKemmerer Village\t10/01/2025\t09/30/2028\t42,000
25SNPKEMV3\tKemmerer Village\t10/01/2025\t09/30/2028\t150,000
25SNPKENCG\tKenneth C. Griffin Museum of Science and Industry\t10/01/2025\t09/30/2028\t150,000
23SNPKHHCO\tKol Hadash Humanistic Congregation\t10/01/2023\t09/30/2026\t91,313
23SNPKTCHE\tKollel Toras Chesed\t10/01/2023\t09/30/2026\t150,000
23SNPLCONS\tL'Chaim Center of the North Shore\t10/01/2023\t09/30/2026\t150,000
23SNPLIB95\tLibenu\t10/01/2023\t09/30/2026\t150,000
23SNPLIB67\tLibenu\t10/01/2023\t09/30/2026\t150,000
23SNPLIB29\tLibenu\t10/01/2023\t09/30/2026\t150,000
23SNPLPZOO\tLincoln Park Zoological S\t10/01/2023\t09/30/2026\t149,975
23SNPGIRDS\tLubavitch Girls High School\t10/01/2023\t09/30/2026\t135,000
23SNPLMCDO\tLubavitch Mesivta of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPLMCHO\tLubavitch Mesivta of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPLMCZA\tLubavitch Mesivta of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPLYRIC\tLyric Opera of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPMAKOM\tMakom Solel Lakeside\t10/01/2023\t09/30/2026\t88,030
23SNPMALFA\tMasjid Al Farooq\t10/01/2023\t09/30/2026\t134,000
25SNPMIDCA\tMIDWEST ISLAMIC CENTER\t10/01/2025\t09/30/2028\t150,000
23SNPMICMA\tMIDWEST ISLAMIC CENTER\t10/01/2023\t09/30/2026\t110,000
23SNPMICAL\tMIDWEST ISLAMIC CENTER\t10/01/2023\t09/30/2026\t150,000
23SNPMICOS\tMIDWEST ISLAMIC CENTER\t10/01/2023\t09/30/2026\t150,000
23SNPMHOME\tMisericordia Home\t10/01/2023\t09/30/2026\t150,000
25SNPMKOLC\tMoadon kol Chadash\t10/01/2025\t09/30/2028\t27,060
23SNPMORIA\tMoriah Congregation\t10/01/2023\t09/30/2026\t51,276
23SNPMOFDN\tMosque Foundation, The\t10/01/2023\t09/30/2026\t150,000
23SNPMOFCC\tMosque Foundation, The\t10/01/2023\t09/30/2026\t122,904
23SNPMFHAR\tMosque Foundation, The\t10/01/2023\t09/30/2026\t150,000
23SNPSINAI\tMount Sinai Hospital and Medical Center\t10/01/2023\t09/30/2026\t150,000
23SNPMABO1\tMUSLIM ASSOCIATION OF BOLINGBROOK\t10/01/2023\t09/30/2026\t103,000
23SNPMABO2\tMUSLIM ASSOCIATION OF BOLINGBROOK\t10/01/2023\t09/30/2026\t130,000
23SNPNSHOR\tNorth Shore Congregation Israel\t10/01/2023\t09/30/2026\t150,000
23SNPNSLCH\tNorth Suburban Lubavitch Chabad Inc\t10/01/2023\t09/30/2026\t26,250
23SNPNSSBE\tNorth Suburban Synagogue Beth El\t10/01/2023\t09/30/2026\t100,000
25SNPNSSBE\tNorth Suburban Synagogue Beth El\t10/01/2025\t09/30/2028\t150,000
25SNPNSSBA\tNorth Suburban Synagogue Beth El\t10/01/2025\t09/30/2028\t39,000
25SNPNSSBB\tNorth Suburban Synagogue Beth El\t10/01/2025\t09/30/2028\t53,500
25SNPNORTH\tNorthBridge Church Inc\t10/01/2025\t09/30/2028\t150,000
23SNPNWHFA\tNorthwest Home for the Aged\t10/01/2023\t09/30/2026\t143,000
23SNPNDHSP\tNOTRE DAME HIGH SCHOOL OF PEORIA INC\t10/01/2023\t09/30/2026\t82,500
23SNPPPIWH\tPlanned Parenthood of Illinois\t10/01/2023\t09/30/2026\t109,988
23SNPPPINN\tPlanned Parenthood of Illinois\t10/01/2023\t09/30/2026\t85,377
23SNPPPIRH\tPlanned Parenthood of Illinois\t10/01/2023\t09/30/2026\t95,925
23SNPPPSTL\tPLANNED PARENTHOOD OF THE ST. LOUIS REGION AND SOUTHWEST MISSOURI\t10/01/2023\t09/30/2026\t150,000
23SNPPGBCH\tPleasant Grove Baptist Church of Springfield\t10/01/2023\t09/30/2026\t150,000
23SNPPOETI\tPRESERVATION OF EGYPTIAN THEATRE, INC.\t10/01/2023\t09/30/2026\t147,000
23SNPPMBC2\tProvidence Missionary Baptist Church\t10/01/2023\t09/30/2026\t80,000
23SNPPMBC1\tProvidence Missionary Baptist Church\t10/01/2023\t09/30/2026\t145,000
23SNPTELMB\tRabbinical College of Telshe Yeshiva Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPTELSH\tRabbinical College of Telshe Yeshiva Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPTELAB\tRabbinical College of Telshe Yeshiva Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPRADIA\tRadiant Church\t10/01/2023\t09/30/2026\t150,000
23SNPRAHMF\tRAHMAH FOUNDATION, INC.\t10/01/2023\t09/30/2026\t150,000
25SNPRAVBH\tRavenswood Baptist Church\t10/01/2025\t09/30/2028\t150,000
25SNPRAVBC\tRavenswood Baptist Church\t10/01/2025\t09/30/2028\t150,000
25SNPRAVBS\tRavenswood Baptist Church\t10/01/2025\t09/30/2028\t150,000
23SNPREAEC\tReach Educational Center NFP\t10/01/2023\t09/30/2026\t150,000
23SNPRHEMA\tRhema Word Church\t10/01/2023\t09/30/2026\t150,000
25SNPROHCC\tRohingya Culture Center\t10/01/2025\t09/30/2028\t150,000
23SNPSTMAR\tSAINT MARKS CATHOLIC SCHOOL\t10/01/2023\t09/30/2026\t150,000
25SNPSFBCH\tSalem First Baptist Church\t10/01/2025\t09/30/2028\t150,000
23SNPSCREH\tSchwab Rehabilitation Hospital\t10/01/2023\t09/30/2026\t70,000
23SNPSECON\tSecure Community Network\t10/01/2023\t09/30/2026\t150,000
25SNPSISTA\tSista Girls and Friends, Inc\t10/01/2025\t09/30/2028\t55,650
23SNPSTBCS\tSister Thea Bowman Catholic School (formerly SC Sister Thea Bowman Catholic)\t10/01/2023\t09/30/2026\t144,900
25SNPSKVAL\tSkokie Valley Agudath Jacob Synogogue, NFP\t10/01/2025\t09/30/2028\t150,000
23SNPSKVAL\tSkokie Valley Agudath Jacob Synogogue, NFP\t10/01/2023\t09/30/2026\t143,845
23SNPSOSCD\tSolomon Schechter Day School of Metropolitan Chicago\t10/01/2023\t09/30/2026\t150,000
25SNPSSCCS\tSOUTH SIDE CHRISTIAN CHURCH OF SPRINGFIELD, ILLINOIS\t10/01/2025\t09/30/2028\t150,000
25SNPSFS23\tSpero Family Services\t10/01/2025\t09/30/2028\t149,699
25SNPSFS01\tSpero Family Services\t10/01/2025\t09/30/2028\t149,675
25SNPSFS22\tSpero Family Services\t10/01/2025\t09/30/2028\t128,700
23SNPSSMH1\tSSM Health Good Samaritan Hospital\t10/01/2023\t09/30/2026\t113,723
23SNPSSMH2\tSSM Health St. Mary's Hospital\t10/01/2023\t09/30/2026\t110,512
23SNPANN67\tSt Ann Catholic Church and School\t10/01/2023\t09/30/2026\t129,000
23SNPANN63\tSt Ann Catholic Church and School\t10/01/2023\t09/30/2026\t115,000
23SNPANN69\tSt Ann Catholic Church and School\t10/01/2023\t09/30/2026\t129,100
23SNPSTJOH\tSt John the Baptist Catholic School\t10/01/2023\t09/30/2026\t42,743
23SNPSTJUN\tSt John United Church Of Christ\t10/01/2023\t09/30/2026\t55,775
25SNPNDCUR\tSt Nicholas Diocese in Chicago for the Ukrainians\t10/01/2025\t09/30/2028\t150,000
25SNPNDCUO\tSt Nicholas Diocese in Chicago for the Ukrainians\t10/01/2025\t09/30/2028\t149,300
25SNPNDCUH\tSt Nicholas Diocese in Chicago for the Ukrainians\t10/01/2025\t09/30/2028\t150,000
23SNPSTPAT\tSt Patrick High School\t10/01/2023\t09/30/2026\t150,000
23SNPSSPPC\tSt Peter and Paul School\t10/01/2023\t09/30/2026\t120,000
23SNPSTERE\tSt Teresa of the Child Roman Catholic School\t10/01/2023\t09/30/2026\t140,000
23SNPSTOMA\tSt Thomas the Apostle\t10/01/2023\t09/30/2026\t150,000
23SNPSTACS\tSt. Ambrose Church & School\t10/01/2023\t09/30/2026\t144,145
25SNPSAPCE\tSt. Anthony of Padua Church\t10/01/2025\t09/30/2028\t150,000
25SNPSAGS4\tSt. Anthony of Padua Church\t10/01/2025\t09/30/2028\t150,000
25SNPSAGS3\tSt. Anthony of Padua Church\t10/01/2025\t09/30/2028\t150,000
23SNPSJCS2\tSt. James Catholic School\t10/01/2023\t09/30/2026\t150,000
23SNPSJEC3\tSt. James Catholic School\t10/01/2023\t09/30/2026\t150,000
23SNPSJCC1\tSt. James Catholic School\t10/01/2023\t09/30/2026\t57,000
23SNPSMRCP\tSt. Mark Catholic Church\t10/01/2023\t09/30/2026\t142,000
23SNPSTMCO\tSt. Mark Coptic Orthodox Church\t10/01/2023\t09/30/2026\t150,000
23SNPSMARY\tSt. Mary's School of Kickapoo\t10/01/2023\t09/30/2026\t150,000
23SNPSMICH\tSt. Michael the Archangel School\t10/01/2023\t09/30/2026\t106,698
23SNPSPLCH\tSt. Peter Lutheran Church and School (member of Lutheran Church Missouri Synod)\t10/01/2023\t09/30/2026\t150,000
23SNPSPROM\tSt. Peter's Roman Catholic Cathedral\t10/01/2023\t09/30/2026\t149,582
23SNPSTMCO\tSt. Thomas Catholic Church\t10/01/2023\t09/30/2026\t16,688
23SNPSSCNA\tSynagogue Security Council of North America, Inc.\t10/01/2023\t09/30/2026\t150,000
25SNPTADCO\tTarget Area Devlopment Corp\t10/01/2025\t09/30/2028\t150,000
23SNPBSOSB\tThe Benedictine Society of St. Bede\t10/01/2023\t09/30/2026\t150,000
23SNPCBCHN\tThe Catholic Bishop of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPCBCQC\tThe Catholic Bishop of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPCBCMC\tThe Catholic Bishop of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPCBCLP\tThe Catholic Bishop of Chicago, dba, Our Lady of Perpetual Help Church\t10/01/2023\t09/30/2026\t150,000
23SNPRABBI\tThe Chicago Rabbinical Council, Inc.\t10/01/2023\t09/30/2026\t150,000
25SNPTCWIN\tThe Community Works Inc. NFP\t10/01/2025\t09/30/2028\t150,000
23SNPCOMP3\tTHE COMPASS EVANGELICAL FREE CHURCH\t10/01/2023\t09/30/2026\t145,500
23SNPCOMP1\tTHE COMPASS EVANGELICAL FREE CHURCH\t10/01/2023\t09/30/2026\t149,500
23SNPCOMP2\tTHE COMPASS EVANGELICAL FREE CHURCH\t10/01/2023\t09/30/2026\t147,000
23SNPDUSAB\tThe DuSable Black History Museum and Education Center\t10/01/2023\t09/30/2026\t150,000
23SNPEFCCL\tThe Evangelical Free Church of Crystal Lake\t10/01/2023\t09/30/2026\t43,998
23SNPICCGR\tThe Islamic Cultural Center of Greater Chicago\t10/01/2023\t09/30/2026\t135,000
23SNPMOODY\tThe Moody Bible Institute of Chicago\t10/01/2023\t09/30/2026\t150,000
23SNPMCCAC\tThe MUSLIM COMMUNITY CENTER INCORPORATE\t10/01/2023\t09/30/2026\t150,000
23SNPMCCME\tThe MUSLIM COMMUNITY CENTER INCORPORATE\t10/01/2023\t09/30/2026\t125,515
23SNPMCCOC\tThe MUSLIM COMMUNITY CENTER INCORPORATE\t10/01/2023\t09/30/2026\t63,271
25SNPTNSCC\tThe Northside Community Church\t10/01/2025\t09/30/2028\t39,085
25SNPSELFH\tTHE SELFHELP HOME INC.\t10/01/2025\t09/30/2028\t150,000
25SNPSELFI\tTHE SELFHELP HOME INC.\t10/01/2025\t09/30/2028\t131,000
23SNPSELFH\tTHE SELFHELP HOME INC.\t10/01/2023\t09/30/2026\t150,000
23SNPTOURO\tTouro College\t10/01/2023\t09/30/2026\t150,000
23SNPTURKA\tTurkish American Society INC\t10/01/2023\t09/30/2026\t150,000
25SNPUSUBU\tUNIVERSAL SCHOOL\t10/01/2025\t09/30/2028\t150,000
25SNPWRDUP\tWorld Relief Corporation of National Association of Evangelicals\t10/01/2025\t09/30/2028\t23,895
23SNPYACHB\tYachad Beahsiya\t10/01/2023\t09/30/2026\t57,750
23SNPYGM37\tYESHIVA GEDOLA OF THE MIDWEST\t10/01/2023\t09/30/2026\t150,000
23SNPYGM45\tYESHIVA GEDOLA OF THE MIDWEST\t10/01/2023\t09/30/2026\t150,000
23SNPYGM23\tYESHIVA GEDOLA OF THE MIDWEST\t10/01/2023\t09/30/2026\t150,000
25SNPYOBOR\tYeshiva Ohr Boruch, The Veitzener Cheder, Inc.\t10/01/2025\t09/30/2028\t150,000
23SNPYOBOR\tYeshiva Ohr Boruch, The Veitzener Cheder, Inc.\t10/01/2023\t09/30/2026\t99,750
25SNPYMCAS\tYMCA of the University of Illinois\t10/01/2025\t09/30/2028\t117,731
23SNPYICOS\tYOUNG ISRAEL CLUB OF SKOKIE, INC.\t10/01/2023\t09/30/2026\t121,200
25SNPZLMII\tZoe Life Ministries International, Inc.\t10/01/2025\t09/30/2028\t150,000
`.trim();

function parseAmount(amountText: string): number {
  const cleaned = amountText.replace(/[$,]/g, "").trim();
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

export function parseAwards(): AwardRow[] {
  return RAW.split(/\r?\n/g)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.toLowerCase().startsWith("award count:"))
    .map((line) => {
      const [award_id, organization, start_date, end_date, amountText] = line.split("\t");
      return {
        award_id: (award_id ?? "").trim(),
        organization: (organization ?? "").trim(),
        start_date: (start_date ?? "").trim(),
        end_date: (end_date ?? "").trim(),
        amount: parseAmount(amountText ?? ""),
      };
    })
    .filter((r) => r.award_id && r.organization);
}

function parseDateMMDDYYYY(s: string): number | null {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s.trim());
  if (!m) return null;
  const mm = Number(m[1]);
  const dd = Number(m[2]);
  const yyyy = Number(m[3]);
  if (!mm || !dd || !yyyy) return null;
  return Date.UTC(yyyy, mm - 1, dd);
}

function formatDateMMDDYYYY(ts: number): string {
  const d = new Date(ts);
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const yyyy = String(d.getUTCFullYear());
  return `${mm}/${dd}/${yyyy}`;
}

export type AwardAggregate = {
  award_total: number;
  award_count: number;
  award_start_date: string | null; // min
  award_end_date: string | null; // max
  award_ids: string[];
};

export function normalizeOrgName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\u2019']/g, "") // apostrophes
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

export function buildAwardAggregates(rows: AwardRow[]): Map<string, AwardAggregate> {
  const map = new Map<string, AwardAggregate>();

  for (const r of rows) {
    const key = normalizeOrgName(r.organization);
    const existing = map.get(key);
    const startTs = parseDateMMDDYYYY(r.start_date);
    const endTs = parseDateMMDDYYYY(r.end_date);

    if (!existing) {
      map.set(key, {
        award_total: r.amount,
        award_count: 1,
        award_start_date: startTs != null ? formatDateMMDDYYYY(startTs) : r.start_date || null,
        award_end_date: endTs != null ? formatDateMMDDYYYY(endTs) : r.end_date || null,
        award_ids: [r.award_id],
      });
      continue;
    }

    existing.award_total += r.amount;
    existing.award_count += 1;
    existing.award_ids.push(r.award_id);

    const curStart = existing.award_start_date ? parseDateMMDDYYYY(existing.award_start_date) : null;
    const curEnd = existing.award_end_date ? parseDateMMDDYYYY(existing.award_end_date) : null;

    if (startTs != null && (curStart == null || startTs < curStart)) {
      existing.award_start_date = formatDateMMDDYYYY(startTs);
    }
    if (endTs != null && (curEnd == null || endTs > curEnd)) {
      existing.award_end_date = formatDateMMDDYYYY(endTs);
    }
  }

  return map;
}

