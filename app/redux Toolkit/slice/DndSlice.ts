import {
	DropZonesData,
	DroppableItem,
	DroppableItems,
} from "@/app/dnd/Reduxdata";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	dropZones: DropZonesData,
	droppableItems: DroppableItems,
	Validation: {
		score: 0,
		correct: 0,
		wrong: 0,
	},
	hasSubmitted: false,
	error: "",
};

const DndSlice = createSlice({
	name: "dropZones",
	initialState,
	reducers: {
		setDropZones: (
			state,
			action: PayloadAction<{
				index: number;
				droppedId: number;
				droppedItem: DroppableItem;
			}>
		) => {
			state.dropZones[action.payload.index - 1].droppedId =
				action.payload.droppedId;
			state.dropZones[action.payload.index - 1].droppableItem =
				action.payload.droppedItem;
		},
		resetDropZones: (state) => {
			state.dropZones = DropZonesData;
			state.droppableItems = DroppableItems;
			state.error = "";
			state.hasSubmitted = false;
			state.Validation.score = 0;
			state.Validation.correct = 0;
			state.Validation.wrong = 0;
		},
		checkScore: (state) => {
			for (let i = 0; i < state.dropZones.length; i++) {
				if (
					state.dropZones[i].expectedId ===
					state.dropZones[i].droppedId
				) {
					state.dropZones[i].color = "text-green-500";
					state.Validation.score++;
					state.Validation.correct++;
				} else {
					state.dropZones[i].color = "text-red-500";
					state.Validation.wrong++;
				}
			}
			state.hasSubmitted = true;
		},
		setError: (state, action: PayloadAction<{ error: string }>) => {
			state.error = action.payload.error;
		},
	},
});

export const { setDropZones, checkScore, resetDropZones, setError } =
	DndSlice.actions;

export default DndSlice;
