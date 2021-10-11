import React from "react";
import { Dialog, Slide, IconButton, Grid, Typography } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import * as Icon from "react-feather";
import PreCheckout from "./PreCheckout";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement },
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
	open: boolean;
	onClose: () => void;
}

const Cart = ({ open, onClose }: Props) => {
	return (
		<div>
			<Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
				<div style={{ padding: "3rem", height: "100%" }}>
					<Grid container justifyContent="center" alignItems="center">
						<Grid item md={12} style={{ textAlign: "right" }}>
							<IconButton onClick={onClose}>
								<Icon.X />
							</IconButton>
						</Grid>
						<PreCheckout />
					</Grid>
				</div>
			</Dialog>
		</div>
	);
};

export default Cart;
