import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Notes from "../Notes";
export default function NotesContainer() {
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Notes />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Notes />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Notes />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Notes />
        </Grid>
      </Grid>
    </Box>
  );
}
