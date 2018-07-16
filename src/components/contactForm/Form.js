import React from "react";
import { Field, reduxForm } from "redux-form";
import InputWrapper from "./InputWrapper";
import SelectWrapper from "./SelectWrapper";

const validate = values => {
  const errors = {};
  const errorRequired = "The field is required";

  if (!values.username) {
    errors.username = errorRequired;
  } else if (/[0-9\- ]+$/.test(values.username)) {
    errors.username = "Can not be a number";
  }
  if (!values.email) {
    errors.email = errorRequired;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.options || values.options.length < 1) {
    errors.options = errorRequired;
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = "Hmm, you seem a bit young...";
  }
  return warnings;
};

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const options = [{ value: 1, label: "One" }, { value: 2, label: "Two" }];
  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="username"
        name="username"
        type="text"
        component={InputWrapper}
        label="Username"
      />
      <Field
        id="email"
        name="email"
        type="email"
        component={InputWrapper}
        label="Email"
      />
      <Field
        id="options"
        name="options"
        component={props => (
          <SelectWrapper
            id="option"
            name="option"
            input={props.input}
            options={options}
            meta={props.meta}
            label="Choose options"
            multi
          />
        )}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(SyncValidationForm);
