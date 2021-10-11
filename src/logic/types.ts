interface SlideInterface {
	imageSrc: string;
	primaryText: string;
	primaryText2: string;
	secondaryText: string;
}

export interface BannerInterface {
	numPics: number;
	autoPlaySpeed: number;
	autoChange: boolean;
	slideContent: SlideInterface[];
}

export interface CartInterface {
	id: string;
	imgSrc: string;
	shortName: string;
	count: number;
	price: number;
}

export interface FirstSectionProductInterface {
	imageSrc: string;
	description: string;
	name: string;
	date: string | null;
	id: number;
}

export interface ProductInterface {
	id: number;
	longName: string;
	description: string;
	volume: string;
	mainIngredients: string;
	ingredients: string;
	whyWeLoveIt: string;
	howToUse: string;
	disclaimer: string;
	shortName: string;
	imgSrc: string;
}
