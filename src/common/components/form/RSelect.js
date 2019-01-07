import React from "react";
import Select from "react-select";
import { theme } from "withStyles";
import BaseInput from "./BaseInput";

const styles = {
  container: base => ({
    ...base,
    maxWidth: 450,
  }),
  singleValue: base => ({
    ...base,
    fontSize: theme.unit.getRem(14),
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "white",
    boxShadow: "none",
    borderColor: state.isFocused ? theme.color.primary : theme.color.gray2,
    ":hover": {
      borderColor: theme.color.gray2,
    },
  }),
  option: base => ({
    ...base,
    fontSize: theme.unit.getRem(14),
  }),
  indicatorSeparator: base => ({
    ...base,
    backgroundColor: "transparent",
  }),
  placeholder: base => ({
    ...base,
    fontSize: theme.unit.getRem(14),
  }),
};

function triggerChange(val, props) {
  props &&
    props.input &&
    props.input.onChange &&
    props.input.onChange(
      !props.isMulti ? val : val.map(individual => individual.value),
    );
}

const SkillsInput = props => (
  <BaseInput {...props}>
    <Select
      styles={styles}
      placeholder={props.placeholder || ""}
      onChange={val => triggerChange(val, props)}
      {...props}
    />
  </BaseInput>
);

export default SkillsInput;
