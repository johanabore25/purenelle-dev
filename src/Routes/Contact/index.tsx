import React from "react";
import { TextField, Typography, Button, Grid, TextareaAutosize } from "@material-ui/core";
import useStyles from "./styles";

const Contact = () => {
	const classes = useStyles({});

	return (
		<div className={classes.mainDiv}>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item md={6} container spacing={2}>
					<Grid item md={12}>
						<Typography
							align="center"
							variant="h4"
							gutterBottom
							color="primary"
							className={classes.titleText}
						>
							Send us an Enquiry
						</Typography>
					</Grid>
					<Grid item md={12} container spacing={1}>
						<Grid item md={6}>
							<TextField placeholder="First Name" variant="outlined" fullWidth />
						</Grid>
						<Grid item md={6}>
							<TextField placeholder="Last Name" variant="outlined" fullWidth />
						</Grid>
					</Grid>
					<Grid item md={12} container spacing={1}>
						<Grid item md={6}>
							<TextField placeholder="Email" variant="outlined" fullWidth />
						</Grid>
						<Grid item md={6}>
							<TextField placeholder="Phone Number" variant="outlined" fullWidth />
						</Grid>
					</Grid>
					<Grid item md={12}>
						<TextareaAutosize minRows={6} placeholder="Message" className={classes.textArea} />
					</Grid>
					<Grid item md={12}>
						<Button fullWidth variant="contained" color="secondary">
							Submit
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;
