import React from "react";
import Button from "@mui/material/Button";

interface Button {
  text: string;
}
export default function CustomButton({ text }: Button) {
  return (
      <Button variant="contained">
        {text}
      </Button>
  );
}
