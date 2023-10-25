import { jsx as e } from "react/jsx-runtime";
import d from "./FormViewRenderer.js";
import c from "../container/SectionContainer.js";
const l = (o) => {
  const { layout: r, context: t } = o, { formContext: n } = t;
  var a = r.Renderer || d, i = r.Container || c;
  return /* @__PURE__ */ e(i, { ...r, children: ((m) => /* @__PURE__ */ e(
    a,
    {
      data: n.data,
      formLayout: m
    }
  ))(r.formLayout) });
};
export {
  l as default
};
