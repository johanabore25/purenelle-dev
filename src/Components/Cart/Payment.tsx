import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

const Payment = () => {
	return (
		<div style={{ width: "100%", height: "80vh", display: "flex", alignItems: "center" }}>
			<Grid container justifyContent="center" alignItems="center" spacing={2}>
				<Grid item md={4} container justifyContent="center" spacing={2}>
					<Grid item md={12}>
						<Typography>Payment</Typography>
					</Grid>
					<Grid item md={12}>
						<TextField fullWidth variant="outlined" placeholder="Card Number" />
					</Grid>
					<Grid item md={4}>
						<TextField variant="outlined" placeholder="Month" />
					</Grid>
					<Grid item md={4}>
						<TextField variant="outlined" placeholder="Year" />
					</Grid>
					<Grid item md={4}>
						<TextField variant="outlined" placeholder="CVV" />
					</Grid>
					<Grid item md={6}>
						<Button variant="outlined" color="primary" fullWidth>
							Cancel
						</Button>
					</Grid>
					<Grid item md={6}>
						<Button variant="contained" color="secondary" fullWidth>
							Pay
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Payment;
