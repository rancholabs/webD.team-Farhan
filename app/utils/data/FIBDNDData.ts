import { FIBDNDDataInterface } from "../interfaces/FIBDNDInterface";

export const FIBDNDGameData: FIBDNDDataInterface[] = [
	{
		dropZones: [
			{
				dropZoneIndex: 1,
				color: null,
			},
		],
		droppableItems: [
			{
				index: 1,
				name: "apple",
			},
		],
		question: ["The", null, "is", "red."],
		answers: [
			{
				dropZoneIndex: 1,
				answer: "apple",
			},
		],
		submittedAnswers: [],
		validationFIBDND: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
		error: "",
		hasSubmitted: false,
		reset: false,
	},
	{
		dropZones: [
			{
				dropZoneIndex: 1,
				color: null,
			},
			{
				dropZoneIndex: 2,
				color: null,
			},
		],
		droppableItems: [
			{
				index: 1,
				name: "banana",
			},
			{
				index: 2,
				name: "apple",
			},
		],
		question: ["The", null, "is", "yellow.", "The", null, "is", "red."],
		answers: [
			{
				dropZoneIndex: 1,
				answer: "banana",
			},
			{
				dropZoneIndex: 2,
				answer: "apple",
			},
		],
		submittedAnswers: [],
		validationFIBDND: {
			score: 0,
			wrong: 0,
			correct: 0,
		},
		error: "",
		hasSubmitted: false,
		reset: false,
	},
];
