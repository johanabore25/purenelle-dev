import React from "react";
import { Typography } from "@material-ui/core";
import { ChevronDown } from "react-feather";
import useStyles from "./styles";

interface button {
	text: string;
	list: string[];
	func: (route: string, id: number) => void;
}

const DropDownButton = ({ text, list, func }: button) => {
	const classes = useStyles({});

	const handleClick = (name: string, id: number): void => {
		func(name, name !== text ? id + 1 : id);
	};

	return (
		<div className={classes.container}>
			<button className={classes.buttonDiv} onClick={() => handleClick(text, 0)}>
				<Typography color="primary" className={classes.text}>
					{text}
				</Typography>
				<ChevronDown color="#7B7B7B" id="arrow" size="20px" className={classes.svg} />
			</button>
			<ul id="list" className={classes.list}>
				{list.map((item, index) => (
					<li className={classes.listItem} key={item} onClick={() => handleClick(item, index)}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropDownButton;
