import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
// @ts-ignore
import ITCMed from "./assets/fonts/ITC-Med.woff";
// @ts-ignore
import ITCBold from "./assets/fonts/ITC-Bold.woff";
// @ts-ignore
import SequelBody from "./assets/fonts/Sequel-Body.woff";
// @ts-ignore
import SequelHead from "./assets/fonts/Sequel-Head.woff";

const itcMed = {
	fontFamily: "ITC Legacy Sans Std",
	fontStyle: "normal",
	fontWeight: 400,
	src: `local('ITC Legacy Sans Std'), local('ITC-Med'), url(${ITCMed}) format('woff)`,
};

const itcBold = {
	fontFamily: "ITC Legacy Sans Std",
	fontStyle: "normal",
	fontWeight: 700,
	src: `local('ITC Legacy Sans Std'), local('ITC-Med'), url(${ITCBold}) format('woff)`,
};

const sequelHead = {
	fontFamily: "Sequel Sans Medium Head",
	fontStyle: "normal",
	fontWeight: 800,
	src: `local('Sequel Sans Medium Head'), local('Sequel-Head'), url(${SequelHead}) format('woff)`,
};

const sequelBody = {
	fontFamily: "Sequel Body",
	fontStyle: "normal",
	fontWeight: 400,
	src: `local('Sequel Body'), local('Sequel-Body'), url(${SequelBody}) format('woff')`,
};

export default responsiveFontSizes(
	createTheme({
		typography: {
			fontFamily: [
				'"ITC Legacy Sans Std"',
				'"Sequel Sans Medium Head"',
				'"Sequel Body"',
				'"Legs"',
				"sans-serif",
			].join(","),
		},
		overrides: {
			MuiCssBaseline: {
				"@global": {
					"@font-face": [itcBold, itcMed, sequelBody, sequelHead],
				},
			},
		},
		palette: {
			primary: {
				main: "#7B7B7B",
				light: "#7D7D7D",
				dark: "#575757",
				contrastText: "#ffffff",
			},
			secondary: {
				main: "#F61067",
				dark: "#b30748",
				contrastText: "#ffffff",
			},
			warning: {
				main: "#D35F5F",
			},
			success: {
				main: "#7FC29B",
			},
			info: {
				main: "#53A2BE",
			},
		},
	})
);
