import Button from "@mui/material/Button";
interface ButtonType {
  text: string;
  size?: "small" | "medium" | "large" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  variant?: "contained" | "text" | "outlined" | undefined;
  startIcon?: any;
  endIcon?: any;
}

export default function CustomButton({
  text,
  ...otherButtonProps
}: ButtonType) {
  return <Button {...otherButtonProps}>{text}</Button>;
}
