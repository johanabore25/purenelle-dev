import React from "react";
import { Drawer, Box, TextField, Grid, Typography, IconButton } from "@material-ui/core";
import { Search, X } from "react-feather";

interface Props {
	open: boolean;
	close: () => void;
}

const SearchBar = ({ open, close }: Props) => {
	return (
		<div>
			<Drawer variant="temporary" anchor="bottom" open={open} onClose={close}>
				<Box sx={{ width: "auto", padding: "3rem", height: "80vh" }} role="presentation">
					<Grid container justifyContent="center" spacing={2}>
						<Grid item md={12}>
							<Box
								sx={{
									display: "flex",
									alignItems: "flex-end",
									justifyContent: "space-around",
								}}
							>
								<Search />
								<TextField autoFocus fullWidth placeholder="Search Products" />
								<IconButton onClick={close}>
									<X />
								</IconButton>
							</Box>
						</Grid>
						<Grid item md={12}>
							<Typography color="primary" variant="h6" gutterBottom>
								Products(2)
							</Typography>
						</Grid>
						<Grid item md={12} container justifyContent="flex-start" alignItems="center" spacing={2}>
							<Grid item md={3}>
								<div
									style={{
										width: "100%",
										height: "400px",
										backgroundColor: "#ececec",
									}}
								></div>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Drawer>
		</div>
	);
};

export default SearchBar;
