import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import background from "../images/background.jpg";

const About = () => {
  return (
    <Layout>
       <div className="home" style={{ backgroundImage: `url(${background})`, maxHeight:"91vh" }}>
      <Box
        sx={{
          my: 16,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "3rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "3.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Getaway!!</Typography>
        <p>
        Getaway is more than just a travel website; it's your passport to
        unforgettable experiences. At Getaway, we believe in the power of 
        exploration, connecting people with the world's most mesmerizing destinations.
        Our team of passionate travelers curates immersive tours, ensuring
        every journey is a blend of adventure, culture, and relaxation. With
        a commitment to excellence, we meticulously design itineraries that cater
        to diverse interests and preferences. Whether you're an adrenaline junkie 
        seeking thrilling escapades or a culture enthusiast craving authentic encounters,
        Getaway has the perfect expedition for you. Join us in crafting memories that last 
        a lifetime and embark on a transformative voyage with Getaway, where every trip is a 
        story waiting to be told.
         
        </p>
        <br />
        <p>
        That's a beautifully articulated description of Getaway!
        It vividly portrays Getaway as more than just a travel website,
        but rather a gateway to remarkable experiences. The emphasis on exploration,
        connection, and curated tours reflects a deep understanding of travelers'
        desires for meaningful journeys. The commitment to diverse interests and 
        preferences ensures that Getaway caters to a wide range of travelers. 
        The mention of crafting memories and transformative voyages adds a personal
        touch, inviting readers to be part of something truly special. Well done!

        </p>
      </Box>
    </div>
    </Layout>
  );
};

export default About;
