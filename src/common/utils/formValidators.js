export const NotEmptyValidator = value => {
  if (!value) {
    return "This field is required.";
  }
};

export const AtLeastOne = value => {
  if (!value || (value && value.length === 0)) {
    return "Must have at least one item.";
  }
};
