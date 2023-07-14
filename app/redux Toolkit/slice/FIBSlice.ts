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
		checkFIBAnswers: (
			state,
			action: PayloadAction<{
				slideIndex: number;
				answersArray: {
					index: number;
					answer: string;
				}[];
			}>
		) => {
			const { slideIndex, answersArray } = action.payload;
			// check the submitted answers
		},
	},
});

export const getFIBData = (state: RootState) => state.FIBSlice.FIBGameData;

export const { checkFIBAnswers } = FIBSlice.actions;

export default FIBSlice;
