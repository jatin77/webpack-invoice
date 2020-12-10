import React from "react";
import "./style.scss";

const InputField = ({ value, setValue, label, type, placeholder }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        id={label ? label : placeholder}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputField;
