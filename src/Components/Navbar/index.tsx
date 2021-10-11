import * as React from "react";
import { Link, useHistory } from "react-router-dom";
// Material Core
import { AppBar, Toolbar, Grid, useScrollTrigger, Typography, Grow } from "@material-ui/core";
import useStyles from "./styles";
// Icons
import * as Icon from "react-feather";
// components
import DropDownButton from "../DropDownButton";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import { useCartStore } from "../../logic/useStore";

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

	const [open, setOpen] = React.useState(false);
	const [bagOpen, setBagOpen] = React.useState(false);
	const { items } = useCartStore();
	const toggleBag = () => {
		setBagOpen(!bagOpen);
	};

	const searchClose = () => {
		setOpen(false);
	};

	const searchOpen = () => {
		setOpen(true);
	};

	const handleShopNav = (route: string, id: number) => {
		history.push({
			pathname: `/${route}`,
			search: `?query=shop`,
			state: { detail: id },
		});
	};

	const handleAuth = () => {
		history.push({
			pathname: "/login",
		});
	};

	return (
		<>
			<ElevationScroll>
				<AppBar position="sticky" style={{ backgroundColor: "white" }}>
					<Toolbar>
						<Grid container direction="row" alignItems="center" justifyContent="space-between">
							<Grid
								container
								item
								direction="row"
								alignItems="center"
								justifyContent="space-around"
								md={4}
							>
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
								<Grow in={open}>
									<Grid item md={6}>
										<SearchBar />
									</Grid>
								</Grow>
								<Grid item md={2}>
									<button
										onClick={open ? searchClose : searchOpen}
										style={{
											width: "fit-content",
											background: "none",
											border: "none",
											cursor: "pointer",
										}}
									>
										{open ? (
											<Icon.X color="#a3a3a3" size="30%" />
										) : (
											<Icon.Search color="#a3a3a3" size="30%" />
										)}
									</button>
								</Grid>
								<Grid item md={2}>
									<button
										onClick={handleAuth}
										style={{
											width: "fit-content",
											background: "none",
											border: "none",
											cursor: "pointer",
										}}
									>
										<Icon.User color="#a3a3a3" size="30%" />
									</button>
								</Grid>
								<Grid item md={2}>
									<button
										onClick={toggleBag}
										style={{
											width: "fit-content",
											background: "none",
											border: "none",
											cursor: "pointer",
										}}
									>
										<Icon.ShoppingBag color={items.length > 0 ? "#F61067" : "#a3a3a3"} size="30%" />
									</button>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Cart open={bagOpen} onClose={toggleBag} />
		</>
	);
};

export default NavBar;
