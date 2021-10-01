import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createTheme";

export default makeStyles((theme: Theme) =>
	createStyles({
		link: {
			"text-decoration": "none",
			color: "#777",
			width: "100%",
		},
		logoLink: {
			"text-decoration": "none",
			color: "#777",
			display: "contents",
		},
	})
);
