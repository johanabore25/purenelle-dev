import React from "react";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
	return (
		<div
			style={{ width: "100%", height: "50vh", backgroundColor: "#575757", overflowX: "hidden", padding: "2rem" }}
		>
			<Grid container justifyContent="space-between" alignItems="flex-start" style={{ height: "100%" }}>
				<Grid item md={4}>
					<Typography variant="h5" style={{ color: "white", fontWeight: 700 }} gutterBottom>
						Help
					</Typography>
					<Typography variant="subtitle1" style={{ color: "white" }} gutterBottom>
						Refund policy
					</Typography>
					<Typography variant="subtitle1" style={{ color: "white" }} gutterBottom>
						Terms of service
					</Typography>
					<Typography variant="subtitle1" style={{ color: "white" }} gutterBottom>
						Privacy policy
					</Typography>
				</Grid>
				<Grid item md={6} container justifyContent="flex-end" alignItems="center" spacing={1}>
					<Grid item md={12}>
						<Typography variant="h5" style={{ color: "white", fontWeight: 700 }}>
							Join Our Newsletter
						</Typography>
					</Grid>
					<Grid item md={8}>
						<TextField
							variant="filled"
							label="Email"
							fullWidth
							size="small"
							style={{ backgroundColor: "#ffffff" }}
						/>
					</Grid>
					<Grid item md={4}>
						<Button variant="contained" color="secondary" size="large" fullWidth>
							Submit
						</Button>
					</Grid>
				</Grid>
				<Grid item md={12} container justifyContent="flex-end" alignItems="center">
					<Grid item md={6} container justifyContent="flex-end" alignItems="center">
						<Grid item md={1} style={{ textAlign: "right" }}>
							<SocialIcon network="facebook" bgColor="#ffffff" />
						</Grid>
						<Grid item md={1} style={{ textAlign: "right" }}>
							<SocialIcon network="instagram" bgColor="#ffffff" />
						</Grid>
						<Grid item md={1} style={{ textAlign: "right" }}>
							<SocialIcon network="youtube" bgColor="#ffffff" />
						</Grid>
						<Grid item md={1} style={{ textAlign: "right" }}>
							<SocialIcon network="whatsapp" bgColor="#ffffff" />
						</Grid>
						<Grid item md={1} style={{ textAlign: "right" }}>
							<SocialIcon network="linkedin" bgColor="#ffffff" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={12}>
					<Typography align="center" style={{ color: "white" }}>
						&#169;2021, Purenelle Made in South Africa
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
