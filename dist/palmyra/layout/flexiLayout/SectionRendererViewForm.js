import { jsx as e } from "react/jsx-runtime";
import m from "./FormViewRenderer.js";
import { S as c } from "../../../chunks/SectionContainer.js";
const l = (o) => {
  const { layout: r, context: t } = o;
  var n = r.Renderer || m, a = r.Container || c;
  return /* @__PURE__ */ e(a, { ...r, children: ((i) => /* @__PURE__ */ e(
    n,
    {
      context: t,
      formLayout: i
    }
  ))(r.formLayout) });
};
export {
  l as default
};
