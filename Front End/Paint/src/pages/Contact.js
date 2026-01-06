// Contact.js

import React from "react";
import Layout from "./../components/Layout/Layout";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
import contactImage from "../images/contactimage.jpg"; // Import the contact background image


const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "100vh",
          padding: "50px",
          backgroundImage: `url(${contactImage})`, // Set background image
          backgroundSize: "cover", // Cover the entire container with the background image
          backgroundPosition: "center", // Center the background image horizontally and vertically
          backgroundRepeat: "no-repeat", // Do not repeat the background image
        }}
      >
        <Box sx={{ flex: "1", mr: "50px" }}>
        <Box sx={{ my: 5, ml: 3, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          At Om Gurudev Paints, we take pride in our commitment to delivering
          premium quality paints that beautify and protect your spaces. With
          years of expertise in the industry, we have perfected our
          formulations to ensure durability, vibrant colors, and eco-friendly
          solutions.
        </p>
        <Box sx={{ mb: 3 }} /> {/* Add margin between sections */}
      </Box>
          <Box
            sx={{
              width: "600px",
              "@media (max-width:600px)": {
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
                      <WhatsAppIcon sx={{ color: "green", pt: 1 }} /> +91 9226777900
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <MailIcon sx={{ color: "skyblue", pt: 1 }} /> omgurudevpaints@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <CallIcon sx={{ color: "green", pt: 1 }} /> 9623393633
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box sx={{ flex: "1" }}>
          <iframe
            title="Original Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.099380867906!2d74.47390717499779!3d19.83574748153163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc4590731fd7cd%3A0x9cd43bfcbe1438b3!2sOm%20Gurudev%20Paints!5e0!3m2!1sen!2sin!4v1712151805030!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
