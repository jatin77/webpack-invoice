import React from "react";
import { SketchPicker } from "react-color";

const ColorSelect = ({ value, setValue }) => (
  <SketchPicker
    color={value}
    onChangeComplete={(color) => setValue(color.hex)}
  />
);

export default ColorSelect;
