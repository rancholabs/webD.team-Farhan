import { DragAndDropGameData } from "@/app/utils/data/DragAndDropData";
import { DNDGameDataInterface } from "@/app/utils/interfaces/DNDinterface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialStateInterface {
	DragAndDropGameData: DNDGameDataInterface[];
}

const initialState: initialStateInterface = {
	DragAndDropGameData: DragAndDropGameData,
};

const DndSlice = createSlice({
	name: "dropZones",
	initialState,
	reducers: {
		setDNDDropZones: (
			state,
			action: PayloadAction<{
				slideIndex: number;
				submittedAnswer: {
					index: number;
					answer: string;
				};
			}>
		) => {
			const { slideIndex, submittedAnswer } = action.payload;
			state.DragAndDropGameData[slideIndex].submittedAnswers;
			if (submittedAnswer.answer === "") return;
			const index = state.DragAndDropGameData[
				slideIndex
			].submittedAnswers.findIndex(
				(answer) => answer.index === submittedAnswer.index
			);
			if (index !== -1) {
				state.DragAndDropGameData[slideIndex].submittedAnswers[index] =
					submittedAnswer;
			} else {
				state.DragAndDropGameData[slideIndex].submittedAnswers.push(
					submittedAnswer
				);
			}
			state.DragAndDropGameData[slideIndex].reset = false;
		},
		resetDNDDropZones: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			state.DragAndDropGameData[slideIndex].reset = true;
			state.DragAndDropGameData[slideIndex].submittedAnswers = [];
			let Validation = {
				score: 0,
				correct: 0,
				wrong: 0,
			};
			state.DragAndDropGameData[slideIndex].Validation = Validation;
			state.DragAndDropGameData[slideIndex].hasSubmitted = false;
			state.DragAndDropGameData[slideIndex].error = "";
		},
		checkDNDScore: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			for (
				let i = 0;
				i < state.DragAndDropGameData[slideIndex].answers.length;
				i++
			) {
				if (
					state.DragAndDropGameData[slideIndex].answers[i].answer ===
					state.DragAndDropGameData[slideIndex].submittedAnswers[i]
						.answer
				) {
					state.DragAndDropGameData[slideIndex].Validation.score++;
					state.DragAndDropGameData[slideIndex].Validation.correct++;
				} else {
					state.DragAndDropGameData[slideIndex].Validation.wrong++;
				}
			}
			state.DragAndDropGameData[slideIndex].hasSubmitted = true;
		},
		setDNDError: (
			state,
			action: PayloadAction<{ slideIndex: number; error: string }>
		) => {
			const { slideIndex, error } = action.payload;
			state.DragAndDropGameData[slideIndex].error = error;
		},
	},
});

export const getDNDGameData = (state: RootState) =>
	state.DNDSlice.DragAndDropGameData;

export const {
	setDNDDropZones,
	resetDNDDropZones,
	checkDNDScore,
	setDNDError,
} = DndSlice.actions;

export default DndSlice;
