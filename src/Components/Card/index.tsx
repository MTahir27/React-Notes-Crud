import { CardHeader, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const CardComponent = () => {
  return (
    <Card sx={{maxWidth: 300}}>
      <CardContent>
          <Typography variant="h5" component="div">
            Lizard
          </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
