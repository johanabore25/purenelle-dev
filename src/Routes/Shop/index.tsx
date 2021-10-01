import React from "react";
import {
	Grid,
	Radio,
	Typography,
	TextField,
	MenuItem,
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
} from "@material-ui/core";
import { ProductData } from "../../logic/jsonData";
import ProductCard from "./ProductCard";

const Shop = () => {
	const [value, setValue] = React.useState("All");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<div style={{ height: "100vh", padding: "3rem" }}>
			<Grid container spacing={2}>
				<Grid item md={12}>
					<Typography color="secondary" align="center" gutterBottom variant="h4" style={{ fontWeight: 700 }}>
						All Products
					</Typography>
				</Grid>
				<Grid item md={3} container justifyContent="flex-start">
					<FormControl component="fieldset">
						<FormLabel component="legend">Filters</FormLabel>
						<RadioGroup aria-label="gender" name="filter" value={value} onChange={handleChange}>
							<FormControlLabel value="All" control={<Radio />} label="All" />
							<FormControlLabel value="Hair" control={<Radio />} label="Hair" />
							<FormControlLabel value="Skin" control={<Radio />} label="Skin" />
							<FormControlLabel value="Beauty" control={<Radio />} label="Beauty" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item md={9} container justifyContent="space-between" alignItems="flex-start">
					<Grid item md={4}>
						<Typography align="left">Home/All Products</Typography>
					</Grid>
					<Grid item md={4}>
						<TextField select label="Sort by" fullWidth variant="outlined">
							<MenuItem value={"Price: High to Low"}>Price: High to Low</MenuItem>
							<MenuItem value={"Price: Low to High"}>Price: Low to High</MenuItem>
						</TextField>
					</Grid>
					<Grid item md={12} container spacing={2} style={{ marginTop: "3rem" }}>
						{ProductData.map((product, index) => (
							<Grid item md={3} key={product.id}>
								<ProductCard id={index} imgSrc={product.imgSrc} shortName={product.shortName} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Shop;
