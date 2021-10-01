import React from "react";
import { Link } from "react-router-dom";
// Material-UI
import { Grid, Button } from "@material-ui/core";
import { HomeProducts } from "../../../Shop/ProductCard";
import { homeProducts } from "../../../../logic/jsonData";

const FirstTemplate = () => {
	return (
		<Grid
			container
			spacing={3}
			direction="row"
			justifyContent="center"
			style={{ width: "80%", position: "absolute", marginTop: "6rem" }}
		>
			{homeProducts.map((product) => (
				<Grid item md={3} key={product.id}>
					<HomeProducts
						id={product.id}
						imgSrc={product.imgSrc}
						shortName={product.shortName}
						description={product.description}
					/>
				</Grid>
			))}
			<Grid item md={12} container justifyContent="flex-end" alignItems="center">
				<Grid item md={4}>
					<Link to="/shop" style={{ textDecoration: "none", width: "fit-content" }}>
						<Button
							color="secondary"
							variant="contained"
							disableElevation={false}
							style={{ width: "100%" }}
						>
							Explore
						</Button>
					</Link>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default FirstTemplate;
