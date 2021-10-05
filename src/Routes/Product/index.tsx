import React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { Grid, Typography, Button, CircularProgress, IconButton } from "@material-ui/core";
import { ProductData } from "../../logic/jsonData";
import { RatingView } from "react-simple-star-rating";
import * as Icon from "react-feather";
import useStyles from "./styles";

type TParams = { id: string };

const Product = ({ match }: RouteComponentProps<TParams>) => {
	const classes = useStyles({});
	const [loading, setLoading] = React.useState(true);
	let { id } = match.params;

	let newId = parseInt(id);

	React.useEffect(() => {
		if (typeof newId !== undefined) {
			setLoading(false);
		}
	}, [loading, newId]);

	return (
		<div>
			{loading ? (
				<div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
					<CircularProgress />
				</div>
			) : (
				<div className={classes.mainDiv}>
					<Grid container justifyContent="center" spacing={1}>
						<Grid item md={12} className={classes.closeButton}>
							<Link to="/shop" className={classes.link}>
								<IconButton component="span">
									<Icon.X />
								</IconButton>
							</Link>
						</Grid>
						<Grid item md={12} container justifyContent="space-between" alignItems="flex-start">
							<Grid item md={4} lg={4}>
								<img
									src={ProductData[newId].imgSrc}
									width="100%"
									alt="yes"
									className={classes.mainImg}
								/>
							</Grid>
							<Grid item md={4} lg={4} container spacing={2} alignContent="space-between">
								<Grid item md={12} container justifyContent="center">
									<Grid item md={12}>
										<Typography
											variant="h4"
											color="secondary"
											className={classes.headerText}
											gutterBottom
										>
											{ProductData[newId].longName}
										</Typography>
									</Grid>
									<Grid item md={12}>
										<RatingView
											ratingValue={4}
											stars={5}
											fillColor="#F61067"
											emptyColor="#7D7D7D"
										/>
									</Grid>
									<Grid item md={12}>
										<Typography color="primary" variant="h6" gutterBottom>
											{ProductData[newId].volume}
										</Typography>
									</Grid>
									<Grid item md={12}>
										<Button variant="contained" fullWidth color="secondary">
											Add to Cart
										</Button>
									</Grid>
								</Grid>

								<Grid item md={12} container justifyContent="center">
									<Grid item md={12}>
										<Typography variant="h6" gutterBottom className={classes.bodyText}>
											Ingredients
										</Typography>
									</Grid>
									<Grid item md={12}>
										<Typography
											color="primary"
											variant="h6"
											gutterBottom
											className={classes.bodyText}
										>
											{ProductData[newId].ingredients}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							md={12}
							container
							alignItems="flex-start"
							justifyContent="space-between"
							className={classes.marginDiv}
						>
							<Grid item md={6} container>
								<Grid item md={12}>
									<Typography
										color="secondary"
										variant="h4"
										gutterBottom
										className={classes.headerText}
									>
										Main Ingredients
									</Typography>
								</Grid>
								<Grid item md={12}>
									<Typography color="primary" variant="h6" gutterBottom className={classes.bodyText}>
										{ProductData[newId].mainIngredients}
									</Typography>
								</Grid>
							</Grid>
							<Grid item md={6}></Grid>
						</Grid>
						<Grid
							item
							md={12}
							container
							alignItems="flex-start"
							justifyContent="space-between"
							className={classes.marginDiv}
						>
							<Grid item container md={6}></Grid>
							<Grid item md={6}>
								<Grid item md={12}>
									<Typography
										color="secondary"
										variant="h4"
										gutterBottom
										className={classes.headerText}
									>
										Why you will love it
									</Typography>
								</Grid>
								<Grid item md={12}>
									<Typography color="primary" variant="h6" gutterBottom className={classes.bodyText}>
										{ProductData[newId].whyWeLoveIt}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid
							item
							md={12}
							container
							alignItems="flex-start"
							justifyContent="space-between"
							className={classes.marginDiv}
						>
							<Grid item md={6}>
								<Grid item md={12}>
									<Typography
										color="secondary"
										variant="h4"
										gutterBottom
										className={classes.headerText}
									>
										How to use it
									</Typography>
								</Grid>
								<Grid item md={12}>
									<Typography color="primary" variant="h6" gutterBottom className={classes.bodyText}>
										{ProductData[newId].howToUse}
									</Typography>
								</Grid>
							</Grid>
							<Grid item md={6} container></Grid>
						</Grid>
						<Grid
							item
							md={12}
							container
							spacing={2}
							justifyContent="space-between"
							className={classes.marginDiv}
						>
							<Grid item md={12}>
								<Typography
									color="secondary"
									align="center"
									variant="h4"
									className={classes.headerText}
									gutterBottom
								>
									Related Products
								</Typography>
							</Grid>
							<Grid item md={3}>
								<img src={ProductData[1].imgSrc} alt="time" width="100%" className={classes.mainImg} />
							</Grid>
							<Grid item md={3}>
								<img src={ProductData[2].imgSrc} alt="time" width="100%" className={classes.mainImg} />
							</Grid>
							<Grid item md={3}>
								<img src={ProductData[0].imgSrc} alt="time" width="100%" className={classes.mainImg} />
							</Grid>
						</Grid>
					</Grid>
				</div>
			)}
		</div>
	);
};

export default Product;
