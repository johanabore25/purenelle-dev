import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Banner from "./Sections/Banner";
import FirstTemplate from "./Sections/Section1/FirstTemplate";
import Socials from "./Sections/Socials";

const Home = () => {
	return (
		<div style={{ width: "100%", overflowX: "hidden" }}>
			<Banner />
			<div
				style={{
					width: "100vw",
					padding: "3rem",
					backgroundColor: "#7d7d7d",
					position: "relative",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography style={{ fontWeight: 700, color: "white", fontSize: "10rem", opacity: "0.5" }} noWrap>
					OUR PRODUCTS
				</Typography>

				<FirstTemplate />
			</div>
			<div
				style={{
					width: "100vw",
					padding: "3rem",
					backgroundColor: "#D3D3D3",
					height: "50vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Grid container spacing={1} justifyContent="center" alignItems="center">
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} style={{ textAlign: "center" }}>
							<img src="/assets/Images/non-toxic.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Non Toxic</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} style={{ textAlign: "center" }}>
							<img src="/assets/Images/paraben-free.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Paraben free</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} style={{ textAlign: "center" }}>
							<img src="/assets/Images/plant-based.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Vegan</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} style={{ textAlign: "center" }}>
							<img src="/assets/Images/cruelty-free.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Cruelty free</Typography>
						</Grid>
					</Grid>
					<Grid item md={2} container spacing={1} justifyContent="center">
						<Grid item md={12} style={{ textAlign: "center" }}>
							<img src="/assets/Images/packaging.png" alt="non toxic" width="50%" />
						</Grid>
						<Grid item md={12}>
							<Typography align="center">Biodegradable packaging</Typography>
						</Grid>
					</Grid>
				</Grid>
			</div>
			<div
				style={{
					width: "100vw",
					padding: "1.5rem",
					backgroundColor: "#7d7d7d",
					position: "relative",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography style={{ fontWeight: 700, color: "white", fontSize: "10rem", opacity: "0.5" }} noWrap>
					OUR SOCIALS
				</Typography>
				<Socials />
			</div>
			<div
				style={{
					width: "100vw",
					padding: "3rem",
					backgroundColor: "#d3d3d3",
					position: "relative",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Typography style={{ fontWeight: 700, color: "#7d7d7d", fontSize: "10rem", opacity: "0.8" }} noWrap>
					OUR JOURNAL
				</Typography>
			</div>
		</div>
	);
};

export default Home;
