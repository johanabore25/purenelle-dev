import * as React from "react";
import { Link } from "react-router-dom";
// Material Core

import { AppBar, Toolbar, Grid, useScrollTrigger, Typography } from "@material-ui/core";
import useStyles from "./styles";
// Icons
import * as Icon from "react-feather";

interface Props {
	children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

const NavBar = () => {
	const classes = useStyles({});

	return (
		<ElevationScroll>
			<AppBar position="sticky" style={{ backgroundColor: "white" }}>
				<Toolbar>
					<Grid container direction="row" alignItems="center" justifyContent="space-between">
						<Grid container item direction="row" alignItems="center" justifyContent="space-around" md={4}>
							<Grid item>
								<Link to="/shop" className={classes.link}>
									<Typography color="primary">Shop</Typography>
								</Link>
							</Grid>
							<Grid item>
								<Link to="/journal" className={classes.link}>
									<Typography color="primary">Journal</Typography>
								</Link>
							</Grid>
							<Grid item>
								<Link to="/contact" className={classes.link}>
									<Typography color="primary">Contact Us</Typography>
								</Link>
							</Grid>
						</Grid>
						<Grid item container alignItems="center" md={4} justifyContent="center">
							<Link to="/" className={classes.logoLink}>
								<img src="/Purenelle-Logo-Concept-1.jpg" alt="purenelle logo" width="30%" />
							</Link>
						</Grid>
						<Grid item container md={4} justifyContent="flex-end" alignItems="center">
							<Grid item md={2}>
								<Icon.Search color="#a3a3a3" size="25%" />
							</Grid>
							<Grid item md={2}>
								<Icon.User color="#a3a3a3" size="25%" />
							</Grid>
							<Grid item md={2}>
								<Icon.ShoppingBag color="#a3a3a3" size="25%" />
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
};

export default NavBar;
