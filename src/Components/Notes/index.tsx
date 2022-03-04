import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomButton from "../CustonButton";
const Notes = () => {
  return (
    <Card>
      <CardHeader title="1-Card Heading" sx={{ mb: 0 }}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          asperiores minima consequatur unde totam quia facilis quas fugit
          earum, iste delectus praesentium laudantium sit aliquid dolore
          perferendis quod eos. Explicabo.
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 2, pt: 0, pb: 2 }}>
        <CustomButton
          variant="contained"
          size="small"
          text="Edit"
          startIcon={<EditIcon />}
        />
        <CustomButton
          variant="contained"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          text="Delete"
        />
      </CardActions>
    </Card>
  );
};

export default Notes;
