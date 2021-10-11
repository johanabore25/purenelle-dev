import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		mainDiv: {
			width: "100%",
			height: "50vh",
			backgroundColor: "#575757",
			overflowX: "hidden",
			padding: "2rem",
		},
		boldText: {
			color: "white",
			fontWeight: 700,
			fontFamily: "Sequel Sans Medium Head",
		},
		text: {
			color: theme.palette.primary.contrastText,
			fontFamily: "Sequel Body",
		},
		heightDiv: {
			height: "100%",
		},
		whiteBG: {
			backgroundColor: "#ffffff",
		},
		rightAlign: {
			textAlign: "right",
		},
		link: {
			textDecoration: "none",
		},
	})
);
