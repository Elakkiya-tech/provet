import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

const Login=({handleChange}) => {
	const paperStyle = {
  padding: "30px 35px",
  height: "595px",
  width: "330px",
  margin: "0 auto",
};
const nameStyle = { margin: "30px 10px", width: "280px" };
const passStyle = { margin: "0 10px", width: "280px" };
const buttonStyle = { margin: "50px auto" };

return (
		<div className="sample">
		<Grid align="center">
			<Paper style={paperStyle}>
				<h1>LOGIN</h1>
				<PersonIcon style={{ margin: '50px auto' }} />
				<TextField style={nameStyle} label="Username" placeholder="Enter username"  />
				<br />
				<LockIcon style={{ margin: '20px auto' }} />
				<TextField style={passStyle} label="Password" placeholder="Enter password" type="password"  />
				<br />
				<Button style={buttonStyle} variant="contained" color="primary">
					login
				</Button>
				<Typography>
					Do you have an account?
					<Link href="#" onclick={() => handleChange("event",1)}>
						&nbsp;Signup
					</Link>
				</Typography>
			</Paper>
		</Grid>
		</div>
	);
}

export default Login;





				
