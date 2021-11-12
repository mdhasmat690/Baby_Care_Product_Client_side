import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <h4>About Baby Care</h4>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ my: 5 }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              sWith more than 2,500 employees already hired, we are well on our
              way to create more than 5,000 corporate and technology jobs in
              Music City. Take a look through our newly recleased photos for a
              sneak peek at Amazon's new office in Nashville, Tennessee.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              sx={{ my: 5 }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              Your support can help better the local community. Learn more about
              CTJFS today. Elayne and James Schoke Jewish Family Service –
              Serving Fairfield County. Professional Support. Quality Care.
              Reasonable Rates. Excellent References.
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Your support can help better the local community. Learn more about
              CTJFS today. Elayne and James Schoke Jewish Family Service –
              Serving Fairfield County. Professional Support. Quality Care.
              Reasonable Rates. Excellent References.
            </Typography>
            <Typography
              sx={{ my: 5 }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              Your support can help better the local community. Learn more about
              CTJFS today. Elayne and James Schoke Jewish Family Service –
              Serving Fairfield County. Professional Support. Quality Care.
              Reasonable Rates. Excellent References.
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              Your support can help better the local community. Learn more about
              CTJFS today. Elayne and James Schoke Jewish Family Service –
              Serving Fairfield County. Professional Support. Quality Care.
              Reasonable Rates. Excellent References.
            </Typography>
            <Typography
              sx={{ my: 5 }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              Your support can help better the local community. Learn more about
              CTJFS today. Elayne and James Schoke Jewish Family Service –
              Serving Fairfield County. Professional Support. Quality Care.
              Reasonable Rates. Excellent References.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
