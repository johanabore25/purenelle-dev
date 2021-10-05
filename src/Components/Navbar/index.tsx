import * as React from "react";
import { Link, useHistory } from "react-router-dom";
// Material Core

import { AppBar, Toolbar, Grid, useScrollTrigger, Typography } from "@material-ui/core";
import useStyles from "./styles";
// Icons
import * as Icon from "react-feather";
// components
import DropDownButton from "../DropDownButton";

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
	const history = useHistory();

	const handleShopNav = (route: string, id: number) => {
		history.push(`/${route}/${id}`);
	};

	return (
		<ElevationScroll>
			<AppBar position="sticky" style={{ backgroundColor: "white" }}>
				<Toolbar>
					<Grid container direction="row" alignItems="center" justifyContent="space-between">
						<Grid container item direction="row" alignItems="center" justifyContent="space-around" md={4}>
							<Grid item>
								<Link to="/" className={classes.link}>
									<Typography color="primary">Home</Typography>
								</Link>
							</Grid>
							<Grid item>
								<Link to="/shop" className={classes.link}>
									<DropDownButton
										text="shop"
										list={["Hair", "Skin", "Beauty"]}
										func={handleShopNav}
									/>
								</Link>
							</Grid>
							<Grid item>
								<Typography color="primary">Our Journal</Typography>
							</Grid>
							<Grid item>
								<Typography color="primary">Our Story</Typography>
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
