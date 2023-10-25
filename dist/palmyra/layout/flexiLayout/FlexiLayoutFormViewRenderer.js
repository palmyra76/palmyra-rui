import { jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useImperativeHandle as s } from "react";
import f from "./TabRenderer.js";
const y = c(
  function(t, n) {
    const { layout: a } = t, { data: r } = t;
    s(n, () => ({
      getData() {
        return r.current;
      }
    }), []);
    var i = {
      data: r,
      rules: {},
      onDataChange: () => {
      }
    };
    const m = { formContext: i }, u = a.tabs;
    return /* @__PURE__ */ e("div", { children: u.map((o, d) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
      f,
      {
        layout: o,
        context: m
      }
    ) }, o.name + d)) });
  }
);
export {
  y as default
};
