import { _ as ot } from "./extends.js";
import l from "dayjs";
import { c as B, g as E } from "./_commonjsHelpers.js";
var K = { exports: {} };
(function(m, p) {
  (function(f, d) {
    m.exports = d();
  })(B, function() {
    var f = "week", d = "year";
    return function(M, t, e) {
      var s = t.prototype;
      s.week = function(i) {
        if (i === void 0 && (i = null), i !== null)
          return this.add(7 * (i - this.week()), "day");
        var n = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var o = e(this).startOf(d).add(1, d).date(n), c = e(this).endOf(f);
          if (o.isBefore(c))
            return 1;
        }
        var y = e(this).startOf(d).date(n).startOf(f).subtract(1, "millisecond"), P = this.diff(y, f, !0);
        return P < 0 ? e(this).startOf("week").week() : Math.ceil(P);
      }, s.weeks = function(i) {
        return i === void 0 && (i = null), this.week(i);
      };
    };
  });
})(K);
var ht = K.exports;
const ut = /* @__PURE__ */ E(ht);
var Q = { exports: {} };
(function(m, p) {
  (function(f, d) {
    m.exports = d();
  })(B, function() {
    var f = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, d = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, M = /\d\d/, t = /\d\d?/, e = /\d*[^-_:/,()\s\d]+/, s = {}, i = function(r) {
      return (r = +r) + (r > 68 ? 1900 : 2e3);
    }, n = function(r) {
      return function(a) {
        this[r] = +a;
      };
    }, o = [/[+-]\d\d:?(\d\d)?|Z/, function(r) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var u = a.match(/([+-]|\d\d)/g), h = 60 * u[1] + (+u[2] || 0);
        return h === 0 ? 0 : u[0] === "+" ? -h : h;
      }(r);
    }], c = function(r) {
      var a = s[r];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, y = function(r, a) {
      var u, h = s.meridiem;
      if (h) {
        for (var T = 1; T <= 24; T += 1)
          if (r.indexOf(h(T, 0, a)) > -1) {
            u = T > 12;
            break;
          }
      } else
        u = r === (a ? "pm" : "PM");
      return u;
    }, P = { A: [e, function(r) {
      this.afternoon = y(r, !1);
    }], a: [e, function(r) {
      this.afternoon = y(r, !0);
    }], S: [/\d/, function(r) {
      this.milliseconds = 100 * +r;
    }], SS: [M, function(r) {
      this.milliseconds = 10 * +r;
    }], SSS: [/\d{3}/, function(r) {
      this.milliseconds = +r;
    }], s: [t, n("seconds")], ss: [t, n("seconds")], m: [t, n("minutes")], mm: [t, n("minutes")], H: [t, n("hours")], h: [t, n("hours")], HH: [t, n("hours")], hh: [t, n("hours")], D: [t, n("day")], DD: [M, n("day")], Do: [e, function(r) {
      var a = s.ordinal, u = r.match(/\d+/);
      if (this.day = u[0], a)
        for (var h = 1; h <= 31; h += 1)
          a(h).replace(/\[|\]/g, "") === r && (this.day = h);
    }], M: [t, n("month")], MM: [M, n("month")], MMM: [e, function(r) {
      var a = c("months"), u = (c("monthsShort") || a.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(r) + 1;
      if (u < 1)
        throw new Error();
      this.month = u % 12 || u;
    }], MMMM: [e, function(r) {
      var a = c("months").indexOf(r) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, n("year")], YY: [M, function(r) {
      this.year = i(r);
    }], YYYY: [/\d{4}/, n("year")], Z: o, ZZ: o };
    function W(r) {
      var a, u;
      a = r, u = s && s.formats;
      for (var h = (r = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(b, x, Y) {
        var g = Y && Y.toUpperCase();
        return x || u[Y] || f[Y] || u[g].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(k, j, A) {
          return j || A.slice(1);
        });
      })).match(d), T = h.length, L = 0; L < T; L += 1) {
        var H = h[L], S = P[H], w = S && S[0], O = S && S[1];
        h[L] = O ? { regex: w, parser: O } : H.replace(/^\[|\]$/g, "");
      }
      return function(b) {
        for (var x = {}, Y = 0, g = 0; Y < T; Y += 1) {
          var k = h[Y];
          if (typeof k == "string")
            g += k.length;
          else {
            var j = k.regex, A = k.parser, I = b.slice(g), C = j.exec(I)[0];
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
    return function(r, a, u) {
      u.p.customParseFormat = !0, r && r.parseTwoDigitYear && (i = r.parseTwoDigitYear);
      var h = a.prototype, T = h.parse;
      h.parse = function(L) {
        var H = L.date, S = L.utc, w = L.args;
        this.$u = S;
        var O = w[1];
        if (typeof O == "string") {
          var b = w[2] === !0, x = w[3] === !0, Y = b || x, g = w[2];
          x && (g = w[2]), s = this.$locale(), !b && g && (s = u.Ls[g]), this.$d = function(I, C, z) {
            try {
              if (["x", "X"].indexOf(C) > -1)
                return new Date((C === "X" ? 1e3 : 1) * I);
              var D = W(C)(I), U = D.year, F = D.month, st = D.day, rt = D.hours, nt = D.minutes, it = D.seconds, at = D.milliseconds, X = D.zone, $ = /* @__PURE__ */ new Date(), Z = st || (U || F ? 1 : $.getDate()), N = U || $.getFullYear(), v = 0;
              U && !F || (v = F > 0 ? F - 1 : $.getMonth());
              var V = rt || 0, J = nt || 0, _ = it || 0, G = at || 0;
              return X ? new Date(Date.UTC(N, v, Z, V, J, _, G + 60 * X.offset * 1e3)) : z ? new Date(Date.UTC(N, v, Z, V, J, _, G)) : new Date(N, v, Z, V, J, _, G);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(H, O, S), this.init(), g && g !== !0 && (this.$L = this.locale(g).$L), Y && H != this.format(O) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
        } else if (O instanceof Array)
          for (var k = O.length, j = 1; j <= k; j += 1) {
            w[1] = O[j - 1];
            var A = u.apply(this, w);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            j === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          T.call(this, L);
      };
    };
  });
})(Q);
var dt = Q.exports;
const ft = /* @__PURE__ */ E(dt);
var tt = { exports: {} };
(function(m, p) {
  (function(f, d) {
    m.exports = d();
  })(B, function() {
    var f = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(d, M, t) {
      var e = M.prototype, s = e.format;
      t.en.formats = f, e.format = function(i) {
        i === void 0 && (i = "YYYY-MM-DDTHH:mm:ssZ");
        var n = this.$locale().formats, o = function(c, y) {
          return c.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(P, W, r) {
            var a = r && r.toUpperCase();
            return W || y[r] || f[r] || y[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(u, h, T) {
              return h || T.slice(1);
            });
          });
        }(i, n === void 0 ? {} : n);
        return s.call(this, o);
      };
    };
  });
})(tt);
var ct = tt.exports;
const lt = /* @__PURE__ */ E(ct);
var et = { exports: {} };
(function(m, p) {
  (function(f, d) {
    m.exports = d();
  })(B, function() {
    return function(f, d, M) {
      d.prototype.isBetween = function(t, e, s, i) {
        var n = M(t), o = M(e), c = (i = i || "()")[0] === "(", y = i[1] === ")";
        return (c ? this.isAfter(n, s) : !this.isBefore(n, s)) && (y ? this.isBefore(o, s) : !this.isAfter(o, s)) || (c ? this.isBefore(n, s) : !this.isAfter(n, s)) && (y ? this.isAfter(o, s) : !this.isBefore(o, s));
      };
    };
  });
})(et);
var mt = et.exports;
const yt = /* @__PURE__ */ E(mt), Mt = (m, p = "warning") => {
  let f = !1;
  const d = Array.isArray(m) ? m.join(`
`) : m;
  return () => {
    f || (f = !0, p === "error" ? console.error(d) : console.warn(d));
  };
};
l.extend(ft);
l.extend(lt);
l.extend(yt);
const pt = Mt(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale"]), Tt = {
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
}, gt = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  weekday: "dddd",
  weekdayShort: "ddd",
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
`), q = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Dt = (m, p) => p ? (...f) => m(...f).locale(p) : m;
class xt {
  constructor({
    locale: p,
    formats: f,
    instance: d
  } = {}) {
    var M;
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.rawDayJsInstance = void 0, this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = Tt, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof l.utc < "u", this.hasTimezonePlugin = () => typeof l.tz < "u", this.isSame = (t, e, s) => {
      const i = this.setTimezone(e, this.getTimezone(t));
      return t.format(s) === i.format(s);
    }, this.cleanTimezone = (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return l.tz.guess();
        default:
          return t;
      }
    }, this.createSystemDate = (t) => {
      if (this.rawDayJsInstance)
        return this.rawDayJsInstance(t);
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const e = l.tz.guess();
        return e !== "UTC" ? l.tz(t, e) : l(t);
      }
      return l(t);
    }, this.createUTCDate = (t) => {
      if (!this.hasUTCPlugin())
        throw new Error(R);
      return l.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(R);
      if (!this.hasTimezonePlugin())
        throw new Error(q);
      const s = t !== void 0 && !t.endsWith("Z");
      return l(t).tz(this.cleanTimezone(e), s);
    }, this.getLocaleFormats = () => {
      const t = l.Ls, e = this.locale || "en";
      let s = t[e];
      return s === void 0 && (pt(), s = t.en), s.formats;
    }, this.adjustOffset = (t) => {
      if (!this.hasTimezonePlugin())
        return t;
      const e = this.getTimezone(t);
      if (e !== "UTC") {
        var s, i;
        const n = t.tz(this.cleanTimezone(e), !0);
        return ((s = n.$offset) != null ? s : 0) === ((i = t.$offset) != null ? i : 0) ? t : n;
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
        throw new Error(q);
      }
      return l.tz(t, this.cleanTimezone(e));
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
        const y = Math.floor(n / 7);
        c[y] = c[y] || [], c[y].push(o), o = this.addDays(o, 1), n += 1;
      }
      return c;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = (t, e) => {
      const s = t.startOf("year"), i = e.endOf("year"), n = [];
      let o = s;
      for (; o < i; )
        n.push(o), o = this.addYears(o, 1);
      return n;
    }, this.getMeridiemText = (t) => t === "am" ? "AM" : "PM", this.rawDayJsInstance = d, this.dayjs = Dt((M = this.rawDayJsInstance) != null ? M : l, p), this.locale = p, this.formats = ot({}, gt, f), l.extend(ut);
  }
}
export {
  xt as A
};
