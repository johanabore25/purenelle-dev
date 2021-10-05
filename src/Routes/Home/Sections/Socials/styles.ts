import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		container: {
			width: "80%",
			position: "absolute",
			marginTop: "8rem",
		},
		bigImage: {
			objectFit: "cover",
			width: "565px",
			height: "565px",
		},
		smallImage: {
			objectFit: "cover",
			height: "270px",
			width: "270px",
		},
	})
);
