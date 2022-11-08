import React from "react";
import {
  Card,
  Box,
  Typography,
  CardActions,
  CardContent,
  Button,
  CardMedia,
  CssBaseline,
} from "@mui/material";
import { Container } from "@mui/system";

function Cards(prop) {
  return (
    <div
   >
      <CssBaseline />
      <Container
       
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          
          }}
          alignItems="center"
          alignContent="center"
        >
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="400"
              image={prop.imageUrl}
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {prop.author}
              </Typography>
              {prop.content}
              <Typography variant="body2"></Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Cards;
