import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from 'styled-components';
import InputWrapper from "./InputWrapper";
import SelectWrapper from "./SelectWrapper";
import Button from "../ui/button/button";

const FormStyles = styled.form`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: center;
  }
  @media (min-width: 1240px) {
    grid-template-columns: repeat(2, 40%);
  }
`;

const ButtonsWrapperStyles = styled.div`
  @media (min-width: 768px) {
    grid-column: 1;
  }
`;

const validate = values => {
  const errors = {};
  const errorRequired = "The field is required";

  if (!values.username) {
    errors.username = errorRequired;
  } else if (/[0-9\- ]+$/.test(values.username)) {
    errors.username = "Can not be a number";
  }

  if (!values.surname) {
    errors.surname = errorRequired;
  } else if (/[0-9\- ]+$/.test(values.username)) {
    errors.surname = "Can not be a number";
  }
  if (!values.email) {
    errors.email = errorRequired;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.options || values.options.length < 1) {
    errors.options = errorRequired;
  }
  if (!values.countries || values.countries.length < 1) {
    errors.countries = errorRequired;
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

const ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const options = [{ value: 1, label: "One" }, { value: 2, label: "Two" }];
  return (
    <FormStyles onSubmit={handleSubmit}>
      <Field
        id="username"
        name="username"
        type="text"
        component={InputWrapper}
        label="Name"
      />
      <Field
        id="surname"
        name="surname"
        type="text"
        component={InputWrapper}
        label="Surname"
      />
      <Field
        id="email"
        name="email"
        type="email"
        component={InputWrapper}
        label="Email"
      />
      <Field
        id="countries"
        name="countries"
        component={props => (
          <SelectWrapper
            id="option"
            name="option"
            input={props.input}
            options={options}
            meta={props.meta}
            label="Choose country"
            placeholder="Choose country"
          />
        )}
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
            placeholder="Choose Options"
            multi
          />
        )}
      />
      <ButtonsWrapperStyles>
        <Button type="submit" disabled={submitting}>
          Submit
        </Button>
        <Button secondary type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </ButtonsWrapperStyles>
    </FormStyles>
  );
};

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(ContactForm);
