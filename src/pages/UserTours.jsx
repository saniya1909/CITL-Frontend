import React from "react";
import { CityList } from "../data/data";
import UserLayout from "../components/Layout/UserLayout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Tour = () => {
  return (
    <UserLayout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {CityList.map((city) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={city.image}
                alt={city.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {city.name}
                </Typography>
                <Typography variant="body2">{city.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </UserLayout>
  );
};

export default Tour;
