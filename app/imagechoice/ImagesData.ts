export interface ImageDataInterface {
	id: number;
	alt: string;
	url: string;
	correct: boolean;
	selected: boolean;
	color?: string;
}

export interface ImageChoiceGameInterface {
	images: ImageDataInterface[];
	question: string;
	row: number;
	column: number;
	imageCount: number;
	validationImageChoice: {
		score: number;
		correct: number;
		wrong: number;
	};
}

export const ImageChoiceGameData: ImageChoiceGameInterface[] = [
	{
		images: [
			{
				id: 1,
				alt: "apple",
				url: "https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg",
				correct: true,
				selected: false,
			},
			{
				id: 2,
				alt: "banana",
				url: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
				correct: false,
				selected: false,
			},
		],
		question: "Which one is an apple?",
		row: 1,
		column: 2,
		imageCount: 2,
		validationImageChoice: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
	},
	{
		images: [
			{
				id: 1,
				alt: "apple",
				url: "https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 2,
				alt: "banana",
				url: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
				correct: true,
				selected: false,
			},
		],
		question: "Which one is a banana?",
		row: 1,
		column: 2,
		imageCount: 2,
		validationImageChoice: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
	},
	{
		images: [
			{
				id: 1,
				alt: "apple",
				url: "https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 2,
				alt: "banana",
				url: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
				correct: false,
				selected: false,
			},
			{
				id: 3,
				alt: "orange",
				url: "https://png.pngtree.com/png-vector/20210513/ourlarge/pngtree-orange-delicious-png-image_3279412.jpg",
				correct: true,
				selected: false,
			},
		],
		question: "Which one is an orange?",
		row: 1,
		column: 4,
		imageCount: 3,
		validationImageChoice: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
	},
	{
		images: [
			{
				id: 1,
				alt: "apple",
				url: "https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 2,
				alt: "banana",
				url: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png",
				correct: false,
				selected: false,
			},
			{
				id: 3,
				alt: "orange",
				url: "https://png.pngtree.com/png-vector/20210513/ourlarge/pngtree-orange-delicious-png-image_3279412.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 4,
				alt: "strawberry",
				url: "https://png.pngtree.com/png-clipart/20201226/ourmid/pngtree-delicious-fresh-strawberry-png-image_2645827.jpg",
				correct: true,
				selected: false,
			},
			{
				id: 5,
				alt: "grape",
				url: "https://png.pngtree.com/png-clipart/20201226/ourmid/pngtree-delicious-fresh-strawberry-png-image_2645827.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 6,
				alt: "watermelon",
				url: "https://png.pngtree.com/png-clipart/20201226/ourmid/pngtree-delicious-fresh-strawberry-png-image_2645827.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 7,
				alt: "pineapple",
				url: "https://png.pngtree.com/png-clipart/20201226/ourmid/pngtree-delicious-fresh-strawberry-png-image_2645827.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 8,
				alt: "mango",
				url: "https://png.pngtree.com/png-clipart/20201226/ourmid/pngtree-delicious-fresh-strawberry-png-image_2645827.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 11,
				alt: "cherry",
				url: "https://png.pngtree.com/png-vector/20210414/ourlarge/pngtree-red-cherry-vector-icon-png-image_2661469.jpg",
				correct: false,
				selected: false,
			},
			{
				id: 12,
				alt: "lemon",
				url: "https://png.pngtree.com/png-vector/20210316/ourlarge/pngtree-lemon-fruit-icon-vector-illustration-in-glyph-style-for-any-png-image_2741731.jpg",
				correct: false,
				selected: false,
			},
			// {
			// 	id: 13,
			// 	alt: "blueberry",
			// 	url: "https://png.pngtree.com/png-vector/20210707/ourlarge/pngtree-round-icon-with-blueberries-png-image_3006103.jpg",
			// 	correct: false,
			// 	selected: false,
			// },
			// {
			// 	id: 14,
			// 	alt: "peach",
			// 	url: "https://png.pngtree.com/png-vector/20210907/ourlarge/pngtree-summer-fruit-illustration-png-image_2990489.jpg",
			// 	correct: false,
			// 	selected: false,
			// },
			// {
			// 	id: 15,
			// 	alt: "plum",
			// 	url: "https://png.pngtree.com/png-vector/20210907/ourlarge/pngtree-summer-fruit-illustration-png-image_2990488.jpg",
			// 	correct: false,
			// 	selected: false,
			// },
			// {
			// 	id: 16,
			// 	alt: "raspberry",
			// 	url: "https://png.pngtree.com/png-vector/20210714/ourlarge/pngtree-raspberry-icon-png-image_3017630.jpg",
			// 	correct: false,
			// 	selected: false,
			// },
		],
		question: "Which one is a strawberry?",
		row: 2,
		column: 4,
		imageCount: 16,
		validationImageChoice: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
	},
];
// max 18 images
