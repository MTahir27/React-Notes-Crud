import InputField from "../InputField";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

export default function NoteForm() {
  return (
    <Card sx={{m: 2}}>
      <CardContent>
        <Typography component="div" variant="h5" sx={{m:1}}>
            Enter Notes
        </Typography>
        <InputField />
        <InputField />
      </CardContent>
    </Card>
  );
}
