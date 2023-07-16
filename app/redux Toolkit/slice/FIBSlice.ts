import { FIBDataInterface, FIBGameData } from "@/app/fillintheblanks/FIBData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { stat } from "fs";

interface initialState {
	FIBGameData: FIBDataInterface[];
	error: string;
}

const initialState: initialState = {
	FIBGameData,
	error: "",
};

const FIBSlice = createSlice({
	name: "FIB",
	initialState,
	reducers: {
		setFIBanswers: (
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
			const index = state.FIBGameData[
				slideIndex
			].submittedAnswers.findIndex(
				(answer) => answer.index === answerSubmitted.index
			);
			if (index !== -1) {
				state.FIBGameData[slideIndex].submittedAnswers[index] =
					answerSubmitted;
			} else {
				state.FIBGameData[slideIndex].submittedAnswers.push(
					answerSubmitted
				);
			}
		},
		checkFIBanswers: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			const { submittedAnswers, answers } = state.FIBGameData[slideIndex];
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
					if (answers[index].answer === answer.answer) {
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
		},
	},
});

export const getFIBData = (state: RootState) => state.FIBSlice.FIBGameData;

export const { setFIBanswers, checkFIBanswers } = FIBSlice.actions;

export default FIBSlice;
