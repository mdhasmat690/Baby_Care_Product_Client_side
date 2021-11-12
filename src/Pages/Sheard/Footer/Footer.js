import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#f3659d", marginTop: "20px" }}
    >
      <div>
        <Grid container spacing={2} sx={{mb: 4}}>
          <Grid item xs={12} md={6}>
            <Typography variant="button" display="block" gutterBottom>
              Level-4, 24, Dinajpur Centre, Dinajpur, Bangladesh
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              Official: kochukhet@.gmail.com
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              Helpline : 01322810867 (Available : 09:00am to 10:00pm)
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="button" display="block" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              Terms and Conditions
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
              Refund policy
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div>
        <h4>Copyright © 2021 Baby Care limited</h4>
      </div>
    </div>
  );
};

export default Footer;
