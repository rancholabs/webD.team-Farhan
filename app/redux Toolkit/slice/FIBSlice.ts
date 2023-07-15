import { FIBDataInterface, FIBGameData } from "@/app/fillintheblanks/FIBData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
	},
});

export const getFIBData = (state: RootState) => state.FIBSlice.FIBGameData;

export const { setFIBanswers } = FIBSlice.actions;

export default FIBSlice;
