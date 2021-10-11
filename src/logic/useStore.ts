import create from "zustand";
import produce from "immer";
import { CartInterface } from "./types";
import axios from "axios";
import { toast } from "react-toastify";

interface CartState {
	items: CartInterface[];
	addItem: (id: string, imgSrc: string, count: number, shortName: string, price: number) => void;
	removeItem: (id: string) => void;
	updateItemCount: (index: number, count: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
	items: [],

	addItem: (id, imgSrc, count, shortName, price) => {
		const tempItems = get().items;
		let obj = tempItems.find((tempItem) => tempItem.id === id);
		if (obj === undefined) {
			set((state) => ({
				items: [
					...state.items,
					{
						id,
						imgSrc,
						count,
						shortName,
						price,
					} as CartInterface,
				],
			}));
			toast.info(`${shortName} added to cart`);
		}
	},

	removeItem: (id) => {
		set((state) => ({
			items: state.items.filter((item) => item.id !== id),
		}));
	},

	updateItemCount: (id, count) =>
		set(
			produce((state) => {
				state.items[id].count = count;
			})
		),
}));

interface User {
	loading: boolean;
	loggedIn: boolean;
	user: {
		firstName: string;
		lastName: string;
	};
	logInUser: (email: string, password: string) => void;
	createUser: (firstName: string, lastName: string, email: string, phoneNUmber: string, password: string) => void;
}

export const useUserStore = create<User>((set) => ({
	loading: false,
	loggedIn: false,
	user: { firstName: "", lastName: "" },
	logInUser: async (_email: string, _password: string) => {
		set({ loading: true });
		const response = await axios.post("");
		const { first_name, last_name } = response.data;
		set({ user: { firstName: first_name, lastName: last_name } });
		set({ loading: false });
	},
	createUser: async (
		_firstName: string,
		_lastName: string,
		_email: string,
		_phoneNUmber: string,
		_password: string
	) => {
		set({ loading: true });
		const response = await axios.post("");
		const { first_name, last_name } = response.data;
		set({ user: { firstName: first_name, lastName: last_name } });
		set({ loading: false });
	},
}));
