import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FIBDNDDataInterface, FIBDNDGameData } from "@/app/fibdnd/FIBDNDData";

interface initialState {
	FIBDNDGameData: FIBDNDDataInterface[];
	error: string;
	hasreset: boolean;
}

const initialState: initialState = {
	FIBDNDGameData: FIBDNDGameData,
	error: "",
	hasreset: false,
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
					index: number;
					answer: string;
				};
			}>
		) => {
			const { slideIndex, answerSubmitted } = action.payload;
			// check if the answer is already present in the submitted answers array using the index
			// if present then replace the answer
			// else push the answer
			if (answerSubmitted.answer === "") return;
			const index = state.FIBDNDGameData[
				slideIndex
			].submittedAnswers.findIndex(
				(answer) => answer.index === answerSubmitted.index
			);
			if (index !== -1) {
				state.FIBDNDGameData[slideIndex].submittedAnswers[index] =
					answerSubmitted;
			} else {
				state.FIBDNDGameData[slideIndex].submittedAnswers.push(
					answerSubmitted
				);
			}
		},
		checkFIBDNDanswers: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			const { submittedAnswers, answers } =
				state.FIBDNDGameData[slideIndex];
			if (submittedAnswers.length !== answers.length) {
				state.error = "Please fill all the blanks";
				return;
			}

			// check if the submitted answers are matching with the answers
			// if yes then update the score and correct answers
			// else update the score and wrong answers
			let score = 0;
			let correct = 0;
			let wrong = 0;
			submittedAnswers.forEach((answer) => {
				const index = answers.findIndex(
					(ans) => ans.index === answer.index
				);
				if (index !== -1) {
					if (
						answers[index].answer.toLowerCase() ===
						answer.answer.toLowerCase()
					) {
						score += 1;
						correct += 1;
					} else {
						wrong += 1;
					}
				}
			});
			state.FIBDNDGameData[slideIndex].validationFIB = {
				score,
				correct,
				wrong,
			};
		},
		resetFIBDNDGame: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			state.FIBDNDGameData[slideIndex].submittedAnswers = [];
			state.FIBDNDGameData[slideIndex].validationFIB = {
				score: 0,
				correct: 0,
				wrong: 0,
			};
			state.hasreset = true;
		},
	},
});

export const { setFIBDNDanswers, checkFIBDNDanswers, resetFIBDNDGame } =
	FIBDndSlice.actions;

export const getFIBDNDGameData = (state: RootState) =>
	state.FIBDNDSlice.FIBDNDGameData;
export const getFIBDNDGameError = (state: RootState) => state.FIBDNDSlice.error;
export const getFIBDNDGameReset = (state: RootState) =>
	state.FIBDNDSlice.hasreset;

export default FIBDndSlice;
