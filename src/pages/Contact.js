import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import background from "../images/background.jpg";
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

const Contact = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${background})`, maxHeight:"92vh" }}>

      <Box sx={{ my: 5, ml: 10, "& h4": { color:"red",fontWeight: "bold", mb: 4 } }}>
        <Typography variant="h4">Contact Our Iternery Management Team</Typography>
        <p>
        "Unlock the world of seamless travel, where every destination is
         an experience waiting to be explored.<br/>
         "Wherever your wanderlust takes you, our travel management ensures
          every moment is an unforgettable adventure."
        </p>
      </Box>
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
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@getaway.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
     </div>
    </Layout>
  );
};

export default Contact;
