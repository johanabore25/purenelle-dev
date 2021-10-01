import React from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

const SignIn = () => {
	return (
		<div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item md={6} container spacing={2}>
					<Grid item md={12}>
						<Typography variant="h4" gutterBottom style={{ fontWeight: 700 }}>
							Login
						</Typography>
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="Email" />
					</Grid>
					<Grid item md={6}>
						<TextField variant="outlined" fullWidth placeholder="Password" />
					</Grid>
					<Grid item md={6}>
						<Button variant="contained" color="secondary">
							sign in
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
export default SignIn;
