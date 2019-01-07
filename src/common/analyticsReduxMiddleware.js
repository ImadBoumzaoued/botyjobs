const MAP_ANALYTIC_EVENTS = {
  "@@redux-form/FOCUS": {
    name: "FormField Focused",
    traits: action => ({
      formName: action.meta.form,
      fieldName: action.meta.field,
    }),
  },
  "@@redux-form/BLUR": {
    name: "FormField Blurred",
    traits: action => ({
      formName: action.meta.form,
      fieldName: action.meta.field,
    }),
  },
  "@@redux-form/SET_SUBMIT_FAILED": {
    name: "Form SubmitFailed",
    traits: action => ({
      formName: action.meta.form,
    }),
  },
  "@@redux-form/SET_SUBMIT_SUCCEEDED": {
    name: "Form SubmitSucceded",
    traits: action => ({
      formName: action.meta.form,
    }),
  },
};

function analyticsMiddleware() {
  return next => action => {
    const analyticsEventMap = MAP_ANALYTIC_EVENTS[action.type];
    if (analyticsEventMap) {
      let traits;
      if (analyticsEventMap.traits) {
        traits = analyticsEventMap.traits(action);
      }
      window.analytics.track(analyticsEventMap.name, traits);
    }
    return next(action);
  };
}

export default analyticsMiddleware;
