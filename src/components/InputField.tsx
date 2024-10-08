import { TextField } from "@mui/material";
import React from "react";
import { authField } from "../styles/auth";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      InputLabelProps={{ style: { color: "#fff" } }}
      sx={authField}
    />
  );
};

export default InputField;
