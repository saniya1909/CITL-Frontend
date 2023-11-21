import React from "react";
import CommonSection from "../shared/commonSection/CommonSection";
import "../styles/about.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <CommonSection title={"About Us"} />

      {/* Section 1: About Getaway */}
      <section className="info-container">
      <div className="paragraph-container" style={{ width: "70%", alignItems: "center", backgroundColor: "#b4d3f0", borderRadius: "15px", padding: "20px" }}>
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
      </div>
      </section>

      {/* Section 2: Contact Details */}
      <section className="contact-container">
      <div style={{ marginTop: "20px" }}>
        <Box
          sx={{
            m: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className="paragraph-container">
            <p className="custom-paragraph">
              "Unlock the world of seamless travel, where every destination is an experience waiting to be explored. Wherever your wanderlust takes you, our travel management ensures every moment is an unforgettable adventure."
            </p>
          </div>

          <Box
            sx={{
              m: 3,
              width: "500px",
              ml: 10,
              "@media (max-width:500px)": {
                width: "300px",
              },
            }}
          >
            <TableContainer component={Paper}>
              <Table aria-label="contact table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ bgcolor: "black", color: "white" }}
                      align="center"
                    >
                      Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1900-00-0000
                      (toll-free)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <MailIcon sx={{ color: "skyblue", pt: 1 }}  /> <a href="mailto:getawayfindyourway@gmail.com">getawayfindyourway@gmail.com</a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1 }} /> 8450912345
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </div>
      </section>
    </div>
  );
};

export default About;
