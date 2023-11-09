import React, { useState } from "react";
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
import {Link, useNavigate} from "react-router-dom";

const Tour = () => {

  const navigate = useNavigate();

  // const [cityName, setCityName] = useState("");

  const handlePageChange = () => {
    console.log("Hello World");
    // localStorage.setItem('cityName', city.name);
    navigate("/user-dashboard/Tour/package");
  }

  return (
    <UserLayout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {CityList.map((city) => (
          <Card onClick={handlePageChange} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
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
