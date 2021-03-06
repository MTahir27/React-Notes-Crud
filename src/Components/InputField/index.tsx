import React, { FC } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface InputField {
  label: string;
  placeholder?: string;
  id?: string;
  multiline?: any;
  rows?: number;
  onChange?: any;
  name?: "string" | any;
}

export default function InputField({ label, ...otherInputProps }: InputField) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        helperText=""
        id="demo-helper-text-aligned-no-helper"
        label={label}
        {...otherInputProps}
        style={{ textTransform: "capitalize" }}
      />
    </Box>
  );
}
