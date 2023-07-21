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
					dropZoneIndex: number;
					answer: string;
				};
			}>
		) => {
			const { slideIndex, submittedAnswer } = action.payload;
			if (submittedAnswer.answer === "") return;
			const index = state.DragAndDropGameData[
				slideIndex
			].submittedAnswers.findIndex(
				(answer) =>
					answer.dropZoneIndex === submittedAnswer.dropZoneIndex
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
		checkDNDScore: (
			state,
			action: PayloadAction<{ slideIndex: number }>
		) => {
			const { slideIndex } = action.payload;
			const answers = state.DragAndDropGameData[slideIndex].answers;
			let score = 0;
			let correct = 0;
			let wrong = 0;
			state.DragAndDropGameData[slideIndex].submittedAnswers.forEach(
				(submittedAnswer) => {
					const index = answers.findIndex(
						(ans) =>
							ans.dropZoneIndex === submittedAnswer.dropZoneIndex
					);

					if (index !== -1) {
						if (answers[index].answer === submittedAnswer.answer) {
							score += 1;
							correct += 1;
							// change the colour of the dropzone to green
							state.DragAndDropGameData[slideIndex].dropZones[
								submittedAnswer.dropZoneIndex - 1
							].color = "text-green-500";
						} else {
							wrong += 1;
							// change the colour of the dropzone to red
							state.DragAndDropGameData[slideIndex].dropZones[
								submittedAnswer.dropZoneIndex - 1
							].color = "text-red-500";
						}
					}
				}
			);
			state.DragAndDropGameData[slideIndex].Validation = {
				score,
				correct,
				wrong,
			};
			state.DragAndDropGameData[slideIndex].hasSubmitted = true;
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
			state.DragAndDropGameData[slideIndex].dropZones.map(
				(dropZone) => (dropZone.color = "")
			);
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
