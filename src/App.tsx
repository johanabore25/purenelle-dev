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

const App = ({ location }: RouteComponentProps) => {
	return (
		<Switch location={location}>
			<>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					<NavBar />
					<Route path="/shop" component={Shop} />
					<Route path="/product/:id?" component={Product} />
					<Route path="/contact" />
					<Route exact path="/" component={Home} />
					<Footer />
				</MuiThemeProvider>
			</>
		</Switch>
	);
};

export default withRouter(App);
