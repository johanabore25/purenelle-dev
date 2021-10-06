import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		mainDiv: {
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "80vh",
		},
		titleText: {
			fontWeight: 700,
			fontFamily: "Sequel Sans Medium Head",
		},
		text: {
			fontFamily: "Sequel Body",
		},
		link: {
			textDecoration: "none",
		},
	})
);
