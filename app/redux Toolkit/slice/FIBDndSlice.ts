import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FIBDNDDataInterface } from "@/app/utils/interfaces/FIBDNDInterface";
import { FIBDNDGameData } from "@/app/utils/data/FIBDNDData";

interface initialState {
	FIBDNDGameData: FIBDNDDataInterface[];
}

const initialState: initialState = {
	FIBDNDGameData: FIBDNDGameData,
};

const FIBDndSlice = createSlice({
	name: "FIBDND",
	initialState,
	reducers: {
		setFIBDNDanswers: (
			state,
			action: PayloadAction<{
				slideIndex: number;
				answerSubmitted: {
					dropZoneIndex: number;
					answer: string;
				};
			}>
		) => {
			const { slideIndex, answerSubmitted } = action.payload;
			if (answerSubmitted.answer === "") return;
			const index = state.FIBDNDGameData[
				slideIndex
			].submittedAnswers.findIndex(
				(answer) =>
					answer.dropZoneIndex === answerSubmitted.dropZoneIndex
			);
			if (index !== -1) {
				state.FIBDNDGameData[slideIndex].submittedAnswers[index] =
					answerSubmitted;
			} else {
				state.FIBDNDGameData[slideIndex].submittedAnswers.push(
					answerSubmitted
				);
			}
			state.FIBDNDGameData[slideIndex].reset = false;
		},
		checkFIBDNDanswers: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			const { submittedAnswers, answers } =
				state.FIBDNDGameData[slideIndex];

			let score = 0;
			let correct = 0;
			let wrong = 0;
			submittedAnswers.forEach((submittedAnswer) => {
				const index = answers.findIndex(
					(ans) => ans.dropZoneIndex === submittedAnswer.dropZoneIndex
				);
				if (index !== -1) {
					if (
						answers[index].answer.toLowerCase() ===
						submittedAnswer.answer.toLowerCase()
					) {
						score += 1;
						correct += 1;
					} else {
						wrong += 1;
					}
				}
			});
			state.FIBDNDGameData[slideIndex].validationFIBDND = {
				score,
				correct,
				wrong,
			};
			state.FIBDNDGameData[slideIndex].hasSubmitted = true;
		},
		resetFIBDNDGame: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			state.FIBDNDGameData[slideIndex].reset = true;
			state.FIBDNDGameData[slideIndex].submittedAnswers = [];
			let Validation = {
				score: 0,
				correct: 0,
				wrong: 0,
			};
			state.FIBDNDGameData[slideIndex].validationFIBDND = Validation;
			state.FIBDNDGameData[slideIndex].hasSubmitted = false;
			state.FIBDNDGameData[slideIndex].error = "";
		},
		setFIBDNDError: (
			state,
			action: PayloadAction<{ slideIndex: number; error: string }>
		) => {
			const { slideIndex, error } = action.payload;
			state.FIBDNDGameData[slideIndex].error = error;
		},
	},
});

export const {
	setFIBDNDanswers,
	checkFIBDNDanswers,
	resetFIBDNDGame,
	setFIBDNDError,
} = FIBDndSlice.actions;

export const getFIBDNDGameData = (state: RootState) =>
	state.FIBDNDSlice.FIBDNDGameData;

export default FIBDndSlice;
