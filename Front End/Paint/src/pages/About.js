import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../images/background.jpeg"; // Import your background image

const About = () => {
  return (
    <Layout>
      <div
        className="about-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">Welcome To Om Gurudev Paints</Typography>
          <p>
            Welcome to Om Gurudev Paints, your premier destination for
            high-quality paints, coatings, and home improvement solutions. At
            Om Gurudev Paints, we are committed to delivering excellence in
            every can of paint we produce. With a legacy of craftsmanship and
            innovation spanning over 16 years, we have established ourselves
            as a trusted name in the industry.
          </p>
          <br />
          <p>
            But we are more than just a paint company. We are a team of skilled
            professionals who are here to support you every step of the way.
            Whether you're a homeowner embarking on a DIY project or a
            contractor working on a large-scale renovation, we are here to help
            you find the perfect paint solution for your needs. Beyond our
            products, we are committed to making a positive impact on the
            environment and the communities we serve. Through sustainable
            practices and community outreach initiatives, we aim to create a
            brighter, more colorful future for generations to come. Thank you
            for choosing Om Gurudev Paints. We look forward to helping you
            transform your vision into reality.
          </p>
        </Box>
      </div>
    </Layout>
  );
};

export default About;
