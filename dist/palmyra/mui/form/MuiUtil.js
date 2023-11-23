const r = (e, l, t) => {
  var i = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: l,
    variant: e.variant
  };
  return t && (i.label = t), i;
}, a = (e) => e.required && e.title ? e.title + "*" : e.title;
export {
  r as copyMuiOptions,
  a as getFieldLabel
};
