import React, { Component } from 'react';
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

class RFReactSelect extends Component {
  static propTypes = {
    input: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      onBlur: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired,
      onFocus: PropTypes.func.isRequired
    }).isRequired,
    options: PropTypes.array.isRequired,
    multi: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
  };

  static defaultProps = {
    multi: false,
  };

  singleChangeHandler = func => {
    return function handleSingleChange(value) {
      func(value ? value.value : "");
    };
  };

  /**
   * onBlur from Redux Form Field has to be called explicity.
   */
  multiChangeHandler = func => {
    return function handleMultiHandler(values) {
      func(values.map(value => value.value));
    };
  };

  transformValue = (value, options, multi) => {
    if (multi && typeof value === "string") return [];

    const filteredOptions = options.filter(option => {
      return multi
        ? value.indexOf(option.value) !== -1
        : option.value === value;
    });

    return multi ? filteredOptions : filteredOptions[0];
  };
  render() {
    const { input, options, multi, placeholder } = this.props;
    const { name, value, onBlur, onChange, onFocus } = input;
    const transformedValue = this.transformValue(value, options, multi);
    return (
      <Select
        valueKey="value"
        name={name}
        value={transformedValue}
        multi={multi}
        options={options}
        placeholder={placeholder}
        onChange={
          multi
            ? this.multiChangeHandler(onChange)
            : this.singleChangeHandler(onChange)
        }
        onBlur={() => onBlur(value)}
        onFocus={onFocus}
      />
    );
  }
}

export default RFReactSelect;
