import React from "react";
import { TextField, Typography, Grid, Button, Divider } from "@material-ui/core";

const Shipping = () => {
	return (
		<div style={{ padding: "3rem" }}>
			<Grid container justifyContent="space-around" alignItems="flex-start" spacing={2}>
				<Grid item md={12} container justifyContent="center" alignItems="center">
					<Grid item md={2}>
						<Typography>Shipping</Typography>
					</Grid>
					<Grid item md={2}>
						<Typography>Payment</Typography>
					</Grid>
					<Grid item md={2}>
						<Typography>Done</Typography>
					</Grid>
				</Grid>
				<Grid item md={7} container spacing={2}>
					<Grid item md={12}>
						<Typography>Shipping address</Typography>
					</Grid>
					<Grid item md={6}>
						<TextField fullWidth variant="outlined" placeholder="First Name" />
					</Grid>
					<Grid item md={6}>
						<TextField fullWidth variant="outlined" placeholder="Last Name" />
					</Grid>
					<Grid item md={2}>
						<TextField fullWidth variant="outlined" defaultValue="+27" disabled />
					</Grid>
					<Grid item md={10}>
						<TextField variant="outlined" fullWidth placeholder="Phone number of reciepient" />
					</Grid>
					<Grid md={12} item>
						<TextField fullWidth variant="outlined" placeholder="Company(optional)" />
					</Grid>
					<Grid item md={12}>
						<TextField fullWidth variant="outlined" placeholder="Street address" />
					</Grid>
					<Grid item md={12}>
						<TextField fullWidth variant="outlined" placeholder="Apartment, suite, etc. (optional)" />
					</Grid>
					<Grid item md={12}>
						<TextField fullWidth variant="outlined" placeholder="City" />
					</Grid>
					<Grid item md={4}>
						<TextField fullWidth variant="outlined" disabled defaultValue="South Africa" />
					</Grid>
					<Grid item md={4}>
						<TextField fullWidth variant="outlined" placeholder="Province" />
					</Grid>
					<Grid item md={4}>
						<TextField fullWidth variant="outlined" placeholder="Postal Code" />
					</Grid>
					<Grid item md={4}>
						<Button color="secondary" variant="contained" fullWidth>
							Proceed to Payment
						</Button>
					</Grid>
					<Grid item md={4}>
						<Button color="secondary" fullWidth>
							Return to Cart
						</Button>
					</Grid>
				</Grid>
				<Grid item md={2} container justifyContent="space-between" spacing={1}>
					<Grid item md={12}>
						<Typography gutterBottom>PAYMENT SUMMARY</Typography>
					</Grid>
					<Grid item md={12} container justifyContent="space-between" alignItems="center">
						<Grid item md={6}>
							<Typography gutterBottom>SUBTOTAL</Typography>
						</Grid>
						<Grid item md={6}>
							<Typography align="right" gutterBottom>
								R 400.00
							</Typography>
						</Grid>
					</Grid>
					<Grid item md={12}>
						<Divider variant="fullWidth" />
					</Grid>
					<Grid item md={6}>
						<Typography gutterBottom>TOTAL</Typography>
					</Grid>
					<Grid item md={6}>
						<Typography color="secondary" align="right" gutterBottom>
							R 400.00
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Shipping;
