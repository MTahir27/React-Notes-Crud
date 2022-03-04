import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Notes from "../Notes";
export default function NotesContainer() {
  const noteData = localStorage.getItem("Notes");
  let notesArray = JSON.parse(noteData);

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <Grid container spacing={4}>
        {/* {notesArray.foreach(({ index, note }: any) => {
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Notes />
          </Grid>;
        })} */}
      </Grid>
    </Box>
  );
}
