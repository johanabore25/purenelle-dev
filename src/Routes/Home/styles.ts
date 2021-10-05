import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		homeDiv: {
			width: "100%",
			overflowX: "hidden",
		},
		grayDiv: {
			width: "100vw",
			padding: "1.5rem",
			backgroundColor: "#7d7d7d",
			position: "relative",
			height: "110vh",
			display: "flex",
			justifyContent: "center",
		},
		bigText: {
			fontWeight: 800,
			color: "white",
			fontSize: "10rem",
			opacity: "0.5",
			fontFamily: "Sequel Sans Medium Head",
			letterSpacing: "2px",
			height: "fit-content",
		},
		lightGray: {
			width: "100vw",
			padding: "3rem",
			backgroundColor: "#D3D3D3",
			height: "50vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		centerAlign: {
			textAlign: "center",
		},
		darkBigText: {
			fontWeight: 700,
			color: "#7d7d7d",
			fontSize: "10rem",
			opacity: "0.8",
		},
		lightBigDiv: {
			width: "100vw",
			padding: "3rem",
			backgroundColor: "#d3d3d3",
			position: "relative",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
		},
	})
);
