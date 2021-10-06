import { Theme } from "@material-ui/core/styles/createTheme";
import { makeStyles, createStyles } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
	createStyles({
		mainDiv: {
			height: "100%",
			width: "100%",
			padding: "5rem",
		},
		mainImg: {
			border: `2px solid #ececec`,
		},
		boldText: {
			fontWeight: 700,
		},
		marginDiv: {
			marginTop: "5rem",
		},
		closeButton: {
			textAlign: "right",
			color: theme.palette.primary.main,
		},
		link: {
			textDecoration: "none",
		},
		headerText: {
			fontWeight: 800,
			fontFamily: "Sequel Sans Medium Head",
		},
		bodyText: {
			fontFamily: "Sequel Body",
		},
		sliderWrapper: {
			"& .slick-dots li": {
				width: "40px",
			},
			"& .slick-prev:before": {
				color: "#7d7d7d",
			},
			"& .slick-next:before": {
				color: "#7d7d7d",
			},
			"& .slick-dots ": {
				height: "1px",
			},
		},
	})
);
