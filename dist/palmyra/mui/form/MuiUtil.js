const i = (e, d, a) => {
  var r = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: d,
    variant: e.variant
  };
  return a && (r.label = a), r;
};
export {
  i as copyMuiOptions
};
