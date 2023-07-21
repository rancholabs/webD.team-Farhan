import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FIBGameDataInterface } from "@/app/utils/interfaces/FIBinterface";
import { FIBGameData } from "@/app/utils/data/FIBData";

interface initialState {
	FIBGameData: FIBGameDataInterface[];
}

const initialState: initialState = {
	FIBGameData,
};

const FIBSlice = createSlice({
	name: "FIB",
	initialState,
	reducers: {
		setFIBanswers: (
			state,
			action: PayloadAction<{
				slideIndex: number;
				submittedAnswers: {
					index: number;
					answer: string;
				};
			}>
		) => {
			const { slideIndex, submittedAnswers } = action.payload;
			if (submittedAnswers.answer === "") return;
			const index = state.FIBGameData[
				slideIndex
			].submittedAnswers.findIndex(
				(answer) => answer.index === submittedAnswers.index
			);
			if (index !== -1) {
				state.FIBGameData[slideIndex].submittedAnswers[index] =
					submittedAnswers;
			} else {
				state.FIBGameData[slideIndex].submittedAnswers.push(
					submittedAnswers
				);
			}
			state.FIBGameData[slideIndex].hasreset = false;
		},
		checkFIBanswers: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			const { submittedAnswers, answers } = state.FIBGameData[slideIndex];

			let score = 0;
			let correct = 0;
			let wrong = 0;
			submittedAnswers.forEach((submittedAnswer) => {
				const index = answers.findIndex(
					(ans) => ans.index === submittedAnswer.index
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
			state.FIBGameData[slideIndex].validationFIB = {
				score,
				correct,
				wrong,
			};
			state.FIBGameData[slideIndex].hasSubmitted = true;
		},
		resetFIBGame: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			state.FIBGameData[slideIndex].hasreset = true;
			state.FIBGameData[slideIndex].submittedAnswers = [];
			let Validation = {
				score: 0,
				correct: 0,
				wrong: 0,
			};
			state.FIBGameData[slideIndex].validationFIB = Validation;
			state.FIBGameData[slideIndex].hasSubmitted = false;
			state.FIBGameData[slideIndex].error = "";
		},
		setFIBError: (
			state,
			action: PayloadAction<{ slideIndex: number; error: string }>
		) => {
			const { slideIndex, error } = action.payload;
			state.FIBGameData[slideIndex].error = error;
		},
	},
});

export const getFIBGameData = (state: RootState) => state.FIBSlice.FIBGameData;

export const { setFIBanswers, checkFIBanswers, resetFIBGame, setFIBError } =
	FIBSlice.actions;

export default FIBSlice;
