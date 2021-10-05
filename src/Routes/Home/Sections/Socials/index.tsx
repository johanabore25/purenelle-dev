import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const Socials = () => {
	const classes = useStyles({});

	return (
		<Grid container justifyContent="center" alignItems="center" spacing={2} className={classes.container}>
			<Grid item md={6}>
				<img
					src="/assets/Images/hero-1.jpg"
					width="565px"
					alt="one"
					height="565px"
					className={classes.bigImage}
				/>
			</Grid>
			<Grid item md={6} container spacing={2}>
				<Grid item md={12} container alignItems="center" justifyContent="space-around" spacing={2}>
					<Grid item md={6}>
						<img
							src="/assets/Images/hero-2.jpg"
							width="270px"
							alt="one"
							height="270px"
							className={classes.smallImage}
						/>
					</Grid>
					<Grid item md={6}>
						<img
							src="/assets/Images/hero-3.jpg"
							width="270px"
							alt="one"
							height="270px"
							className={classes.smallImage}
						/>
					</Grid>
				</Grid>
				<Grid item md={12} container alignItems="center" justifyContent="space-around" spacing={2}>
					<Grid item md={6}>
						<img
							src="/assets/Images/products/Micerlla.jpg"
							width="270px"
							alt="one"
							height="270px"
							className={classes.smallImage}
						/>
					</Grid>
					<Grid item md={6}>
						<img
							src="/assets/Images/products/radiance.jpg"
							width="270px"
							alt="one"
							height="270px"
							className={classes.smallImage}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Socials;
