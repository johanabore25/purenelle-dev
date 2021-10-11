import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, CardActionArea, Typography, Grid, Divider } from "@material-ui/core";
import { ProductInterface } from "../../logic/types";

const ProductCard = ({ imgSrc, id, shortName }: Partial<ProductInterface>) => {
	return (
		<Card style={{ maxWidth: 345 }}>
			<CardActionArea component={Link} to={`/product/${id}`}>
				<CardMedia style={{ height: 240 }} image={imgSrc} title="suitable for all skins" />
				<CardContent>
					<Typography
						align="center"
						style={{ fontWeight: 700, fontFamily: "Sequel Sans Medium Head" }}
						variant="subtitle2"
					>
						{shortName}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ProductCard;

export const HomeProducts = ({ imgSrc, id, description, shortName }: Partial<ProductInterface>) => {
	return (
		<div>
			<Grid container justifyContent="flex-start" spacing={1}>
				<Grid item md={12}>
					<img src={imgSrc} alt={description} width="100%" />
				</Grid>
				<Grid item md={12}>
					<Typography
						variant="h6"
						gutterBottom
						style={{ color: "white", fontWeight: 700, fontFamily: "Legs" }}
					>
						{shortName}
					</Typography>
				</Grid>
				<Grid item md={12}>
					<Divider light={true} variant="fullWidth" style={{ backgroundColor: "white", opacity: "0.5" }} />
				</Grid>
				<Grid item md={12}>
					<Typography
						variant="subtitle1"
						style={{ color: "white", textTransform: "capitalize", fontFamily: "Legs" }}
					>
						{description}
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};
