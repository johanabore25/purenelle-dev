import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: "flex",
			flexDirection: "column",
			width: "fit-content",
			height: "fit-content",
			cursor: "pointer",
			position: "relative",
			"&:hover > #list": {
				animation: "$opacity 0.25s linear",
				animationFillMode: "forwards",
				maxHeight: "inherit",
			},
			"&:hover  #arrow": {
				animation: "$rotate 0.25s linear",
				animationFillMode: "forwards",
			},
		},
		buttonDiv: {
			width: "fit-content",
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			background: "none",
			cursor: "pointer",
			border: "none",
		},
		text: {
			textTransform: "capitalize",
		},
		"@keyframes opacity": {
			"0%": {
				opacity: 0,
			},
			"100%": {
				opacity: 1,
			},
		},
		"@keyframes rotate": {
			"0%": {
				transform: "rotate(0deg)",
				WebkitTransform: "rotate(0deg)",
				MozTransform: "rotate(0deg)",
				OTransform: "rotate(0deg)",
			},
			"100%": {
				transform: "rotate(180deg)",
				WebkitTransform: "rotate(180deg)",
				MozTransform: "rotate(180deg)",
				OTransform: "rotate(180deg)",
			},
		},
		list: {
			listStyleType: "none",
			backgroundColor: "white",
			padding: "0.25rem",
			boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
			overflow: "hidden",
			opacity: 0,
			margin: "0px",
			maxHeight: "0px",
			position: "absolute",
			top: "25px",
			width: "100%",
		},
		listItem: {
			color: theme.palette.primary.main,
			fontFamily: "inherit",
			marginTop: "2px",
			"&:hover": {
				backgroundColor: "rgba(0,0,0,0.1)",
			},
		},
		svg: {
			marginTop: "0.25rem",
		},
	})
);
