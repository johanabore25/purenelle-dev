import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		productDiv: {
			height: "100vh",
			padding: "3rem",
		},
		headerText: {
			fontFamily: "Sequel Sans Medium Head",
			fontWeight: 700,
		},
		productMargin: {
			marginTop: "3rem",
		},
		root: {
			maxWidth: 345,
		},
		media: {
			height: 240,
		},
	})
);
