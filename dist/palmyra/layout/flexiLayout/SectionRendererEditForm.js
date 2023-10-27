import { jsx as e } from "react/jsx-runtime";
import m from "./FormEditRenderer.js";
import d from "../container/SectionContainer.js";
const l = (o) => {
  const { layout: r, context: t } = o;
  var n = r.Renderer || m, a = r.Container || d;
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
