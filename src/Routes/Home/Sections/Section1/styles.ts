import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		firstDiv: {
			width: "90%",
			position: "absolute",
			marginTop: "8rem",
		},
		link: {
			textDecoration: "none",
			width: "fit-content",
		},
		hundredWidth: {
			width: "100%",
		},
	})
);
