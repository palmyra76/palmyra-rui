import { jsx as o } from "react/jsx-runtime";
import c from "./FormEditRenderer.js";
import d from "../container/SectionContainer.js";
const l = (t) => {
  const { layout: r, context: e } = t, { formContext: n } = e;
  var m = r.Renderer || c, a = r.Container || d;
  return /* @__PURE__ */ o(a, { ...r, children: ((i) => /* @__PURE__ */ o(
    m,
    {
      formContext: n,
      formLayout: i
    }
  ))(r.formLayout) });
};
export {
  l as default
};
