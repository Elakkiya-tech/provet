import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Signin =() =>{
    const[value,setValue]=useState(0)
    const handleChange = (event, newValue) => {
		setValue(newValue);
	};
    const paperStyle={width:'570px', margin:'15px auto' ,height:'700px', backgroundColor:'#77ACF1'}
    function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
    return (
		<Paper elevation={20} style={paperStyle}>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				aria-label="disabled tabs example"
			>
				<Tab label="Login" />
				<Tab label="Signup" />
			</Tabs>
			<TabPanel value={value} index={0}>
				<Login handleChange={handleChange} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Register />
			</TabPanel>
		</Paper>
	);
}
export default Signin;