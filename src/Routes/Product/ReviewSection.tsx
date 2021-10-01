import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";

const ReviewSection = () => {
	return (
		<div>
			<Grid container>
				<Grid item md={12}>
					<Typography color="secondary" align="left">
						Customer Reviews
					</Typography>
				</Grid>
				<Grid item md={12} container justifyContent="space-between" alignItems="center">
					<Grid item md={8}>
						<p>stars</p>
					</Grid>
					<Grid item md={4}>
						<Button color="secondary">Write a review</Button>
					</Grid>
				</Grid>
				<Grid item md={12} container>
					<p>rich text</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default ReviewSection;
