import React from "react";
import { Grid } from "@material-ui/core";

const Socials = () => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			spacing={2}
			style={{ width: "80%", position: "absolute", left: "4rem", marginTop: "6rem" }}
		>
			<Grid item md={6}>
				<img
					src="/assets/Images/hero-1.jpg"
					width="100%"
					alt="one"
					height="540px"
					style={{ objectFit: "cover" }}
				/>
			</Grid>
			<Grid item md={6} container spacing={2}>
				<Grid item md={12} container alignItems="center" justifyContent="space-around" spacing={2}>
					<Grid item md={6}>
						<img
							src="/assets/Images/hero-2.jpg"
							width="100%"
							alt="one"
							height="270px"
							style={{ objectFit: "cover" }}
						/>
					</Grid>
					<Grid item md={6}>
						<img
							src="/assets/Images/hero-3.jpg"
							width="100%"
							alt="one"
							height="270px"
							style={{ objectFit: "cover" }}
						/>
					</Grid>
				</Grid>
				<Grid item md={12} container alignItems="center" justifyContent="space-around" spacing={2}>
					<Grid item md={6}>
						<img
							src="/assets/Images/products/Micerlla.jpg"
							width="100%"
							alt="one"
							height="270px"
							style={{ objectFit: "cover" }}
						/>
					</Grid>
					<Grid item md={6}>
						<img
							src="/assets/Images/products/radiance.jpg"
							width="100%"
							alt="one"
							height="270px"
							style={{ objectFit: "cover" }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Socials;
