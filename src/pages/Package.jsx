//import React from 'react'

//const Package = () => {
  //return (
    //<div>
        
    //</div>
  //)
//}

//export default Package
import React from "react";
import { PackageList } from "../data/data";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Package = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {PackageList.map((packageItem) => (
          <Link key={packageItem.id} to={`/packages/${packageItem.id}`}>
            {/* Use Link to navigate to a dynamic route */}
            <Card
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
          </Link>
        ))}
      </Box>
    </Layout>
  );
};

export default Package;
