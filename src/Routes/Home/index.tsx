import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Banner from "./Sections/Banner";
import FirstTemplate from "./Sections/Section1/FirstTemplate";
import Socials from "./Sections/Socials";
import useStyles from "./styles";

const Home = () => {
	const classes = useStyles({});

	return (
		<div className={classes.homeDiv}>
			<Banner />
			<div className={classes.grayDiv}>
				<Typography className={classes.bigText} noWrap>
					OUR PRODUCTS
				</Typography>

				<FirstTemplate />
			</div>
			<div className={classes.lightGray}>
				<Grid container spacing={1} justifyContent="center" alignItems="center">
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} className={classes.centerAlign}>
							<img src="/assets/Images/non-toxic.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Non Toxic</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} className={classes.centerAlign}>
							<img src="/assets/Images/paraben-free.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Paraben free</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} className={classes.centerAlign}>
							<img src="/assets/Images/plant-based.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Vegan</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} className={classes.centerAlign}>
							<img src="/assets/Images/cruelty-free.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Cruelty free</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} className={classes.centerAlign}>
							<img src="/assets/Images/packaging.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Biodegradable packaging</Typography>
						</Grid>
					</Grid>
				</Grid>
			</div>
			<div className={classes.grayDiv}>
				<Typography className={classes.bigText} noWrap>
					OUR SOCIALS
				</Typography>
				<Socials />
			</div>
			<div className={classes.lightBigDiv}>
				<Typography style={{ fontWeight: 700, color: "#7d7d7d", fontSize: "10rem", opacity: "0.8" }} noWrap>
					OUR JOURNAL
				</Typography>
			</div>
		</div>
	);
};

export default Home;
