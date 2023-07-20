export interface FIBDNDDataInterface {
	id: number;
	question: (string | null)[];
	answers: {
		index: number;
		answer: string;
	}[];
	submittedAnswers: {
		index: number;
		answer: string;
	}[];
	validationFIB: {
		score: number;
		correct: number;
		wrong: number;
	};
}

export const FIBDNDGameData: FIBDNDDataInterface[] = [
	{
		id: 0,
		question: ["The", null, "is", "red."],
		answers: [{ index: 0, answer: "apple" }],
		validationFIB: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
		submittedAnswers: [],
	},
	{
		id: 1,
		question: ["The", null, "is", "yellow.", "The", null, "is", "red."],
		answers: [
			{
				index: 0,
				answer: "banana",
			},
			{
				index: 1,
				answer: "apple",
			},
		],
		validationFIB: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
		submittedAnswers: [],
	},
];
