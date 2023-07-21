import { FIBGameDataInterface } from "../interfaces/FIBinterface";

export const FIBGameData: FIBGameDataInterface[] = [
	{
		id: 0,
		question: ["The", null, "is", "red"],
		answers: [{ index: 0, answer: "apple" }],
		validationFIB: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
		submittedAnswers: [],
		error: "",
		hasreset: false,
		hasSubmitted: false,
	},
	{
		id: 1,
		question: ["The", null, "is", "yellow.", "The", null, "is", "red"],
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
		error: "",
		hasreset: false,
		hasSubmitted: false,
	},
];
