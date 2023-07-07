import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DropZones, DroppableItemType } from "@/app/dnd/data";

interface AnswerCollectorState {
	answers: DroppableItemType[];
}

const initialState: AnswerCollectorState = {
	answers: Array(DropZones.length).fill(null),
};

const answerCollectorSlice = createSlice({
	name: "answerCollector",
	initialState,
	reducers: {
		setAnswer: (
			state,
			action: PayloadAction<{ index: number; item: DroppableItemType }>
		) => {
			state.answers[action.payload.index] = action.payload.item;
		},
		// changeColour: (state, action: PayloadAction<number>) => {
		// 	state.answers[action.payload].colour = "text-red-500";
		// },
	},
});

export const { setAnswer } = answerCollectorSlice.actions;

export const selectAnswers = (state: RootState) =>
	state.answerCollector.answers;

export default answerCollectorSlice;
