import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = React.forwardRef(
  ({ placeholder, onChangeInput, value, name, onBlurInput }, ref) => {
    return (
      <input
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChangeInput}
        value={value}
        name={name}
        onBlur={onBlurInput}
        ref={ref}
      />
    );
  }
);

Input.propTypes = {
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  onBlurInput: PropTypes.func,
};

export default Input;
