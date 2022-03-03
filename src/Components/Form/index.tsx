import InputField from "../InputField";
import Card from "@mui/material/Card";
import { CardContent, Typography, Stack } from "@mui/material";
import CustomButton from "../CustonButton";

export default function NoteForm() {
  return (
    <Card sx={{ m: 2 }} component="form" noValidate autoComplete="off">
      <CardContent>
        <Stack spacing={2}>
          <Typography component="div" variant="h5">
            Enter Notes
          </Typography>
          <InputField label="title" id="title" />
          <InputField
            label="Description"
            multiline
            rows={4}
            placeholder="Write Notes Here"
            id="description"
          />
          <CustomButton text="Add Note" />
        </Stack>
      </CardContent>
    </Card>
  );
}
