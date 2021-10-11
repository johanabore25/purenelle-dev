import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { homeProducts } from "../../logic/jsonData";
import { ProductInterface } from "../../logic/types";
import * as Icon from "react-feather";

const SearchBar = () => {
	return (
		<div>
			<Autocomplete
				id="product-search"
				style={{ width: "100%" }}
				options={homeProducts as ProductInterface[]}
				autoHighlight
				getOptionSelected={(option, value) => option.shortName === value.shortName}
				getOptionLabel={(option) => option.shortName}
				closeIcon={<Icon.Trash2 size="14px" />}
				renderOption={(option) => (
					<React.Fragment>
						<Grid container spacing={1} justifyContent="space-between" alignItems="center">
							<Grid item md={4}>
								<img src={option.imgSrc} width="100%" alt={option.shortName} />
							</Grid>
							<Grid item md={8}>
								<Typography
									variant="subtitle2"
									color="primary"
									style={{ fontFamily: "Sequel Sans Medium Head" }}
								>
									{option.shortName}
								</Typography>
							</Grid>
						</Grid>
					</React.Fragment>
				)}
				renderInput={(params) => (
					<TextField
						{...params}
						placeholder="Search Products"
						variant="standard"
						inputProps={{
							...params.inputProps,
							autoComplete: "new-password",
						}}
					/>
				)}
			/>
		</div>
	);
};

export default SearchBar;
