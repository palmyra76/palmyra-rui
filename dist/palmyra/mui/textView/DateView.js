var ke = Object.defineProperty;
var pe = (n, r, e) => r in n ? ke(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e;
var i = (n, r, e) => (pe(n, typeof r != "symbol" ? r + "" : r, e), e);
import { jsx as X, Fragment as De, jsxs as Oe } from "react/jsx-runtime";
import { forwardRef as ve, useContext as Ye, useRef as We } from "react";
import { FieldManagerContext as Ee } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import _e from "../form/FieldDecorator.js";
import { copyMuiOptions as Ne, getFieldLabel as He } from "../form/MuiUtil.js";
function T(n) {
  const r = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && r === "[object Date]" ? new n.constructor(+n) : typeof n == "number" || r === "[object Number]" || typeof n == "string" || r === "[object String]" ? new Date(n) : /* @__PURE__ */ new Date(NaN);
}
function y(n, r) {
  return n instanceof Date ? new n.constructor(r) : new Date(r);
}
function de(n, r) {
  const e = T(n);
  return isNaN(r) ? y(n, NaN) : (r && e.setDate(e.getDate() + r), e);
}
const le = 6048e5, qe = 864e5, Ce = 6e4, Fe = 36e5, Le = 1e3;
let Ie = {};
function R() {
  return Ie;
}
function q(n, r) {
  var c, l, h, M;
  const e = R(), t = (r == null ? void 0 : r.weekStartsOn) ?? ((l = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : l.weekStartsOn) ?? e.weekStartsOn ?? ((M = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : M.weekStartsOn) ?? 0, a = T(n), s = a.getDay(), o = (s < t ? 7 : 0) + s - t;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function Q(n) {
  return q(n, { weekStartsOn: 1 });
}
function fe(n) {
  const r = T(n), e = r.getFullYear(), t = y(n, 0);
  t.setFullYear(e + 1, 0, 4), t.setHours(0, 0, 0, 0);
  const a = Q(t), s = y(n, 0);
  s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0);
  const o = Q(s);
  return r.getTime() >= a.getTime() ? e + 1 : r.getTime() >= o.getTime() ? e : e - 1;
}
function se(n) {
  const r = T(n);
  return r.setHours(0, 0, 0, 0), r;
}
function B(n) {
  const r = T(n), e = new Date(
    Date.UTC(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    )
  );
  return e.setUTCFullYear(r.getFullYear()), +n - +e;
}
function Qe(n, r) {
  const e = se(n), t = se(r), a = +e - B(e), s = +t - B(t);
  return Math.round((a - s) / qe);
}
function Re(n) {
  const r = fe(n), e = y(n, 0);
  return e.setFullYear(r, 0, 4), e.setHours(0, 0, 0, 0), Q(e);
}
function Xe(n) {
  return n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function z(n) {
  if (!Xe(n) && typeof n != "number")
    return !1;
  const r = T(n);
  return !isNaN(Number(r));
}
function Ge(n) {
  const r = T(n), e = y(n, 0);
  return e.setFullYear(r.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e;
}
const Ae = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Be = (n, r, e) => {
  let t;
  const a = Ae[n];
  return typeof a == "string" ? t = a : r === 1 ? t = a.one : t = a.other.replace("{{count}}", r.toString()), e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + t : t + " ago" : t;
};
function $(n) {
  return (r = {}) => {
    const e = r.width ? String(r.width) : n.defaultWidth;
    return n.formats[e] || n.formats[n.defaultWidth];
  };
}
const je = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ve = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $e = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ze = {
  date: $({
    formats: je,
    defaultWidth: "full"
  }),
  time: $({
    formats: Ve,
    defaultWidth: "full"
  }),
  dateTime: $({
    formats: $e,
    defaultWidth: "full"
  })
}, Je = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ze = (n, r, e, t) => Je[n];
function G(n) {
  return (r, e) => {
    const t = e != null && e.context ? String(e.context) : "standalone";
    let a;
    if (t === "formatting" && n.formattingValues) {
      const o = n.defaultFormattingWidth || n.defaultWidth, c = e != null && e.width ? String(e.width) : o;
      a = n.formattingValues[c] || n.formattingValues[o];
    } else {
      const o = n.defaultWidth, c = e != null && e.width ? String(e.width) : n.defaultWidth;
      a = n.values[c] || n.values[o];
    }
    const s = n.argumentCallback ? n.argumentCallback(r) : r;
    return a[s];
  };
}
const Ke = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ue = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Se = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, et = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, tt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, rt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, nt = (n, r) => {
  const e = Number(n), t = e % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + "st";
      case 2:
        return e + "nd";
      case 3:
        return e + "rd";
    }
  return e + "th";
}, at = {
  ordinalNumber: nt,
  era: G({
    values: Ke,
    defaultWidth: "wide"
  }),
  quarter: G({
    values: Ue,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: G({
    values: Se,
    defaultWidth: "wide"
  }),
  day: G({
    values: et,
    defaultWidth: "wide"
  }),
  dayPeriod: G({
    values: tt,
    defaultWidth: "wide",
    formattingValues: rt,
    defaultFormattingWidth: "wide"
  })
};
function A(n) {
  return (r, e = {}) => {
    const t = e.width, a = t && n.matchPatterns[t] || n.matchPatterns[n.defaultMatchWidth], s = r.match(a);
    if (!s)
      return null;
    const o = s[0], c = t && n.parsePatterns[t] || n.parsePatterns[n.defaultParseWidth], l = Array.isArray(c) ? it(c, (P) => P.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      st(c, (P) => P.test(o))
    );
    let h;
    h = n.valueCallback ? n.valueCallback(l) : l, h = e.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e.valueCallback(h)
    ) : h;
    const M = r.slice(o.length);
    return { value: h, rest: M };
  };
}
function st(n, r) {
  for (const e in n)
    if (Object.prototype.hasOwnProperty.call(n, e) && r(n[e]))
      return e;
}
function it(n, r) {
  for (let e = 0; e < n.length; e++)
    if (r(n[e]))
      return e;
}
function ot(n) {
  return (r, e = {}) => {
    const t = r.match(n.matchPattern);
    if (!t)
      return null;
    const a = t[0], s = r.match(n.parsePattern);
    if (!s)
      return null;
    let o = n.valueCallback ? n.valueCallback(s[0]) : s[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    const c = r.slice(a.length);
    return { value: o, rest: c };
  };
}
const ct = /^(\d+)(th|st|nd|rd)?/i, ut = /\d+/i, dt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, lt = {
  any: [/^b/i, /^(a|c)/i]
}, ft = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ht = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, yt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, gt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Mt = {
  ordinalNumber: ot({
    matchPattern: ct,
    parsePattern: ut,
    valueCallback: (n) => parseInt(n, 10)
  }),
  era: A({
    matchPatterns: dt,
    defaultMatchWidth: "wide",
    parsePatterns: lt,
    defaultParseWidth: "any"
  }),
  quarter: A({
    matchPatterns: ft,
    defaultMatchWidth: "wide",
    parsePatterns: ht,
    defaultParseWidth: "any",
    valueCallback: (n) => n + 1
  }),
  month: A({
    matchPatterns: mt,
    defaultMatchWidth: "wide",
    parsePatterns: wt,
    defaultParseWidth: "any"
  }),
  day: A({
    matchPatterns: yt,
    defaultMatchWidth: "wide",
    parsePatterns: bt,
    defaultParseWidth: "any"
  }),
  dayPeriod: A({
    matchPatterns: gt,
    defaultMatchWidth: "any",
    parsePatterns: xt,
    defaultParseWidth: "any"
  })
}, he = {
  code: "en-US",
  formatDistance: Be,
  formatLong: ze,
  formatRelative: Ze,
  localize: at,
  match: Mt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Pt(n) {
  const r = T(n);
  return Qe(r, Ge(r)) + 1;
}
function me(n) {
  const r = T(n), e = +Q(r) - +Re(r);
  return Math.round(e / le) + 1;
}
function K(n, r) {
  var M, P, v, k;
  const e = T(n), t = e.getFullYear(), a = R(), s = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((P = (M = r == null ? void 0 : r.locale) == null ? void 0 : M.options) == null ? void 0 : P.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((k = (v = a.locale) == null ? void 0 : v.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, o = y(n, 0);
  o.setFullYear(t + 1, 0, s), o.setHours(0, 0, 0, 0);
  const c = q(o, r), l = y(n, 0);
  l.setFullYear(t, 0, s), l.setHours(0, 0, 0, 0);
  const h = q(l, r);
  return e.getTime() >= c.getTime() ? t + 1 : e.getTime() >= h.getTime() ? t : t - 1;
}
function Tt(n, r) {
  var c, l, h, M;
  const e = R(), t = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((l = (c = r == null ? void 0 : r.locale) == null ? void 0 : c.options) == null ? void 0 : l.firstWeekContainsDate) ?? e.firstWeekContainsDate ?? ((M = (h = e.locale) == null ? void 0 : h.options) == null ? void 0 : M.firstWeekContainsDate) ?? 1, a = K(n, r), s = y(n, 0);
  return s.setFullYear(a, 0, t), s.setHours(0, 0, 0, 0), q(s, r);
}
function we(n, r) {
  const e = T(n), t = +q(e, r) - +Tt(e, r);
  return Math.round(t / le) + 1;
}
function f(n, r) {
  const e = n < 0 ? "-" : "", t = Math.abs(n).toString().padStart(r, "0");
  return e + t;
}
const H = {
  // Year
  y(n, r) {
    const e = n.getFullYear(), t = e > 0 ? e : 1 - e;
    return f(r === "yy" ? t % 100 : t, r.length);
  },
  // Month
  M(n, r) {
    const e = n.getMonth();
    return r === "M" ? String(e + 1) : f(e + 1, 2);
  },
  // Day of the month
  d(n, r) {
    return f(n.getDate(), r.length);
  },
  // AM or PM
  a(n, r) {
    const e = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return e.toUpperCase();
      case "aaa":
        return e;
      case "aaaaa":
        return e[0];
      case "aaaa":
      default:
        return e === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(n, r) {
    return f(n.getHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H(n, r) {
    return f(n.getHours(), r.length);
  },
  // Minute
  m(n, r) {
    return f(n.getMinutes(), r.length);
  },
  // Second
  s(n, r) {
    return f(n.getSeconds(), r.length);
  },
  // Fraction of second
  S(n, r) {
    const e = r.length, t = n.getMilliseconds(), a = Math.trunc(
      t * Math.pow(10, e - 3)
    );
    return f(a, r.length);
  }
}, I = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ie = {
  // Era
  G: function(n, r, e) {
    const t = n.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      case "GGGGG":
        return e.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(n, r, e) {
    if (r === "yo") {
      const t = n.getFullYear(), a = t > 0 ? t : 1 - t;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return H.y(n, r);
  },
  // Local week-numbering year
  Y: function(n, r, e, t) {
    const a = K(n, t), s = a > 0 ? a : 1 - a;
    if (r === "YY") {
      const o = s % 100;
      return f(o, 2);
    }
    return r === "Yo" ? e.ordinalNumber(s, { unit: "year" }) : f(s, r.length);
  },
  // ISO week-numbering year
  R: function(n, r) {
    const e = fe(n);
    return f(e, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, r) {
    const e = n.getFullYear();
    return f(e, r.length);
  },
  // Quarter
  Q: function(n, r, e) {
    const t = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(t);
      case "QQ":
        return f(t, 2);
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, r, e) {
    const t = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(t);
      case "qq":
        return f(t, 2);
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, r, e) {
    const t = n.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return H.M(n, r);
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, r, e) {
    const t = n.getMonth();
    switch (r) {
      case "L":
        return String(t + 1);
      case "LL":
        return f(t + 1, 2);
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, r, e, t) {
    const a = we(n, t);
    return r === "wo" ? e.ordinalNumber(a, { unit: "week" }) : f(a, r.length);
  },
  // ISO week of year
  I: function(n, r, e) {
    const t = me(n);
    return r === "Io" ? e.ordinalNumber(t, { unit: "week" }) : f(t, r.length);
  },
  // Day of the month
  d: function(n, r, e) {
    return r === "do" ? e.ordinalNumber(n.getDate(), { unit: "date" }) : H.d(n, r);
  },
  // Day of year
  D: function(n, r, e) {
    const t = Pt(n);
    return r === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : f(t, r.length);
  },
  // Day of week
  E: function(n, r, e) {
    const t = n.getDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, r, e, t) {
    const a = n.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(s);
      case "ee":
        return f(s, 2);
      case "eo":
        return e.ordinalNumber(s, { unit: "day" });
      case "eee":
        return e.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return e.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return e.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return e.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, r, e, t) {
    const a = n.getDay(), s = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(s);
      case "cc":
        return f(s, r.length);
      case "co":
        return e.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return e.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return e.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return e.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return e.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, r, e) {
    const t = n.getDay(), a = t === 0 ? 7 : t;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return f(a, r.length);
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, r, e) {
    const a = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, r, e) {
    const t = n.getHours();
    let a;
    switch (t === 12 ? a = I.noon : t === 0 ? a = I.midnight : a = t / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, r, e) {
    const t = n.getHours();
    let a;
    switch (t >= 17 ? a = I.evening : t >= 12 ? a = I.afternoon : t >= 4 ? a = I.morning : a = I.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, r, e) {
    if (r === "ho") {
      let t = n.getHours() % 12;
      return t === 0 && (t = 12), e.ordinalNumber(t, { unit: "hour" });
    }
    return H.h(n, r);
  },
  // Hour [0-23]
  H: function(n, r, e) {
    return r === "Ho" ? e.ordinalNumber(n.getHours(), { unit: "hour" }) : H.H(n, r);
  },
  // Hour [0-11]
  K: function(n, r, e) {
    const t = n.getHours() % 12;
    return r === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : f(t, r.length);
  },
  // Hour [1-24]
  k: function(n, r, e) {
    let t = n.getHours();
    return t === 0 && (t = 24), r === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : f(t, r.length);
  },
  // Minute
  m: function(n, r, e) {
    return r === "mo" ? e.ordinalNumber(n.getMinutes(), { unit: "minute" }) : H.m(n, r);
  },
  // Second
  s: function(n, r, e) {
    return r === "so" ? e.ordinalNumber(n.getSeconds(), { unit: "second" }) : H.s(n, r);
  },
  // Fraction of second
  S: function(n, r) {
    return H.S(n, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, r, e) {
    const t = n.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (r) {
      case "X":
        return ce(t);
      case "XXXX":
      case "XX":
        return F(t);
      case "XXXXX":
      case "XXX":
      default:
        return F(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      case "x":
        return ce(t);
      case "xxxx":
      case "xx":
        return F(t);
      case "xxxxx":
      case "xxx":
      default:
        return F(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + oe(t, ":");
      case "OOOO":
      default:
        return "GMT" + F(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + oe(t, ":");
      case "zzzz":
      default:
        return "GMT" + F(t, ":");
    }
  },
  // Seconds timestamp
  t: function(n, r, e) {
    const t = Math.trunc(n.getTime() / 1e3);
    return f(t, r.length);
  },
  // Milliseconds timestamp
  T: function(n, r, e) {
    const t = n.getTime();
    return f(t, r.length);
  }
};
function oe(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = Math.trunc(t / 60), s = t % 60;
  return s === 0 ? e + String(a) : e + String(a) + r + f(s, 2);
}
function ce(n, r) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + f(Math.abs(n) / 60, 2) : F(n, r);
}
function F(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = f(Math.trunc(t / 60), 2), s = f(t % 60, 2);
  return e + a + r + s;
}
const ue = (n, r) => {
  switch (n) {
    case "P":
      return r.date({ width: "short" });
    case "PP":
      return r.date({ width: "medium" });
    case "PPP":
      return r.date({ width: "long" });
    case "PPPP":
    default:
      return r.date({ width: "full" });
  }
}, ye = (n, r) => {
  switch (n) {
    case "p":
      return r.time({ width: "short" });
    case "pp":
      return r.time({ width: "medium" });
    case "ppp":
      return r.time({ width: "long" });
    case "pppp":
    default:
      return r.time({ width: "full" });
  }
}, kt = (n, r) => {
  const e = n.match(/(P+)(p+)?/) || [], t = e[1], a = e[2];
  if (!a)
    return ue(n, r);
  let s;
  switch (t) {
    case "P":
      s = r.dateTime({ width: "short" });
      break;
    case "PP":
      s = r.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = r.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = r.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", ue(t, r)).replace("{{time}}", ye(a, r));
}, J = {
  p: ye,
  P: kt
}, pt = /^D+$/, Dt = /^Y+$/, Ot = ["D", "DD", "YY", "YYYY"];
function be(n) {
  return pt.test(n);
}
function ge(n) {
  return Dt.test(n);
}
function Z(n, r, e) {
  const t = vt(n, r, e);
  if (console.warn(t), Ot.includes(n))
    throw new RangeError(t);
}
function vt(n, r, e) {
  const t = n[0] === "Y" ? "years" : "days of the month";
  return `Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${r}\`) for formatting ${t} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Yt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Wt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Et = /^'([^]*?)'?$/, _t = /''/g, Nt = /[a-zA-Z]/;
function Ht(n, r, e) {
  var M, P, v, k, O, Y, C, N;
  const t = R(), a = (e == null ? void 0 : e.locale) ?? t.locale ?? he, s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((P = (M = e == null ? void 0 : e.locale) == null ? void 0 : M.options) == null ? void 0 : P.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((k = (v = t.locale) == null ? void 0 : v.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, o = (e == null ? void 0 : e.weekStartsOn) ?? ((Y = (O = e == null ? void 0 : e.locale) == null ? void 0 : O.options) == null ? void 0 : Y.weekStartsOn) ?? t.weekStartsOn ?? ((N = (C = t.locale) == null ? void 0 : C.options) == null ? void 0 : N.weekStartsOn) ?? 0, c = T(n);
  if (!z(c))
    throw new RangeError("Invalid time value");
  let l = r.match(Wt).map((D) => {
    const p = D[0];
    if (p === "p" || p === "P") {
      const L = J[p];
      return L(D, a.formatLong);
    }
    return D;
  }).join("").match(Yt).map((D) => {
    if (D === "''")
      return { isToken: !1, value: "'" };
    const p = D[0];
    if (p === "'")
      return { isToken: !1, value: qt(D) };
    if (ie[p])
      return { isToken: !0, value: D };
    if (p.match(Nt))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + p + "`"
      );
    return { isToken: !1, value: D };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(c, l));
  const h = {
    firstWeekContainsDate: s,
    weekStartsOn: o,
    locale: a
  };
  return l.map((D) => {
    if (!D.isToken)
      return D.value;
    const p = D.value;
    (!(e != null && e.useAdditionalWeekYearTokens) && ge(p) || !(e != null && e.useAdditionalDayOfYearTokens) && be(p)) && Z(p, r, String(n));
    const L = ie[p[0]];
    return L(c, p, a.localize, h);
  }).join("");
}
function qt(n) {
  const r = n.match(Et);
  return r ? r[1].replace(_t, "'") : n;
}
function Ct() {
  return Object.assign({}, R());
}
function Ft(n) {
  let e = T(n).getDay();
  return e === 0 && (e = 7), e;
}
function Lt(n, r) {
  const e = r instanceof Date ? y(r, 0) : new r(0);
  return e.setFullYear(
    n.getFullYear(),
    n.getMonth(),
    n.getDate()
  ), e.setHours(
    n.getHours(),
    n.getMinutes(),
    n.getSeconds(),
    n.getMilliseconds()
  ), e;
}
const It = 10;
class xe {
  constructor() {
    i(this, "subPriority", 0);
  }
  validate(r, e) {
    return !0;
  }
}
class Qt extends xe {
  constructor(r, e, t, a, s) {
    super(), this.value = r, this.validateValue = e, this.setValue = t, this.priority = a, s && (this.subPriority = s);
  }
  validate(r, e) {
    return this.validateValue(r, this.value, e);
  }
  set(r, e, t) {
    return this.setValue(r, e, this.value, t);
  }
}
class Rt extends xe {
  constructor() {
    super(...arguments);
    i(this, "priority", It);
    i(this, "subPriority", -1);
  }
  set(e, t) {
    return t.timestampIsSet ? e : y(e, Lt(e, Date));
  }
}
class d {
  run(r, e, t, a) {
    const s = this.parse(r, e, t, a);
    return s ? {
      setter: new Qt(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(r, e, t) {
    return !0;
  }
}
class Xt extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 140);
    i(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
      case "GGGGG":
        return a.era(e, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(e, { width: "wide" }) || a.era(e, { width: "abbreviated" }) || a.era(e, { width: "narrow" });
    }
  }
  set(e, t, a) {
    return t.era = a, e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
const g = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, E = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function x(n, r) {
  return n && {
    value: r(n.value),
    rest: n.rest
  };
}
function m(n, r) {
  const e = r.match(n);
  return e ? {
    value: parseInt(e[0], 10),
    rest: r.slice(e[0].length)
  } : null;
}
function _(n, r) {
  const e = r.match(n);
  if (!e)
    return null;
  if (e[0] === "Z")
    return {
      value: 0,
      rest: r.slice(1)
    };
  const t = e[1] === "+" ? 1 : -1, a = e[2] ? parseInt(e[2], 10) : 0, s = e[3] ? parseInt(e[3], 10) : 0, o = e[5] ? parseInt(e[5], 10) : 0;
  return {
    value: t * (a * Fe + s * Ce + o * Le),
    rest: r.slice(e[0].length)
  };
}
function Me(n) {
  return m(g.anyDigitsSigned, n);
}
function b(n, r) {
  switch (n) {
    case 1:
      return m(g.singleDigit, r);
    case 2:
      return m(g.twoDigits, r);
    case 3:
      return m(g.threeDigits, r);
    case 4:
      return m(g.fourDigits, r);
    default:
      return m(new RegExp("^\\d{1," + n + "}"), r);
  }
}
function j(n, r) {
  switch (n) {
    case 1:
      return m(g.singleDigitSigned, r);
    case 2:
      return m(g.twoDigitsSigned, r);
    case 3:
      return m(g.threeDigitsSigned, r);
    case 4:
      return m(g.fourDigitsSigned, r);
    default:
      return m(new RegExp("^-?\\d{1," + n + "}"), r);
  }
}
function U(n) {
  switch (n) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Pe(n, r) {
  const e = r > 0, t = e ? r : 1 - r;
  let a;
  if (t <= 50)
    a = n || 100;
  else {
    const s = t + 50, o = Math.trunc(s / 100) * 100, c = n >= s % 100;
    a = n + o - (c ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function Te(n) {
  return n % 400 === 0 || n % 4 === 0 && n % 100 !== 0;
}
class Gt extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 130);
    i(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    const s = (o) => ({
      year: o,
      isTwoDigitYear: t === "yy"
    });
    switch (t) {
      case "y":
        return x(b(4, e), s);
      case "yo":
        return x(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return x(b(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a) {
    const s = e.getFullYear();
    if (a.isTwoDigitYear) {
      const c = Pe(
        a.year,
        s
      );
      return e.setFullYear(c, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const o = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class At extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 130);
    i(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (o) => ({
      year: o,
      isTwoDigitYear: t === "YY"
    });
    switch (t) {
      case "Y":
        return x(b(4, e), s);
      case "Yo":
        return x(
          a.ordinalNumber(e, {
            unit: "year"
          }),
          s
        );
      default:
        return x(b(t.length, e), s);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, a, s) {
    const o = K(e, s);
    if (a.isTwoDigitYear) {
      const l = Pe(
        a.year,
        o
      );
      return e.setFullYear(
        l,
        0,
        s.firstWeekContainsDate
      ), e.setHours(0, 0, 0, 0), q(e, s);
    }
    const c = !("era" in t) || t.era === 1 ? a.year : 1 - a.year;
    return e.setFullYear(c, 0, s.firstWeekContainsDate), e.setHours(0, 0, 0, 0), q(e, s);
  }
}
class Bt extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 130);
    i(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t) {
    return j(t === "R" ? 4 : t.length, e);
  }
  set(e, t, a) {
    const s = y(e, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), Q(s);
  }
}
class jt extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 130);
    i(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return j(t === "u" ? 4 : t.length, e);
  }
  set(e, t, a) {
    return e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Vt extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 120);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "Q":
      case "QQ":
        return b(t.length, e);
      case "Qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class $t extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 120);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "q":
      case "qq":
        return b(t.length, e);
      case "qo":
        return a.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(e, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(e, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, a) {
    return e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class zt extends d {
  constructor() {
    super(...arguments);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    i(this, "priority", 110);
  }
  parse(e, t, a) {
    const s = (o) => o - 1;
    switch (t) {
      case "M":
        return x(
          m(g.month, e),
          s
        );
      case "MM":
        return x(b(2, e), s);
      case "Mo":
        return x(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "MMM":
        return a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(e, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(e, { width: "wide", context: "formatting" }) || a.month(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
class Jt extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 110);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (o) => o - 1;
    switch (t) {
      case "L":
        return x(
          m(g.month, e),
          s
        );
      case "LL":
        return x(b(2, e), s);
      case "Lo":
        return x(
          a.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "LLL":
        return a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(e, { width: "wide", context: "standalone" }) || a.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e;
  }
}
function Zt(n, r, e) {
  const t = T(n), a = we(t, e) - r;
  return t.setDate(t.getDate() - a * 7), t;
}
class Kt extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 100);
    i(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "w":
        return m(g.week, e);
      case "wo":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a, s) {
    return q(Zt(e, a, s), s);
  }
}
function Ut(n, r) {
  const e = T(n), t = me(e) - r;
  return e.setDate(e.getDate() - t * 7), e;
}
class St extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 100);
    i(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "I":
        return m(g.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, a) {
    return Q(Ut(e, a));
  }
}
const er = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], tr = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class rr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 90);
    i(this, "subPriority", 1);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "d":
        return m(g.date, e);
      case "do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear(), s = Te(a), o = e.getMonth();
    return s ? t >= 1 && t <= tr[o] : t >= 1 && t <= er[o];
  }
  set(e, t, a) {
    return e.setDate(a), e.setHours(0, 0, 0, 0), e;
  }
}
class nr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 90);
    i(this, "subpriority", 1);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    switch (t) {
      case "D":
      case "DD":
        return m(g.dayOfYear, e);
      case "Do":
        return a.ordinalNumber(e, { unit: "date" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    const a = e.getFullYear();
    return Te(a) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, a) {
    return e.setMonth(0, a), e.setHours(0, 0, 0, 0), e;
  }
}
function S(n, r, e) {
  var P, v, k, O;
  const t = R(), a = (e == null ? void 0 : e.weekStartsOn) ?? ((v = (P = e == null ? void 0 : e.locale) == null ? void 0 : P.options) == null ? void 0 : v.weekStartsOn) ?? t.weekStartsOn ?? ((O = (k = t.locale) == null ? void 0 : k.options) == null ? void 0 : O.weekStartsOn) ?? 0, s = T(n), o = s.getDay(), l = (r % 7 + 7) % 7, h = 7 - a, M = r < 0 || r > 6 ? r - (o + h) % 7 : (l + h) % 7 - (o + h) % 7;
  return de(s, M);
}
class ar extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 90);
    i(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = S(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class sr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 90);
    i(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const o = (c) => {
      const l = Math.floor((c - 1) / 7) * 7;
      return (c + s.weekStartsOn + 6) % 7 + l;
    };
    switch (t) {
      case "e":
      case "ee":
        return x(b(t.length, e), o);
      case "eo":
        return x(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          o
        );
      case "eee":
        return a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(e, { width: "wide", context: "formatting" }) || a.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(e, { width: "short", context: "formatting" }) || a.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = S(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
class ir extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 90);
    i(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, t, a, s) {
    const o = (c) => {
      const l = Math.floor((c - 1) / 7) * 7;
      return (c + s.weekStartsOn + 6) % 7 + l;
    };
    switch (t) {
      case "c":
      case "cc":
        return x(b(t.length, e), o);
      case "co":
        return x(
          a.ordinalNumber(e, {
            unit: "day"
          }),
          o
        );
      case "ccc":
        return a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(e, { width: "wide", context: "standalone" }) || a.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(e, { width: "short", context: "standalone" }) || a.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, a, s) {
    return e = S(e, a, s), e.setHours(0, 0, 0, 0), e;
  }
}
function or(n, r) {
  const e = T(n), t = Ft(e), a = r - t;
  return de(e, a);
}
class cr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 90);
    i(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, t, a) {
    const s = (o) => o === 0 ? 7 : o;
    switch (t) {
      case "i":
      case "ii":
        return b(t.length, e);
      case "io":
        return a.ordinalNumber(e, { unit: "day" });
      case "iii":
        return x(
          a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiii":
        return x(
          a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return x(
          a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiii":
      default:
        return x(
          a.day(e, {
            width: "wide",
            context: "formatting"
          }) || a.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(e, {
            width: "short",
            context: "formatting"
          }) || a.day(e, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, a) {
    return e = or(e, a), e.setHours(0, 0, 0, 0), e;
  }
}
class ur extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 80);
    i(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(U(a), 0, 0, 0), e;
  }
}
class dr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 80);
    i(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(U(a), 0, 0, 0), e;
  }
}
class lr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 80);
    i(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(e, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(e, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(e, t, a) {
    return e.setHours(U(a), 0, 0, 0), e;
  }
}
class fr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 70);
    i(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "h":
        return m(g.hour12h, e);
      case "ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, a) {
    const s = e.getHours() >= 12;
    return s && a < 12 ? e.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? e.setHours(0, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class hr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 70);
    i(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "H":
        return m(g.hour23h, e);
      case "Ho":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, a) {
    return e.setHours(a, 0, 0, 0), e;
  }
}
class mr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 70);
    i(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "K":
        return m(g.hour11h, e);
      case "Ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, a) {
    return e.getHours() >= 12 && a < 12 ? e.setHours(a + 12, 0, 0, 0) : e.setHours(a, 0, 0, 0), e;
  }
}
class wr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 70);
    i(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "k":
        return m(g.hour24h, e);
      case "ko":
        return a.ordinalNumber(e, { unit: "hour" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, a) {
    const s = a <= 24 ? a % 24 : a;
    return e.setHours(s, 0, 0, 0), e;
  }
}
class yr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 60);
    i(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "m":
        return m(g.minute, e);
      case "mo":
        return a.ordinalNumber(e, { unit: "minute" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setMinutes(a, 0, 0), e;
  }
}
class br extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 50);
    i(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, a) {
    switch (t) {
      case "s":
        return m(g.second, e);
      case "so":
        return a.ordinalNumber(e, { unit: "second" });
      default:
        return b(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, a) {
    return e.setSeconds(a, 0), e;
  }
}
class gr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 30);
    i(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t) {
    const a = (s) => Math.trunc(s * Math.pow(10, -t.length + 3));
    return x(b(t.length, e), a);
  }
  set(e, t, a) {
    return e.setMilliseconds(a), e;
  }
}
class xr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 10);
    i(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, t) {
    switch (t) {
      case "X":
        return _(
          E.basicOptionalMinutes,
          e
        );
      case "XX":
        return _(E.basic, e);
      case "XXXX":
        return _(
          E.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return _(
          E.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return _(E.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : y(
      e,
      e.getTime() - B(e) - a
    );
  }
}
class Mr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 10);
    i(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, t) {
    switch (t) {
      case "x":
        return _(
          E.basicOptionalMinutes,
          e
        );
      case "xx":
        return _(E.basic, e);
      case "xxxx":
        return _(
          E.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return _(
          E.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return _(E.extended, e);
    }
  }
  set(e, t, a) {
    return t.timestampIsSet ? e : y(
      e,
      e.getTime() - B(e) - a
    );
  }
}
class Pr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 40);
    i(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Me(e);
  }
  set(e, t, a) {
    return [y(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Tr extends d {
  constructor() {
    super(...arguments);
    i(this, "priority", 20);
    i(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Me(e);
  }
  set(e, t, a) {
    return [y(e, a), { timestampIsSet: !0 }];
  }
}
const kr = {
  G: new Xt(),
  y: new Gt(),
  Y: new At(),
  R: new Bt(),
  u: new jt(),
  Q: new Vt(),
  q: new $t(),
  M: new zt(),
  L: new Jt(),
  w: new Kt(),
  I: new St(),
  d: new rr(),
  D: new nr(),
  E: new ar(),
  e: new sr(),
  c: new ir(),
  i: new cr(),
  a: new ur(),
  b: new dr(),
  B: new lr(),
  h: new fr(),
  H: new hr(),
  K: new mr(),
  k: new wr(),
  m: new yr(),
  s: new br(),
  S: new gr(),
  X: new xr(),
  x: new Mr(),
  t: new Pr(),
  T: new Tr()
}, pr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Dr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Or = /^'([^]*?)'?$/, vr = /''/g, Yr = /\S/, Wr = /[a-zA-Z]/;
function Er(n, r, e, t) {
  var Y, C, N, D, p, L, ee, te;
  const a = Ct(), s = (t == null ? void 0 : t.locale) ?? a.locale ?? he, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((C = (Y = t == null ? void 0 : t.locale) == null ? void 0 : Y.options) == null ? void 0 : C.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((D = (N = a.locale) == null ? void 0 : N.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, c = (t == null ? void 0 : t.weekStartsOn) ?? ((L = (p = t == null ? void 0 : t.locale) == null ? void 0 : p.options) == null ? void 0 : L.weekStartsOn) ?? a.weekStartsOn ?? ((te = (ee = a.locale) == null ? void 0 : ee.options) == null ? void 0 : te.weekStartsOn) ?? 0;
  if (r === "")
    return n === "" ? T(e) : y(e, NaN);
  const l = {
    firstWeekContainsDate: o,
    weekStartsOn: c,
    locale: s
  }, h = [new Rt()], M = r.match(Dr).map((u) => {
    const w = u[0];
    if (w in J) {
      const W = J[w];
      return W(u, s.formatLong);
    }
    return u;
  }).join("").match(pr), P = [];
  for (let u of M) {
    !(t != null && t.useAdditionalWeekYearTokens) && ge(u) && Z(u, r, n), !(t != null && t.useAdditionalDayOfYearTokens) && be(u) && Z(u, r, n);
    const w = u[0], W = kr[w];
    if (W) {
      const { incompatibleTokens: re } = W;
      if (Array.isArray(re)) {
        const ne = P.find(
          (ae) => re.includes(ae.token) || ae.token === w
        );
        if (ne)
          throw new RangeError(
            `The format string mustn't contain \`${ne.fullToken}\` and \`${u}\` at the same time`
          );
      } else if (W.incompatibleTokens === "*" && P.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${u}\` and any other token at the same time`
        );
      P.push({ token: w, fullToken: u });
      const V = W.run(
        n,
        u,
        s.match,
        l
      );
      if (!V)
        return y(e, NaN);
      h.push(V.setter), n = V.rest;
    } else {
      if (w.match(Wr))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + w + "`"
        );
      if (u === "''" ? u = "'" : w === "'" && (u = _r(u)), n.indexOf(u) === 0)
        n = n.slice(u.length);
      else
        return y(e, NaN);
    }
  }
  if (n.length > 0 && Yr.test(n))
    return y(e, NaN);
  const v = h.map((u) => u.priority).sort((u, w) => w - u).filter((u, w, W) => W.indexOf(u) === w).map(
    (u) => h.filter((w) => w.priority === u).sort((w, W) => W.subPriority - w.subPriority)
  ).map((u) => u[0]);
  let k = T(e);
  if (isNaN(k.getTime()))
    return y(e, NaN);
  const O = {};
  for (const u of v) {
    if (!u.validate(k, l))
      return y(e, NaN);
    const w = u.set(k, O, l);
    Array.isArray(w) ? (k = w[0], Object.assign(O, w[1])) : k = w;
  }
  return y(e, k);
}
function _r(n) {
  return n.match(Or)[1].replace(vr, "'");
}
const Ir = ve(function(r, e) {
  const t = Ye(Ee), a = e || We(null), s = t(r, "string", a), { mutateOptions: o } = s, c = s.getData(), l = r.textAlign || "left", h = r.variant || "standard", M = r.displayPattern || "dd-MM-yyyy";
  var P = Ne(r, c, r.label);
  console.log(c, "vv");
  const v = (O) => {
    const Y = [
      "yyyy-MM-dd",
      "dd-MM-yyyy",
      "MM-dd-yyyy",
      "dd-yyyy-MM",
      "yyyy/MM/dd",
      "dd/MM/yyyy",
      "yyyy-MM-dd'T'HH:mm:ss",
      "dd-MM-yyyy HH:mm",
      "MM-dd-yyyy h:mm a",
      "yyyy/MM/dd HH:mm:ss",
      "dd/MM/yyyy HH:mm"
    ];
    for (const C of Y) {
      const N = Er(O, C, /* @__PURE__ */ new Date());
      if (z(N))
        return N;
    }
    return null;
  }, k = (O) => {
    if (!O)
      return "";
    const Y = v(O);
    return z(Y) ? Ht(Y, M) : (console.error("Invalid date provided:", O), "");
  };
  return /* @__PURE__ */ X(De, { children: o.visible && /* @__PURE__ */ X(
    _e,
    {
      label: He(r),
      customContainerClass: r.customContainerClass,
      colspan: r.colspan,
      customFieldClass: r.customFieldClass,
      customLabelClass: r.customLabelClass,
      children: r.label ? /* @__PURE__ */ Oe("div", { ...P, className: "text-view-field-container", children: [
        /* @__PURE__ */ X("div", { className: "text-view-label", children: r.label }),
        /* @__PURE__ */ X("div", { className: h == "standard" ? "text-view-value" : "text-view-value-outlined", children: k(c) })
      ] }) : /* @__PURE__ */ X("div", { ...P, style: { textAlign: l }, children: k(c) })
    }
  ) });
});
export {
  Ir as default
};
