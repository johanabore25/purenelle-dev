import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		relativeDiv: {
			position: "relative",
		},
		text: {
			color: theme.palette.primary.contrastText,
		},
		boldText: {
			color: theme.palette.primary.contrastText,
			fontWeight: 700,
		},
		link: {
			textDecoration: "none",
			width: "fit-content",
		},
		arrow: {
			pointerEvents: "fill",
			cursor: "pointer",
			width: "fit-content",
			opacity: 0.6,
		},
		sliderWrapper: {
			"& .slick-slider": {
				height: "91vh",
				position: "relative",
				[theme.breakpoints.down("sm")]: {
					height: "60vh",
				},
			},
			"& .slick-slide img": {
				height: "91vh",
				width: "100%",
				[theme.breakpoints.down("sm")]: {
					height: "60vh",
				},
			},
			"& .slick-list": {
				height: "100%  !important",
			},
		},
		container: {
			marginTop: "0px",
			height: "91vh",
			backgroundSize: "cover",
			backgroundPosition: "100% center",

			top: "0",
			position: "absolute",
			overflow: "hidden",
			backgroundRepeat: "no-repeat",
			[theme.breakpoints.up("md")]: {
				left: "10%",
			},
			[theme.breakpoints.down("sm")]: {
				height: "60vh",
				paddingLeft: "10px",
				paddingRight: "10px",
			},
		},
		mainContent: {
			marginTop: "85px",
			height: "fit-content",
			width: "fit-content",
			[theme.breakpoints.down("sm")]: {
				marginTop: "75px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
			},
		},
		radioDiv: {
			display: "flex",
			justifyContent: "center",
			textAlign: "center",
			opacity: 0.6,
		},
		image: {
			objectFit: "cover",
		},
		absoluteLayer: {
			position: "absolute",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "flex-end",
			width: "100vw",
			top: "50%",
			paddingLeft: "3rem",
			paddingRight: "3rem",
		},
		textLayer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "flex-start",
		},
		arrowLayer: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center",
			width: "50%",
		},
		button: {
			width: "100%",
		},
		arrowDiv: {
			display: "flex",
			alignItems: "center",
		},
	})
);
