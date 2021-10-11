import { BannerInterface, ProductInterface } from "./types";

export const BannerData: BannerInterface = {
	numPics: 3,
	autoPlaySpeed: 3000,
	autoChange: false,
	slideContent: [
		{
			imageSrc: "/assets/Images/hero-1.jpg",
			primaryText: "The best wrinkle",
			primaryText2: "is the one you never get",
			secondaryText: "Made in South Africa",
		},
		{
			imageSrc: "/assets/Images/hero-2.jpg",
			primaryText: "The best wrinkle",
			primaryText2: "is the one you never get",
			secondaryText: "Made in South Africa",
		},
		{
			imageSrc: "/assets/Images/hero-3.jpg",
			primaryText: "The best wrinkle",
			primaryText2: "is the one you never get",
			secondaryText: "Made in South Africa",
		},
	],
};

export const ProductData: ProductInterface[] = [
	{
		id: 1,
		shortName: "Micellar cleansing water",
		longName: "Micellar 3 in 1 cleansing water",
		volume: "250ml /8.4 FL.OZ",
		description: "for cleansing, soothing and make up removal",
		mainIngredients: `Betaine which is a natural amino acid derivative (trimethylglycin) 
		   obtained from sugar beet molasses, it ensures a retention of skin's moisture. 
		   Glycolipids, a sugar based 100% renewable and readily biodegradable surfactant with low 
		   aquatic toxicity and excellent skin compatibility. Rose Water, that is high in Vitamin A 
		   and C and also has anti inflammatory and antibacterial properties. Pentylene Glycol is 100% 
		   bio-based moisturiser made by patented process from bagasse, a by-product derived from sugar cane.`,
		whyWeLoveIt: `This cleanser is better suited to gently remove impurities and eliminate 
			traces of makeup. which leaves the skin with a natural skin feel. It promotes long term hydration 
			of the skin by minimizing Transepidermal Water Loss(TEWL)Due to its antibacterial properties, 
			it helps with the balance of the skin flora it is a milder and less harsh option to skin toning`,
		howToUse: `This can be used after a long day of applying makeup, gently open and squeeze few 
			drops on the cotton pad and gently clean your face.\n Avoid eye area.\n 
			It can also be used after cleansing your face with the No Harm cleansing 
			foaming gel to give your skin extra cleansing and hydration.\n If irritation occurs stop using immediately`,
		ingredients: `Aqua, Rosa Damascena Flower Water, Glycolipids, Pentylene Glycol,
			Betaine, Sodium Levulinate; Sodium Anisate; Glycerin; Aqua, Rosa, Damascena Flower Oil, 
			Citronellol, Geraniol, Citral, Eugenol, Limonene`,
		disclaimer: "For all skin types",
		imgSrc: "/assets/Images/products/Micerlla.jpg",
	},
	{
		id: 2,
		shortName: "No harm cleansing foaming gel",
		longName: "No harm cleansing foaming gel",
		volume: "125 ml/ 4.2 FL.OZ",
		description: "Facial cleanser that removes impurities and dead skin cells",
		mainIngredients: `Kalahari Melon seed oil which has the Vitamin E, Rch in omega 6 & 9 fatty acids, 
			fast absorbing and dissolves sebum build-up allowing sebum to wash away and restores elasticity. 
			Betaine which is a natural amino acid derivative (trimethylglycin) obtained from sugar beet molasses, 
			it ensures a retention of skin's moisture. Pentylene Glycol is 100% bio-based moisturiser made by patented 
			process from bagasse, a by-product derived from sugar cane. Hydrogenated Jojoba Oil -based exfoliant which 
			is an eco-friendly option to removing dead skin cells`,
		whyWeLoveIt: `As the name suggests, this product causes no harm to your face. The carefully selected blend of 
			surfactants ensure mild and gentle cleansing Leaves the skin supple and moist without drying it out. The mild 
			jojoba exfoliants gently remove dead skin cells and dirt particles with less irritation. `,
		howToUse: `Use twice daily - morning and evenings.  Wet the face with luke warm water.\n 
			Apply small portion into the hand and gently massage around the face until there is only trace 
			amounts of exfoliant\n Rinse the face with luke warm water and towel dry.\n 
			If irritation occurs stop using immediately.\n`,
		ingredients: `Aqua, Glycerin, Coco Glucoside, Rose Water, Pentylene Glycol, Betaine, Cabomer, Hydrogenated Jojoba Oil, Rosa Damascena,
			Flower Water, Sodium Levulinate; Sodium Anisate; Glycerin; Aqua, Citrullus Lanatus (Watermelon) Seed Oil, Citrus Reticulata (Tangerine)
			Leaf Oil, Limonene, Linalool`,
		disclaimer: "For all skin types",
		imgSrc: "/assets/Images/products/noHarm.jpg",
	},
	{
		id: 3,
		shortName: "Daily anti-ageing moisturiser",
		longName: "DAILY ANTI-AGEING DAY MOISTURISER WITH SPF 15 + COLLAGEN BOOSTER",
		volume: "50 ML/1.7 fl.OZ",
		description: "Helps minimize the appearance of wrinkles and the effects of photoaging",
		mainIngredients: `Niacinamide (Vitamin B3), helps reduce the look of skin blemishes, minimises 
			enlarged pores,improve uneven skin tone, soften fine lines and wrinkles. Tetrapeptide-21, 
			ECM boosting peptide which helps to minimize the appearance of all kinds of wrinkles,smoothes 
			skin surface, reduces skin roughness,firms skin, increases elasticity and boosts collagen).
			Pentylene Glycol is 100% bio-based moisturiser made by patented process from bagasse, a 
			by-product derived from sugar cane. Rosehip Oil which contains Vitamin C, an Antioxidant 
			and rich in essential fatty acids Blend of humectants in aqueous solution that function as 
			a substitute for the “Natural Moisturizing Factor” (NMF) of human skin
			`,
		whyWeLoveIt: `It has Vitamin B3(Niacinamide) which reduces fine lines and wrinkles, reduces acne, 
			improve uneven skin tone, and minimises enlarged pores. It has also a extracellular matrix boosting 
			peptide which boosts collagen, firms skin and increases elasticity`,
		howToUse: `For external use only\n Apply daily on the face after cleansing.\n If irritation occurs stop use immediately`,
		ingredients: `Aqua(water), Niacinamide, C12-15 Alkyl Benzoate, Ethylhexyl Methoxycinnamate, Caprylic/Capric Triglyceride, 
			Glyceryl Stearate, Stearyl Alcohol, Butyl Methoxydibenzoylmethane, Cellulose, Isoamyl Laurate, Sodium Lactate, 
			Sodium PCA*; Glycine; Fructose; Urea; Inositol, Sodium Benzoate; Lactic Acid, Tetrapeptide-21; Glycerin; 
			Butylene Glycol; Aqua, Glyceryl, Caprylate, Tocopheryl Acetate, Rosa Canina Fruit (Rose Hip) Oil, Cymbopogon Martini Oil, 
			Tetrasodium EDTA, Geranyl Acetatel, Geraniol, Linalool, Citral, Limonene`,
		disclaimer: "For all skin types",
		imgSrc: "/assets/Images/products/Anti-Ageing.jpg",
	},
];

export const homeProducts: Partial<ProductInterface>[] = [
	{
		id: 1,
		imgSrc: "/assets/Images/products/Micerlla.jpg",
		shortName: "Micellar Cleansing Water",
		description: "For Cleansing, Soothing And Make Up Removal",
	},
	{
		id: 2,
		imgSrc: "/assets/Images/products/noHarm.jpg",
		shortName: "No Harm Cleansing Foaming Gel",
		description: "Facial Cleanser That Removes Impurities And Dead Skin Cells",
	},
	{
		id: 3,
		imgSrc: "/assets/Images/products/Anti-Ageing.jpg",
		shortName: "Daily Anti-Ageing Day Moisturiser",
		description: "Helps minimize the appearance of wrinkles and the effects of photoaging",
	},
	{
		id: 4,
		imgSrc: "/assets/Images/products/radiance.jpg",
		shortName: "Pro Radiance Primer",
		description: "PRO RADIANCE (Even tone and Hydrating) PRIMER",
	},
];
