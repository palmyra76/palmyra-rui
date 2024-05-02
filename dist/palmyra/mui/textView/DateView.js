import { jsx as P, Fragment as z, jsxs as Z } from "react/jsx-runtime";
import { forwardRef as K, useContext as tt, useRef as et } from "react";
import { FieldManagerContext as nt } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import rt from "../form/FieldDecorator.js";
import { copyMuiOptions as at, getFieldLabel as it } from "../form/MuiUtil.js";
function g(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function D(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const X = 6048e5, st = 864e5, A = 6e4, G = 36e5;
let ot = {};
function S() {
  return ot;
}
function T(e, t) {
  var o, u, d, f;
  const n = S(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((u = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, a = g(e), i = a.getDay(), s = (i < r ? 7 : 0) + i - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Y(e) {
  return T(e, { weekStartsOn: 1 });
}
function U(e) {
  const t = g(e), n = t.getFullYear(), r = D(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Y(r), i = D(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const s = Y(i);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function L(e) {
  const t = g(e);
  return t.setHours(0, 0, 0, 0), t;
}
function R(e) {
  const t = g(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function ut(e, t) {
  const n = L(e), r = L(t), a = +n - R(n), i = +r - R(r);
  return Math.round((a - i) / st);
}
function ct(e) {
  const t = U(e), n = D(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Y(n);
}
function dt(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function B(e) {
  if (!dt(e) && typeof e != "number")
    return !1;
  const t = g(e);
  return !isNaN(Number(t));
}
function ft(e) {
  const t = g(e), n = D(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const lt = {
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
}, mt = (e, t, n) => {
  let r;
  const a = lt[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function C(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ht = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, gt = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wt = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, yt = {
  date: C({
    formats: ht,
    defaultWidth: "full"
  }),
  time: C({
    formats: gt,
    defaultWidth: "full"
  }),
  dateTime: C({
    formats: wt,
    defaultWidth: "full"
  })
}, bt = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Dt = (e, t, n, r) => bt[e];
function x(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, o = n != null && n.width ? String(n.width) : s;
      a = e.formattingValues[o] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, o = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[o] || e.values[s];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[i];
  };
}
const Mt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ot = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Pt = {
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
}, xt = {
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
}, vt = {
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
}, kt = {
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
}, Tt = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Wt = {
  ordinalNumber: Tt,
  era: x({
    values: Mt,
    defaultWidth: "wide"
  }),
  quarter: x({
    values: Ot,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: x({
    values: Pt,
    defaultWidth: "wide"
  }),
  day: x({
    values: xt,
    defaultWidth: "wide"
  }),
  dayPeriod: x({
    values: vt,
    defaultWidth: "wide",
    formattingValues: kt,
    defaultFormattingWidth: "wide"
  })
};
function v(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(a);
    if (!i)
      return null;
    const s = i[0], o = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(o) ? St(o, (m) => m.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Yt(o, (m) => m.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(s.length);
    return { value: d, rest: f };
  };
}
function Yt(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function St(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Nt(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r)
      return null;
    const a = r[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const o = t.slice(a.length);
    return { value: s, rest: o };
  };
}
const Ct = /^(\d+)(th|st|nd|rd)?/i, pt = /\d+/i, Ft = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Et = {
  any: [/^b/i, /^(a|c)/i]
}, qt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ht = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Lt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Rt = {
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
}, It = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Qt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, _t = {
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
}, Xt = {
  ordinalNumber: Nt({
    matchPattern: Ct,
    parsePattern: pt,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: v({
    matchPatterns: Ft,
    defaultMatchWidth: "wide",
    parsePatterns: Et,
    defaultParseWidth: "any"
  }),
  quarter: v({
    matchPatterns: qt,
    defaultMatchWidth: "wide",
    parsePatterns: Ht,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: v({
    matchPatterns: Lt,
    defaultMatchWidth: "wide",
    parsePatterns: Rt,
    defaultParseWidth: "any"
  }),
  day: v({
    matchPatterns: It,
    defaultMatchWidth: "wide",
    parsePatterns: jt,
    defaultParseWidth: "any"
  }),
  dayPeriod: v({
    matchPatterns: Qt,
    defaultMatchWidth: "any",
    parsePatterns: _t,
    defaultParseWidth: "any"
  })
}, At = {
  code: "en-US",
  formatDistance: mt,
  formatLong: yt,
  formatRelative: Dt,
  localize: Wt,
  match: Xt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Gt(e) {
  const t = g(e);
  return ut(t, ft(t)) + 1;
}
function Ut(e) {
  const t = g(e), n = +Y(t) - +ct(t);
  return Math.round(n / X) + 1;
}
function V(e, t) {
  var f, m, w, O;
  const n = g(e), r = n.getFullYear(), a = S(), i = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((O = (w = a.locale) == null ? void 0 : w.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, s = D(e, 0);
  s.setFullYear(r + 1, 0, i), s.setHours(0, 0, 0, 0);
  const o = T(s, t), u = D(e, 0);
  u.setFullYear(r, 0, i), u.setHours(0, 0, 0, 0);
  const d = T(u, t);
  return n.getTime() >= o.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1;
}
function Bt(e, t) {
  var o, u, d, f;
  const n = S(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : u.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = V(e, t), i = D(e, 0);
  return i.setFullYear(a, 0, r), i.setHours(0, 0, 0, 0), T(i, t);
}
function Vt(e, t) {
  const n = g(e), r = +T(n, t) - +Bt(n, t);
  return Math.round(r / X) + 1;
}
function c(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const y = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return c(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : c(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return c(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return c(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return c(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return c(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return c(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return c(a, t.length);
  }
}, M = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, I = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return y.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = V(e, r), i = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = i % 100;
      return c(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : c(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = U(e);
    return c(n, t.length);
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
  u: function(e, t) {
    const n = e.getFullYear();
    return c(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return c(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return c(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return y.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return c(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Vt(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : c(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ut(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : c(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : y.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Gt(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : c(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(i);
      case "ee":
        return c(i, 2);
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(i);
      case "cc":
        return c(i, t.length);
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return c(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = M.noon : r === 0 ? a = M.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = M.evening : r >= 12 ? a = M.afternoon : r >= 4 ? a = M.morning : a = M.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return y.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : y.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : c(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : c(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : y.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : y.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return y.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Q(r);
      case "XXXX":
      case "XX":
        return b(r);
      case "XXXXX":
      case "XXX":
      default:
        return b(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Q(r);
      case "xxxx":
      case "xx":
        return b(r);
      case "xxxxx":
      case "xxx":
      default:
        return b(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + j(r, ":");
      case "OOOO":
      default:
        return "GMT" + b(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + j(r, ":");
      case "zzzz":
      default:
        return "GMT" + b(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return c(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return c(r, t.length);
  }
};
function j(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), i = r % 60;
  return i === 0 ? n + String(a) : n + String(a) + t + c(i, 2);
}
function Q(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + c(Math.abs(e) / 60, 2) : b(e, t);
}
function b(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = c(Math.trunc(r / 60), 2), i = c(r % 60, 2);
  return n + a + t + i;
}
const _ = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, $ = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, $t = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return _(e, t);
  let i;
  switch (r) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", _(r, t)).replace("{{time}}", $(a, t));
}, Jt = {
  p: $,
  P: $t
}, zt = /^D+$/, Zt = /^Y+$/, Kt = ["D", "DD", "YY", "YYYY"];
function te(e) {
  return zt.test(e);
}
function ee(e) {
  return Zt.test(e);
}
function ne(e, t, n) {
  const r = re(e, t, n);
  if (console.warn(r), Kt.includes(e))
    throw new RangeError(r);
}
function re(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ae = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ie = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, se = /^'([^]*?)'?$/, oe = /''/g, ue = /[a-zA-Z]/;
function ce(e, t, n) {
  var f, m, w, O, F, E, q, H;
  const r = S(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? At, i = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((O = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : O.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((E = (F = n == null ? void 0 : n.locale) == null ? void 0 : F.options) == null ? void 0 : E.weekStartsOn) ?? r.weekStartsOn ?? ((H = (q = r.locale) == null ? void 0 : q.options) == null ? void 0 : H.weekStartsOn) ?? 0, o = g(e);
  if (!B(o))
    throw new RangeError("Invalid time value");
  let u = t.match(ie).map((h) => {
    const l = h[0];
    if (l === "p" || l === "P") {
      const N = Jt[l];
      return N(h, a.formatLong);
    }
    return h;
  }).join("").match(ae).map((h) => {
    if (h === "''")
      return { isToken: !1, value: "'" };
    const l = h[0];
    if (l === "'")
      return { isToken: !1, value: de(h) };
    if (I[l])
      return { isToken: !0, value: h };
    if (l.match(ue))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + l + "`"
      );
    return { isToken: !1, value: h };
  });
  a.localize.preprocessor && (u = a.localize.preprocessor(o, u));
  const d = {
    firstWeekContainsDate: i,
    weekStartsOn: s,
    locale: a
  };
  return u.map((h) => {
    if (!h.isToken)
      return h.value;
    const l = h.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && ee(l) || !(n != null && n.useAdditionalDayOfYearTokens) && te(l)) && ne(l, t, String(e));
    const N = I[l[0]];
    return N(o, l, a.localize, d);
  }).join("");
}
function de(e) {
  const t = e.match(se);
  return t ? t[1].replace(oe, "'") : e;
}
function fe(e, t) {
  const n = (t == null ? void 0 : t.additionalDigits) ?? 2, r = ge(e);
  let a;
  if (r.date) {
    const u = we(r.date, n);
    a = ye(u.restDateString, u.year);
  }
  if (!a || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const i = a.getTime();
  let s = 0, o;
  if (r.time && (s = be(r.time), isNaN(s)))
    return /* @__PURE__ */ new Date(NaN);
  if (r.timezone) {
    if (o = De(r.timezone), isNaN(o))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const u = new Date(i + s), d = /* @__PURE__ */ new Date(0);
    return d.setFullYear(
      u.getUTCFullYear(),
      u.getUTCMonth(),
      u.getUTCDate()
    ), d.setHours(
      u.getUTCHours(),
      u.getUTCMinutes(),
      u.getUTCSeconds(),
      u.getUTCMilliseconds()
    ), d;
  }
  return new Date(i + s + o);
}
const W = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, le = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, me = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, he = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ge(e) {
  const t = {}, n = e.split(W.dateTimeDelimiter);
  let r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], W.timeZoneDelimiter.test(t.date) && (t.date = e.split(W.timeZoneDelimiter)[0], r = e.substr(
    t.date.length,
    e.length
  ))), r) {
    const a = W.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function we(e, t) {
  const n = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), r = e.match(n);
  if (!r)
    return { year: NaN, restDateString: "" };
  const a = r[1] ? parseInt(r[1]) : null, i = r[2] ? parseInt(r[2]) : null;
  return {
    year: i === null ? a : i * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function ye(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  const n = e.match(le);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  const r = !!n[4], a = k(n[1]), i = k(n[2]) - 1, s = k(n[3]), o = k(n[4]), u = k(n[5]) - 1;
  if (r)
    return ve(t, o, u) ? Me(t, o, u) : /* @__PURE__ */ new Date(NaN);
  {
    const d = /* @__PURE__ */ new Date(0);
    return !Pe(t, i, s) || !xe(t, a) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(t, i, Math.max(a, s)), d);
  }
}
function k(e) {
  return e ? parseInt(e) : 1;
}
function be(e) {
  const t = e.match(me);
  if (!t)
    return NaN;
  const n = p(t[1]), r = p(t[2]), a = p(t[3]);
  return ke(n, r, a) ? n * G + r * A + a * 1e3 : NaN;
}
function p(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function De(e) {
  if (e === "Z")
    return 0;
  const t = e.match(he);
  if (!t)
    return 0;
  const n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return Te(r, a) ? n * (r * G + a * A) : NaN;
}
function Me(e, t, n) {
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const a = r.getUTCDay() || 7, i = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
const Oe = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function J(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function Pe(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (Oe[t] || (J(e) ? 29 : 28));
}
function xe(e, t) {
  return t >= 1 && t <= (J(e) ? 366 : 365);
}
function ve(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function ke(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function Te(e, t) {
  return t >= 0 && t <= 59;
}
const pe = K(function(t, n) {
  const r = tt(nt), a = n || et(null), i = r(t, "string", a), { mutateOptions: s } = i, o = i.getData(), u = t.textAlign || "left";
  var d = at(t, o, t.label);
  const f = (m) => {
    if (!m)
      return "";
    const w = fe(m);
    return B(w) ? ce(w, t.displayPattern) : (console.error("Invalid date provided:", m), "");
  };
  return /* @__PURE__ */ P(z, { children: s.visible && /* @__PURE__ */ P(
    rt,
    {
      label: it(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: t.label ? /* @__PURE__ */ Z("div", { ...d, children: [
        /* @__PURE__ */ P("div", { className: "text-view-label", children: t.label }),
        /* @__PURE__ */ P("div", { className: "text-view-value", children: f(o) })
      ] }) : /* @__PURE__ */ P("div", { ...d, style: { textAlign: u }, className: "text-view-value", children: f(o) })
    }
  ) });
});
export {
  pe as default
};
