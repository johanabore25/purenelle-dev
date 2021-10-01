import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
// @ts-ignore
import ITCMed from "./assets/fonts/ITC-Med.woff";
// @ts-ignore
import ITCBold from "./assets/fonts/ITC-Bold.woff";

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

export default responsiveFontSizes(
	createTheme({
		typography: {
			fontFamily: ['"ITC Legacy Sans Std"', "sans-serif"].join(","),
		},
		overrides: {
			MuiCssBaseline: {
				"@global": {
					"@font-face": [itcBold, itcMed],
				},
			},
		},
		palette: {
			primary: {
				main: "#a3a3a3",
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
