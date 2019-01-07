import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Formik, Form, Field } from "formik";

// Components
import Panel from "common/components/Panel";
import Input from "common/components/form/Input";
import Select from "common/components/form/RSelect";
import Textarea from "common/components/form/Textarea";
import Button from "common/components/Button";
import Switch from "common/components/Switch/Switch";
import FormSection from "common/components/form/FormSection";
import Title from "app/components/Title";
import QuestionsInput from "common/components/form/QuestionsInput";
import PictureInput from "common/components/form/PictureInput";

import { NotEmptyValidator, AtLeastOne } from "common/utils/formValidators";
import { withStyles, css } from "withStyles";

const initialValues = {
  title: "",
  remote: true,
};

class CreateJob extends Component {
  handleSubmitted = formProps => {
    localStorage.setItem("job", JSON.stringify(formProps));
  };

  render() {
    return (
      <React.Fragment>
        <Panel title={<Panel.Title icon="form" label="Create a new job" />}>
          <Formik onSubmit={this.handleSubmitted} initialValues={initialValues}>
            {({ isSubmitting, setFieldValue, handleSubmit }) => (
              <Form>
                <FormSection>
                  <Field
                    name="title"
                    component={Input}
                    label="Job title"
                    validate={NotEmptyValidator}
                  />
                  <div {...css(this.props.styles.container)}>
                    <Field
                      name="city"
                      component={Input}
                      label="City"
                      size="small"
                      validate={NotEmptyValidator}
                      style={{ marginRight: 30 }}
                    />
                    <Field
                      name="country"
                      component={Input}
                      label="Country"
                      size="small"
                      validate={NotEmptyValidator}
                    />
                  </div>
                  <div {...css(this.props.styles.container)}>
                    <Field
                      name="salary"
                      component={Input}
                      label="Salary"
                      type="number"
                      min="0"
                      size="small"
                      style={{ marginRight: 30 }}
                    />
                    <Field
                      name="experience"
                      component={Input}
                      label="Experience (Years)"
                      type="number"
                      min="0"
                      size="small"
                    />
                  </div>
                  <Field
                    name="description"
                    component={Textarea}
                    label="Job description"
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name="type"
                    label="Job type"
                    component={Select}
                    validate={NotEmptyValidator}
                    placeholder="Select a job type"
                    options={[
                      {
                        label: "Full-time",
                        value: "fulltime",
                      },
                      {
                        label: "Part-time",
                        value: "parttime",
                      },
                      {
                        label: "Freelance",
                        value: "freelance",
                      },
                      {
                        label: "Temporary",
                        value: "temporary",
                      },
                    ]}
                  />
                  <label style={{ display: "block", marginBottom: 10 }}>
                    Is remote ok ?
                  </label>
                  <Field
                    name="remote"
                    component={Switch}
                    labeled
                    onLabel={"YES"}
                    offLabel={"NO"}
                  />
                </FormSection>
                <FormSection>
                  <Title>Things to ask</Title>
                  <div {...css(this.props.styles.text)}>Ask for things</div>
                  <Field
                    name="things"
                    placeholder="Please select things to ask"
                    closeMenuOnSelect={false}
                    isMulti
                    options={[
                      { value: "fullname", label: "Full name" },
                      { value: "email", label: "Email" },
                      { value: "phone", label: "Phone" },
                      { value: "experience", label: "Work Experience" },
                      { value: "education", label: "Education" },
                      { value: "current_location", label: "Current location" },
                    ]}
                    component={Select}
                    validate={AtLeastOne}
                  />
                </FormSection>
                <FormSection>
                  <Title>Social links to ask</Title>
                  <div {...css(this.props.styles.text)}>
                    Here you can ask for the candidate social links
                  </div>
                  <Field
                    name="social"
                    placeholder="Please select social links to ask"
                    closeMenuOnSelect={false}
                    isMulti
                    options={[
                      { value: "linkedin", label: "LinkedIn" },
                      { value: "github", label: "Github" },
                      { value: "twitter", label: "Twitter" },
                      { value: "facebook", label: "Facebook" },
                    ]}
                    component={Select}
                    validate={AtLeastOne}
                  />
                </FormSection>
                <FormSection>
                  <Title>Questions</Title>
                  <Field
                    name="general_questions"
                    component={QuestionsInput}
                    help="General question to ask the candidate. Press Enter to add to the list."
                    label="General Questions"
                    placeholder="Ex: When can you be ready?"
                    validate={AtLeastOne}
                  />
                  <Field
                    name="skill_questions"
                    component={QuestionsInput}
                    help="Skill based question to ask the candidate. Press Enter to add to the list."
                    label="Skill based Questions"
                    placeholder="Ex: What is JavaScript ?"
                    validate={AtLeastOne}
                  />
                </FormSection>
                <FormSection>
                  <Field
                    name="bot_avatar"
                    label="Bot Avatar (optional)"
                    help="Click the button below or drop a bot avatar."
                    component={PictureInput}
                    onChange={e => setFieldValue("bot_avatar", e)}
                    width={100}
                    height={100}
                    borderRadius="10px"
                  />
                </FormSection>
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Button
                    disabled={isSubmitting}
                    color="primary"
                    size="md"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Create job
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Panel>
      </React.Fragment>
    );
  }
}

const styled = withStyles(({ color, unit }) => ({
  text: {
    fontSize: unit.getRem(13),
    color: color.gray,
    maxWidth: 500,
    marginBottom: 20,
  },
  container: {
    display: "flex",
    "@media (max-width: 575px)": {
      flexDirection: "column",
      marginBottom: 30,
    },
  },
  boxsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "@media (max-width: 575px)": {
      flexDirection: "column",
      marginBottom: 30,
    },
  },
}));

CreateJob.tabProps = {
  label: "Create Job",
  icon: "form",
  iconActive: "form",
  href: "/jobs/create",
};

function mapStateToProps() {
  return {};
}

export default compose(
  connect(mapStateToProps),
  styled,
)(CreateJob);
