import Button from "@mui/material/Button";
interface ButtonType {
  text: string;
  size?: string;
  color?: string;
  variant?: string;
  startIcon?: any;
  endIcon?: any;
}
export default function CustomButton({
  text,
  ...otherButtonProps
}: ButtonType) {
  return <Button {...otherButtonProps}>{text}</Button>;
}
