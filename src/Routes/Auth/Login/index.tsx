import React from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import useStyles from "../styles";

const SignIn = () => {
	const classes = useStyles({});

	return (
		<div className={classes.mainDiv}>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item md={6} container spacing={2}>
					<Grid item md={12}>
						<Typography variant="h4" color="primary" gutterBottom className={classes.titleText}>
							Login
						</Typography>
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="Email" />
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="Password" />
					</Grid>
					<Grid item md={6}></Grid>
					<Grid item md={6}>
						<Link to="/signup" className={classes.link}>
							<Typography variant="subtitle1" color="primary" gutterBottom className={classes.text}>
								Recover Password
							</Typography>
						</Link>
					</Grid>
					<Grid item md={4}>
						<Button variant="contained" color="secondary" fullWidth>
							Log In
						</Button>
					</Grid>
					<Grid item container md={12} justifyContent="flex-start" alignItems="center">
						<Grid item md={4}>
							<Typography variant="subtitle1" color="primary" gutterBottom className={classes.text}>
								If you don't have an account
							</Typography>
						</Grid>
						<Grid item md={8}>
							<Link to="/signup" className={classes.link}>
								<Typography
									variant="subtitle1"
									color="secondary"
									gutterBottom
									className={classes.titleText}
								>
									Create Account
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
export default SignIn;
