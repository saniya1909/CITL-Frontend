import React from "react";
import { PackageList } from "../data/data"; // Assuming you have a PackageList similar to CityList
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Package = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {PackageList.map((packageItem) => (
          <Card
            key={packageItem.id}
            sx={{ maxWidth: "390px", display: "flex", m: 2 }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={packageItem.image}
                alt={packageItem.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {packageItem.name}
                </Typography>
                <Typography variant="body2">{packageItem.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Package;
