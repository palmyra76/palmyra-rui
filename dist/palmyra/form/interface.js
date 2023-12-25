const e = {
  onSaveSuccess: function(o) {
  },
  onSaveFailure: function(o) {
    console.error("Error while saving", o);
  }
};
export {
  e as NoopFormListener
};
