import { jsx as e } from "react/jsx-runtime";
import m from "./FormViewRenderer.js";
import c from "../container/SectionContainer.js";
const l = (o) => {
  const { layout: r, context: t } = o;
  var n = r.Renderer || m, i = r.Container || c;
  return /* @__PURE__ */ e(i, { ...r, children: ((a) => /* @__PURE__ */ e(
    n,
    {
      context: t,
      formLayout: a
    }
  ))(r.formLayout) });
};
export {
  l as default
};
