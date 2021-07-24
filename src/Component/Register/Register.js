import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withStyles } from "@material-ui/core/styles";
import  Styles from '../Style/Style';
import PropTypes from "prop-types";
// import {Alert} from '@material-ui/lab';

function Register(props) {
  const { classes } = props;
  const matches = useMediaQuery("(min-width:600px)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="sample">
      <Grid container>
      <Grid item xs={12} md={3} >
        {" "}
        {matches}
        <Paper className={classes.paperStyles}>
          <Grid align="center">
            <h1 className={classes.headerStyle}>SIGN UP</h1>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <PersonIcon style={{ marginTop: "65px" }} />
            <TextField
              className={classes.namestyles}
              fullWidth
              label="Name"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <EmailIcon style={{ margin: "-5px auto" }} />
            <TextField
              className={classes.emailstyles}
              fullWidth
              label="Email"
              placeholder="Enter your email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <PhoneAndroidIcon style={{ margin: "38px auto" }} />
            <TextField
              className={classes.phonestyles}
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
            />
            <LockIcon />
            <TextField
              className={classes.pswdstyles}
              fullWidth
              label="Password"
              placeholder="Enter your password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockIcon style={{ margin: "38px auto" }} />
            <TextField
              className={classes.pswdstyle}
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Box textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Sign up
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
      </Grid>
    </div>
  );
};
Register.propTypes = {
classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Register);


