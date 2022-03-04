import React, { useState } from "react";
import InputField from "../InputField";
import Card from "@mui/material/Card";
import { CardContent, Typography, Stack } from "@mui/material";
import CustomButton from "../CustonButton";
import SendIcon from "@mui/icons-material/Send";

export default function NoteForm() {
  const [note, setNotes] = useState([{}]);

  const handelChange = (event: any) => {
    setNotes({ ...note, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <Card
      sx={{ my: 4 }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <CardContent>
        <Stack spacing={2}>
          <Typography component="div" variant="h5">
            Enter Notes
          </Typography>
          <InputField
            label="title"
            id="title"
            name="title"
            onChange={handelChange}
          />
          <InputField
            label="Description"
            multiline
            rows={4}
            placeholder="Write Notes Here"
            id="description"
            name="description"
            onChange={handelChange}
          />
          <CustomButton
            variant="contained"
            text="Add Note"
            type="submit"
            endIcon={<SendIcon />}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
