import React from "react";
import Numeral from "numeral";
import { Grid, Typography, Button, Divider, IconButton, TextField } from "@material-ui/core";
import { Trash2 } from "react-feather";
import { useCartStore } from "../../logic/useStore";

const PreCheckout = () => {
	const { items, removeItem, updateItemCount } = useCartStore();

	const sumOfItems = items.reduce((acc, item) => {
		return acc + item.price * item.count;
	}, 0);

	const EmptyBag = () => {
		return (
			<Grid item md={6} container justifyContent="center" alignItems="center" spacing={3}>
				<Grid item md={12}>
					<Typography
						variant="h4"
						gutterBottom
						color="primary"
						align="center"
						style={{ fontFamily: "Sequel Sans Medium Head" }}
					>
						Shopping Bag
					</Typography>
				</Grid>

				<Grid item md={12}>
					<Typography
						align="center"
						variant="h6"
						gutterBottom
						color="primary"
						style={{ fontFamily: "Sequel Body" }}
					>
						Your bag is empty
					</Typography>
				</Grid>
				<Grid item md={6}>
					<Button variant="contained" color="secondary" fullWidth>
						Continue Shopping
					</Button>
				</Grid>
			</Grid>
		);
	};

	const FullBag = () => {
		return (
			<Grid item md={12} container spacing={10} justifyContent="space-between" alignItems="flex-start">
				<Grid item md={12}>
					<Typography
						variant="h4"
						color="primary"
						gutterBottom
						style={{ fontFamily: "Sequel Sans Medium Head" }}
					>
						Shopping Bag
					</Typography>
				</Grid>

				<Grid
					item
					md={8}
					container
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
					style={{ maxHeight: "80vh" }}
				>
					<Grid item md={5}>
						<Typography
							variant="subtitle2"
							color="primary"
							gutterBottom
							style={{ fontFamily: "Sequel Body" }}
						>
							Product
						</Typography>
					</Grid>
					<Grid item md={2}>
						<Typography
							variant="subtitle2"
							color="primary"
							gutterBottom
							align="right"
							style={{ fontFamily: "Sequel Body" }}
						>
							Price
						</Typography>
					</Grid>
					<Grid item md={2}>
						<Typography
							variant="subtitle2"
							color="primary"
							gutterBottom
							align="right"
							style={{ fontFamily: "Sequel Body" }}
						>
							Quantity
						</Typography>
					</Grid>
					<Grid item md={2}>
						<Typography
							variant="subtitle2"
							color="primary"
							gutterBottom
							align="right"
							style={{ fontFamily: "Sequel Body" }}
						>
							Total
						</Typography>
					</Grid>
					<Grid item md={12}>
						<Divider variant="fullWidth" />
					</Grid>
					{items.map((item, index) => (
						<Grid item md={12} container key={item.id}>
							<Grid item md={2}>
								<img src={item.imgSrc} alt="product being bought" width="100%" />
							</Grid>
							<Grid item md={10} container justifyContent="space-between">
								<Grid item md={12} container spacing={2} alignItems="center">
									<Grid item md={5}>
										<Typography
											variant="subtitle1"
											color="primary"
											gutterBottom
											align="left"
											style={{ fontFamily: "Sequel Sans Medium Head" }}
										>
											{item.shortName}
										</Typography>
									</Grid>
									<Grid item md={3}>
										<Typography
											align="left"
											variant="subtitle1"
											color="primary"
											gutterBottom
											style={{ fontFamily: "Sequel Sans Medium Head", marginLeft: "1.45rem" }}
										>
											{`R ${Numeral(item.price).format("0,0.00")}`}
										</Typography>
									</Grid>
									<Grid item md={2} style={{ textAlign: "center" }}>
										<TextField
											margin="none"
											size="small"
											color="primary"
											variant="outlined"
											type="number"
											value={item.count}
											onChange={(e) => updateItemCount(index, Number(e.target.value))}
											InputProps={{
												inputProps: {
													min: 1,
												},
											}}
										/>
									</Grid>
									<Grid md={2}>
										<Typography
											align="right"
											variant="subtitle1"
											color="primary"
											gutterBottom
											style={{ fontFamily: "Sequel Sans Medium Head", marginLeft: "1.45rem" }}
										>
											{`R ${Numeral(item.count * item.price).format("0,0.00")}`}
										</Typography>
									</Grid>
								</Grid>
								<Grid item md={12} style={{ textAlign: "right" }}>
									<IconButton onClick={() => removeItem(item.id)}>
										<Trash2 size="20px" />
									</IconButton>
								</Grid>
							</Grid>
							<Grid item md={12}>
								<Divider variant="fullWidth" />
							</Grid>
						</Grid>
					))}
				</Grid>
				<Grid item md={4} container spacing={2}>
					<Grid item md={12} container alignItems="center" justifyContent="space-between">
						<Typography
							variant="h5"
							gutterBottom
							align="left"
							color="primary"
							style={{ fontFamily: "Sequel Sans Medium Head" }}
						>
							Subtotal:
						</Typography>
						<Typography
							variant="h5"
							gutterBottom
							align="right"
							color="primary"
							style={{ fontFamily: "Sequel Sans Medium Head" }}
						>
							{`R ${Numeral(sumOfItems).format("0,0.00")}`}
						</Typography>
					</Grid>
					<Grid item md={12}>
						<Typography
							variant="subtitle2"
							gutterBottom
							color="primary"
							style={{ fontFamily: "Sequel Body" }}
						>
							Excluding taxes and shipping
						</Typography>
					</Grid>
					<Grid item md={12}>
						<Button size="large" variant="contained" fullWidth color="secondary">
							Proceed to Checkout
						</Button>
					</Grid>
					<Grid item md={12}>
						<Button size="large" variant="contained" fullWidth color="primary">
							Continue Shopping
						</Button>
					</Grid>
				</Grid>
			</Grid>
		);
	};

	return <>{items.length > 0 ? FullBag() : EmptyBag()}</>;
};

export default PreCheckout;
