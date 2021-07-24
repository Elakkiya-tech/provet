import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Styles from '../Style/Style';

function Login(props) {
	const { classes } = props;

return (
		<div className="sample">
		<Grid container>
		<Grid align="center" item xs={12} md={3}>
			<Paper className={classes.paperStyle}>
				<h1>LOGIN</h1>
				<PersonIcon style={{ margin: '50px auto' }} />
				<TextField className={classes.nameStyle} label="Username" placeholder="Enter username"  />
				<br />
				<LockIcon style={{ margin: '20px auto' }} />
				<TextField className={classes.passStyle} label="Password" placeholder="Enter password" type="password"  />
				<br />
				<Button className={classes.buttonStyle} variant="contained" color="primary">
					login
				</Button>
				<Typography>
					Don't you have an account?
					<Link href="#" >
						&nbsp;Signup
					</Link>
				</Typography>
			</Paper>
		</Grid>
		</Grid>
		</div>
	);
}
Login.propTypes = {
classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Login);





	
