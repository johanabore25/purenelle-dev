import React from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import useStyles from "../styles";

const SignUp = () => {
	const classes = useStyles({});

	return (
		<div className={classes.mainDiv}>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item md={6} container spacing={2}>
					<Grid item md={12}>
						<Typography variant="h4" color="primary" gutterBottom className={classes.titleText}>
							Create An Account
						</Typography>
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="First Name" />
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="Last Name" />
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="Email" />
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="Phone Number" />
					</Grid>
					<Grid item md={12}>
						<TextField variant="outlined" fullWidth placeholder="Password" />
					</Grid>
					<Grid item container md={12} justifyContent="flex-start" alignItems="center" spacing={2}>
						<Grid item md={6}>
							<Button variant="contained" color="secondary" fullWidth>
								Submit
							</Button>
						</Grid>
						<Grid item md={6}>
							<Link to="/" className={classes.link}>
								<Typography
									variant="subtitle1"
									color="primary"
									className={classes.text}
									style={{ marginLeft: "0.8rem" }}
								>
									Cancel
								</Typography>
							</Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
export default SignUp;
