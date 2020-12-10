import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "fit-content",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function ChipMui({ label }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        size="small"
        label={label}
        color={
          label === "overdue"
            ? "secondary"
            : label === "paid"
            ? "primary"
            : "default"
        }
      />
    </div>
  );
}
