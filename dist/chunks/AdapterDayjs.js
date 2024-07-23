import m from "dayjs";
import { c as B, g as E } from "./_commonjsHelpers.js";
function X() {
  return X = Object.assign ? Object.assign.bind() : function(l) {
    for (var y = 1; y < arguments.length; y++) {
      var u = arguments[y];
      for (var h in u) ({}).hasOwnProperty.call(u, h) && (l[h] = u[h]);
    }
    return l;
  }, X.apply(null, arguments);
}
var Q = { exports: {} };
(function(l, y) {
  (function(u, h) {
    l.exports = h();
  })(B, function() {
    var u = "week", h = "year";
    return function(p, t, e) {
      var s = t.prototype;
      s.week = function(i) {
        if (i === void 0 && (i = null), i !== null) return this.add(7 * (i - this.week()), "day");
        var n = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var o = e(this).startOf(h).add(1, h).date(n), c = e(this).endOf(u);
          if (o.isBefore(c)) return 1;
        }
        var M = e(this).startOf(h).date(n).startOf(u).subtract(1, "millisecond"), P = this.diff(M, u, !0);
        return P < 0 ? e(this).startOf("week").week() : Math.ceil(P);
      }, s.weeks = function(i) {
        return i === void 0 && (i = null), this.week(i);
      };
    };
  });
})(Q);
var ht = Q.exports;
const ut = /* @__PURE__ */ E(ht);
var tt = { exports: {} };
(function(l, y) {
  (function(u, h) {
    l.exports = h();
  })(B, function() {
    var u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, h = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, p = /\d\d/, t = /\d\d?/, e = /\d*[^-_:/,()\s\d]+/, s = {}, i = function(r) {
      return (r = +r) + (r > 68 ? 1900 : 2e3);
    }, n = function(r) {
      return function(a) {
        this[r] = +a;
      };
    }, o = [/[+-]\d\d:?(\d\d)?|Z/, function(r) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z") return 0;
        var f = a.match(/([+-]|\d\d)/g), d = 60 * f[1] + (+f[2] || 0);
        return d === 0 ? 0 : f[0] === "+" ? -d : d;
      }(r);
    }], c = function(r) {
      var a = s[r];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, M = function(r, a) {
      var f, d = s.meridiem;
      if (d) {
        for (var g = 1; g <= 24; g += 1) if (r.indexOf(d(g, 0, a)) > -1) {
          f = g > 12;
          break;
        }
      } else f = r === (a ? "pm" : "PM");
      return f;
    }, P = { A: [e, function(r) {
      this.afternoon = M(r, !1);
    }], a: [e, function(r) {
      this.afternoon = M(r, !0);
    }], S: [/\d/, function(r) {
      this.milliseconds = 100 * +r;
    }], SS: [p, function(r) {
      this.milliseconds = 10 * +r;
    }], SSS: [/\d{3}/, function(r) {
      this.milliseconds = +r;
    }], s: [t, n("seconds")], ss: [t, n("seconds")], m: [t, n("minutes")], mm: [t, n("minutes")], H: [t, n("hours")], h: [t, n("hours")], HH: [t, n("hours")], hh: [t, n("hours")], D: [t, n("day")], DD: [p, n("day")], Do: [e, function(r) {
      var a = s.ordinal, f = r.match(/\d+/);
      if (this.day = f[0], a) for (var d = 1; d <= 31; d += 1) a(d).replace(/\[|\]/g, "") === r && (this.day = d);
    }], M: [t, n("month")], MM: [p, n("month")], MMM: [e, function(r) {
      var a = c("months"), f = (c("monthsShort") || a.map(function(d) {
        return d.slice(0, 3);
      })).indexOf(r) + 1;
      if (f < 1) throw new Error();
      this.month = f % 12 || f;
    }], MMMM: [e, function(r) {
      var a = c("months").indexOf(r) + 1;
      if (a < 1) throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, n("year")], YY: [p, function(r) {
      this.year = i(r);
    }], YYYY: [/\d{4}/, n("year")], Z: o, ZZ: o };
    function W(r) {
      var a, f;
      a = r, f = s && s.formats;
      for (var d = (r = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(b, x, Y) {
        var T = Y && Y.toUpperCase();
        return x || f[Y] || u[Y] || f[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, k, A) {
          return k || A.slice(1);
        });
      })).match(h), g = d.length, O = 0; O < g; O += 1) {
        var H = d[O], S = P[H], w = S && S[0], L = S && S[1];
        d[O] = L ? { regex: w, parser: L } : H.replace(/^\[|\]$/g, "");
      }
      return function(b) {
        for (var x = {}, Y = 0, T = 0; Y < g; Y += 1) {
          var j = d[Y];
          if (typeof j == "string") T += j.length;
          else {
            var k = j.regex, A = j.parser, v = b.slice(T), C = k.exec(v)[0];
            A.call(x, C), b = b.replace(C, "");
          }
        }
        return function(z) {
          var D = z.afternoon;
          if (D !== void 0) {
            var U = z.hours;
            D ? U < 12 && (z.hours += 12) : U === 12 && (z.hours = 0), delete z.afternoon;
          }
        }(x), x;
      };
    }
    return function(r, a, f) {
      f.p.customParseFormat = !0, r && r.parseTwoDigitYear && (i = r.parseTwoDigitYear);
      var d = a.prototype, g = d.parse;
      d.parse = function(O) {
        var H = O.date, S = O.utc, w = O.args;
        this.$u = S;
        var L = w[1];
        if (typeof L == "string") {
          var b = w[2] === !0, x = w[3] === !0, Y = b || x, T = w[2];
          x && (T = w[2]), s = this.$locale(), !b && T && (s = f.Ls[T]), this.$d = function(v, C, z) {
            try {
              if (["x", "X"].indexOf(C) > -1) return new Date((C === "X" ? 1e3 : 1) * v);
              var D = W(C)(v), U = D.year, I = D.month, rt = D.day, nt = D.hours, it = D.minutes, at = D.seconds, ot = D.milliseconds, q = D.zone, $ = /* @__PURE__ */ new Date(), Z = rt || (U || I ? 1 : $.getDate()), N = U || $.getFullYear(), F = 0;
              U && !I || (F = I > 0 ? I - 1 : $.getMonth());
              var V = nt || 0, J = it || 0, _ = at || 0, G = ot || 0;
              return q ? new Date(Date.UTC(N, F, Z, V, J, _, G + 60 * q.offset * 1e3)) : z ? new Date(Date.UTC(N, F, Z, V, J, _, G)) : new Date(N, F, Z, V, J, _, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(H, L, S), this.init(), T && T !== !0 && (this.$L = this.locale(T).$L), Y && H != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
        } else if (L instanceof Array) for (var j = L.length, k = 1; k <= j; k += 1) {
          w[1] = L[k - 1];
          var A = f.apply(this, w);
          if (A.isValid()) {
            this.$d = A.$d, this.$L = A.$L, this.init();
            break;
          }
          k === j && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else g.call(this, O);
      };
    };
  });
})(tt);
var dt = tt.exports;
const ft = /* @__PURE__ */ E(dt);
var et = { exports: {} };
(function(l, y) {
  (function(u, h) {
    l.exports = h();
  })(B, function() {
    var u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(h, p, t) {
      var e = p.prototype, s = e.format;
      t.en.formats = u, e.format = function(i) {
        i === void 0 && (i = "YYYY-MM-DDTHH:mm:ssZ");
        var n = this.$locale().formats, o = function(c, M) {
          return c.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, W, r) {
            var a = r && r.toUpperCase();
            return W || M[r] || u[r] || M[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(f, d, g) {
              return d || g.slice(1);
            });
          });
        }(i, n === void 0 ? {} : n);
        return s.call(this, o);
      };
    };
  });
})(et);
var ct = et.exports;
const lt = /* @__PURE__ */ E(ct);
var st = { exports: {} };
(function(l, y) {
  (function(u, h) {
    l.exports = h();
  })(B, function() {
    return function(u, h, p) {
      h.prototype.isBetween = function(t, e, s, i) {
        var n = p(t), o = p(e), c = (i = i || "()")[0] === "(", M = i[1] === ")";
        return (c ? this.isAfter(n, s) : !this.isBefore(n, s)) && (M ? this.isBefore(o, s) : !this.isAfter(o, s)) || (c ? this.isBefore(n, s) : !this.isAfter(n, s)) && (M ? this.isAfter(o, s) : !this.isBefore(o, s));
      };
    };
  });
})(st);
var mt = st.exports;
const yt = /* @__PURE__ */ E(mt), Mt = (l, y = "warning") => {
  let u = !1;
  const h = Array.isArray(l) ? l.join(`
`) : l;
  return () => {
    u || (u = !0, y === "error" ? console.error(h) : console.warn(h));
  };
};
m.extend(ft);
m.extend(lt);
m.extend(yt);
const pt = Mt(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale"]), gt = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, Tt = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  fullDateWithWeekday: "dddd, LL",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  monthAndYear: "MMMM YYYY",
  monthAndDate: "MMMM D",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  fullDateTime: "lll",
  fullDateTime12h: "ll hh:mm A",
  fullDateTime24h: "ll HH:mm",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, R = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), K = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Dt = (l, y) => y ? (...u) => l(...u).locale(y) : l;
