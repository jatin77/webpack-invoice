import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Dropdown({
  label,
  items,
  value,
  setValue,
  size,
  filter,
}) {
  const classes = useStyles();

  return (
    <div>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        size={size}
        fullWidth={true}
      >
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label={label}
        >
          {filter && <MenuItem value="">None</MenuItem>}
          {items &&
            items.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
