import "./App.css";
import { Switch, withRouter, Route, RouteComponentProps } from "react-router-dom";
// Material Core
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import theme from "./theme";
// Routes
import Home from "./Routes/Home";
import Shop from "./Routes/Shop";
import Product from "./Routes/Product";
import SignIn from "./Routes/Auth/Login";
import SignUp from "./Routes/Auth/SignUp";
// utils
import ScrollToTop from "./ui-utils/ScrollToTop";

const App = ({ location }: RouteComponentProps) => {
	return (
		<Switch location={location}>
			<>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<ScrollToTop />
					<NavBar />
					<Route path="/shop/:id?" component={Shop} />
					<Route path="/product/:id?" component={Product} />
					<Route path="/contact" />
					<Route path="/login" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route exact path="/" component={Home} />
					<Footer />
				</MuiThemeProvider>
			</>
		</Switch>
	);
};

export default withRouter(App);