class Lt {
  constructor({
    locale: y,
    formats: u,
    instance: h
  } = {}) {
    var p;
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.rawDayJsInstance = void 0, this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = gt, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof m.utc < "u", this.hasTimezonePlugin = () => typeof m.tz < "u", this.isSame = (t, e, s) => {
      const i = this.setTimezone(e, this.getTimezone(t));
      return t.format(s) === i.format(s);
    }, this.cleanTimezone = (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return m.tz.guess();
        default:
          return t;
      }
    }, this.createSystemDate = (t) => {
      if (this.rawDayJsInstance)
        return this.rawDayJsInstance(t);
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const e = m.tz.guess();
        return e !== "UTC" ? m.tz(t, e) : m(t);
      }
      return m(t);
    }, this.createUTCDate = (t) => {
      if (!this.hasUTCPlugin())
        throw new Error(R);
      return m.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(R);
      if (!this.hasTimezonePlugin())
        throw new Error(K);
      const s = t !== void 0 && !t.endsWith("Z");
      return m(t).tz(this.cleanTimezone(e), s);
    }, this.getLocaleFormats = () => {
      const t = m.Ls, e = this.locale || "en";
      let s = t[e];
      return s === void 0 && (pt(), s = t.en), s.formats;
    }, this.adjustOffset = (t) => {
      if (!this.hasTimezonePlugin())
        return t;
      const e = this.getTimezone(t);
      if (e !== "UTC") {
        var s, i;
        const n = t.tz(this.cleanTimezone(e), !0);
        if (((s = n.$offset) != null ? s : 0) === ((i = t.$offset) != null ? i : 0))
          return t;
        t.$offset = n.$offset;
      }
      return t;
    }, this.date = (t) => t === null ? null : this.dayjs(t), this.dateWithTimezone = (t, e) => {
      if (t === null)
        return null;
      let s;
      return e === "UTC" ? s = this.createUTCDate(t) : e === "system" || e === "default" && !this.hasTimezonePlugin() ? s = this.createSystemDate(t) : s = this.createTZDate(t, e), this.locale === void 0 ? s : s.locale(this.locale);
    }, this.getTimezone = (t) => {
      if (this.hasTimezonePlugin()) {
        var e;
        const s = (e = t.$x) == null ? void 0 : e.$timezone;
        if (s)
          return s;
      }
      return this.hasUTCPlugin() && t.isUTC() ? "UTC" : "system";
    }, this.setTimezone = (t, e) => {
      if (this.getTimezone(t) === e)
        return t;
      if (e === "UTC") {
        if (!this.hasUTCPlugin())
          throw new Error(R);
        return t.utc();
      }
      if (e === "system")
        return t.local();
      if (!this.hasTimezonePlugin()) {
        if (e === "default")
          return t;
        throw new Error(K);
      }
      return m.tz(t, this.cleanTimezone(e));
    }, this.toJsDate = (t) => t.toDate(), this.parseISO = (t) => this.dayjs(t), this.toISO = (t) => t.toISOString(), this.parse = (t, e) => t === "" ? null : this.dayjs(t, e, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (t) => {
      const e = this.getLocaleFormats(), s = (i) => i.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (n, o, c) => o || c.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (i, n, o) => {
        const c = o && o.toUpperCase();
        return n || e[o] || s(e[c]);
      });
    }, this.getFormatHelperText = (t) => this.expandFormat(t).replace(/a/gi, "(a|p)m").toLocaleLowerCase(), this.isNull = (t) => t === null, this.isValid = (t) => this.dayjs(t).isValid(), this.format = (t, e) => this.formatByString(t, this.formats[e]), this.formatByString = (t, e) => this.dayjs(t).format(e), this.formatNumber = (t) => t, this.getDiff = (t, e, s) => t.diff(e, s), this.isEqual = (t, e) => t === null && e === null ? !0 : this.dayjs(t).toDate().getTime() === this.dayjs(e).toDate().getTime(), this.isSameYear = (t, e) => this.isSame(t, e, "YYYY"), this.isSameMonth = (t, e) => this.isSame(t, e, "YYYY-MM"), this.isSameDay = (t, e) => this.isSame(t, e, "YYYY-MM-DD"), this.isSameHour = (t, e) => t.isSame(e, "hour"), this.isAfter = (t, e) => t > e, this.isAfterYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"), this.isAfterDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"), this.isBefore = (t, e) => t < e, this.isBeforeYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"), this.isBeforeDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"), this.isWithinRange = (t, [e, s]) => t >= e && t <= s, this.startOfYear = (t) => this.adjustOffset(t.startOf("year")), this.startOfMonth = (t) => this.adjustOffset(t.startOf("month")), this.startOfWeek = (t) => this.adjustOffset(t.startOf("week")), this.startOfDay = (t) => this.adjustOffset(t.startOf("day")), this.endOfYear = (t) => this.adjustOffset(t.endOf("year")), this.endOfMonth = (t) => this.adjustOffset(t.endOf("month")), this.endOfWeek = (t) => this.adjustOffset(t.endOf("week")), this.endOfDay = (t) => this.adjustOffset(t.endOf("day")), this.addYears = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "year") : t.add(e, "year")), this.addMonths = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "month") : t.add(e, "month")), this.addWeeks = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "week") : t.add(e, "week")), this.addDays = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "day") : t.add(e, "day")), this.addHours = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "hour") : t.add(e, "hour")), this.addMinutes = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "minute") : t.add(e, "minute")), this.addSeconds = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "second") : t.add(e, "second")), this.getYear = (t) => t.year(), this.getMonth = (t) => t.month(), this.getDate = (t) => t.date(), this.getHours = (t) => t.hour(), this.getMinutes = (t) => t.minute(), this.getSeconds = (t) => t.second(), this.getMilliseconds = (t) => t.millisecond(), this.setYear = (t, e) => this.adjustOffset(t.set("year", e)), this.setMonth = (t, e) => this.adjustOffset(t.set("month", e)), this.setDate = (t, e) => this.adjustOffset(t.set("date", e)), this.setHours = (t, e) => this.adjustOffset(t.set("hour", e)), this.setMinutes = (t, e) => this.adjustOffset(t.set("minute", e)), this.setSeconds = (t, e) => this.adjustOffset(t.set("second", e)), this.setMilliseconds = (t, e) => this.adjustOffset(t.set("millisecond", e)), this.getDaysInMonth = (t) => t.daysInMonth(), this.getNextMonth = (t) => this.addMonths(t, 1), this.getPreviousMonth = (t) => this.addMonths(t, -1), this.getMonthArray = (t) => {
      const s = [t.startOf("year")];
      for (; s.length < 12; ) {
        const i = s[s.length - 1];
        s.push(this.addMonths(i, 1));
      }
      return s;
    }, this.mergeDateAndTime = (t, e) => t.hour(e.hour()).minute(e.minute()).second(e.second()), this.getWeekdays = () => {
      const t = this.dayjs().startOf("week");
      return [0, 1, 2, 3, 4, 5, 6].map((e) => this.formatByString(this.addDays(t, e), "dd"));
    }, this.getWeekArray = (t) => {
      const e = this.setLocaleToValue(t), s = e.startOf("month").startOf("week"), i = e.endOf("month").endOf("week");
      let n = 0, o = s;
      const c = [];
      for (; o < i; ) {
        const M = Math.floor(n / 7);
        c[M] = c[M] || [], c[M].push(o), o = this.addDays(o, 1), n += 1;
      }
      return c;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = (t, e) => {
      const s = t.startOf("year"), i = e.endOf("year"), n = [];
      let o = s;
      for (; o < i; )
        n.push(o), o = this.addYears(o, 1);
      return n;
    }, this.getMeridiemText = (t) => t === "am" ? "AM" : "PM", this.rawDayJsInstance = h, this.dayjs = Dt((p = this.rawDayJsInstance) != null ? p : m, y), this.locale = y, this.formats = X({}, Tt, u), m.extend(ut);
  }
}
export {
  Lt as A
};
