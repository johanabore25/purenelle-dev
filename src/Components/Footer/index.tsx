import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, TextField, Button } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import useStyles from "./styles";

const Footer = () => {
	const classes = useStyles({});

	return (
		<div className={classes.mainDiv}>
			<Grid container justifyContent="space-between" alignItems="flex-start" className={classes.heightDiv}>
				<Grid item md={2}>
					<Typography variant="h5" className={classes.boldText} gutterBottom>
						Policies
					</Typography>
					<Typography variant="subtitle1" className={classes.text} gutterBottom>
						Shipping
					</Typography>
					<Typography variant="subtitle1" className={classes.text} gutterBottom>
						Privacy Policies
					</Typography>
					<Typography variant="subtitle1" className={classes.text} gutterBottom>
						Terms of Service
					</Typography>
					<Typography variant="subtitle1" className={classes.text} gutterBottom>
						Refunds and Returns
					</Typography>
				</Grid>
				<Grid item md={2}>
					<Typography variant="h5" className={classes.boldText} gutterBottom>
						Help
					</Typography>
					<Typography variant="subtitle1" className={classes.text} gutterBottom>
						FAQs
					</Typography>
					<Typography variant="subtitle1" className={classes.text} gutterBottom>
						Covid-19
					</Typography>
					<Link to="/contact" className={classes.link}>
						<Typography variant="subtitle1" className={classes.text} gutterBottom>
							Contact Us
						</Typography>
					</Link>
				</Grid>
				<Grid item md={6} container justifyContent="flex-end" alignItems="center" spacing={1}>
					<Grid item md={12}>
						<Typography variant="h5" className={classes.boldText}>
							Join Our Newsletter
						</Typography>
					</Grid>
					<Grid item md={8}>
						<TextField variant="filled" label="Email" fullWidth size="small" className={classes.whiteBG} />
					</Grid>
					<Grid item md={4}>
						<Button variant="contained" color="secondary" size="large" fullWidth>
							Submit
						</Button>
					</Grid>
				</Grid>
				<Grid item md={12} container justifyContent="flex-end" alignItems="center">
					<Grid item md={6} container justifyContent="flex-end" alignItems="center">
						<Grid item md={1} className={classes.rightAlign}>
							<SocialIcon
								network="facebook"
								bgColor="#ffffff"
								url="https://facebook.com/purenellecosmetics"
								target="_blank"
							/>
						</Grid>
						<Grid item md={1} className={classes.rightAlign}>
							<SocialIcon
								network="instagram"
								bgColor="#ffffff"
								url="https://instagram.com/purenelle"
								target="_blank"
							/>
						</Grid>
						<Grid item md={1} className={classes.rightAlign}>
							<SocialIcon
								network="youtube"
								bgColor="#ffffff"
								url="https://www.youtube.com/channel/UCFJMgTHSmAYc3"
								target="_blank"
							/>
						</Grid>
						<Grid item md={1} className={classes.rightAlign}>
							<SocialIcon network="whatsapp" bgColor="#ffffff" />
						</Grid>
						<Grid item md={1} className={classes.rightAlign}>
							<SocialIcon
								network="linkedin"
								bgColor="#ffffff"
								url="https://linkedin.com/company/purenellecosmetics"
								target="_blank"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={12}>
					<Typography align="center" className={classes.text}>
						&#169;2021, Purenelle Made in South Africa
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
