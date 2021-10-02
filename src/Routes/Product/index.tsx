import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Grid, Typography, Button, CircularProgress } from "@material-ui/core";
import { ProductData } from "../../logic/jsonData";
import { RatingView } from "react-simple-star-rating";

type TParams = { id: string };

const Product = ({ match }: RouteComponentProps<TParams>) => {
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
				<div style={{ height: "100%", width: "100%", padding: "5rem" }}>
					<Grid container justifyContent="center" spacing={2}>
						<Grid item md={12} container justifyContent="space-between" alignItems="flex-start">
							<Grid item md={4} lg={4}>
								<img src={ProductData[newId].imgSrc} width="100%" alt="yes" />
							</Grid>
							<Grid item md={4} lg={4} container spacing={2} alignContent="space-between">
								<Grid item md={12} container justifyContent="center">
									<Grid item md={12}>
										<Typography
											variant="h4"
											color="secondary"
											style={{ fontWeight: 700 }}
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
										<Typography variant="h6" gutterBottom>
											Ingredients
										</Typography>
									</Grid>
									<Grid item md={12}>
										<Typography color="primary" variant="h6" gutterBottom>
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
							spacing={2}
							justifyContent="space-between"
							style={{ marginTop: "2rem" }}
						>
							<Grid item md={12}>
								<Typography color="secondary" align="center" variant="h5" style={{ fontWeight: 700 }}>
									Related Products
								</Typography>
							</Grid>
							<Grid item md={3}>
								<img src={ProductData[1].imgSrc} alt="time" width="100%" />
							</Grid>
							<Grid item md={3}>
								<img src={ProductData[2].imgSrc} alt="time" width="100%" />
							</Grid>
							<Grid item md={3}>
								<img src={ProductData[0].imgSrc} alt="time" width="100%" />
							</Grid>
						</Grid>
						<Grid
							item
							md={12}
							container
							alignItems="flex-start"
							justifyContent="space-between"
							style={{ marginTop: "5rem" }}
						>
							<Grid item md={4}>
								<Typography color="primary" variant="h6" gutterBottom style={{ fontWeight: 700 }}>
									Main Ingredients
								</Typography>
							</Grid>
							<Grid item md={4}>
								<Typography color="primary" variant="h6" gutterBottom>
									{ProductData[newId].mainIngredients}
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							md={12}
							container
							alignItems="flex-start"
							justifyContent="space-between"
							style={{ marginTop: "5rem" }}
						>
							<Grid item md={4}>
								<Typography color="primary" variant="h6" gutterBottom style={{ fontWeight: 700 }}>
									Why we love it
								</Typography>
							</Grid>
							<Grid item md={4}>
								<Typography color="primary" variant="h6" gutterBottom>
									{ProductData[newId].whyWeLoveIt}
								</Typography>
							</Grid>
						</Grid>
						<Grid
							item
							md={12}
							container
							alignItems="flex-start"
							justifyContent="space-between"
							style={{ marginTop: "5rem" }}
						>
							<Grid item md={4}>
								<Typography color="primary" variant="h6" gutterBottom style={{ fontWeight: 700 }}>
									How to use it
								</Typography>
							</Grid>
							<Grid item md={4}>
								<Typography color="primary" variant="h6" gutterBottom>
									{ProductData[newId].howToUse}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</div>
			)}
		</div>
	);
};

export default Product;
