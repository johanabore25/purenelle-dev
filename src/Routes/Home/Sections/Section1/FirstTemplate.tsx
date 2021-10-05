import React from "react";
import { Link } from "react-router-dom";
// Material-UI
import { Grid, Button } from "@material-ui/core";
import { HomeProducts } from "../../../Shop/ProductCard";
import { homeProducts } from "../../../../logic/jsonData";
import useStyles from "./styles";

const FirstTemplate = () => {
	const classes = useStyles({});

	return (
		<Grid container spacing={3} direction="row" justifyContent="space-between" className={classes.firstDiv}>
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
				<Grid item md={2}>
					<Link to="/shop" className={classes.link}>
						<Button
							color="secondary"
							variant="contained"
							disableElevation={false}
							className={classes.hundredWidth}
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
