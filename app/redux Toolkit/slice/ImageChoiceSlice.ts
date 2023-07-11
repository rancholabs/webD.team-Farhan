import { ImageDataInterface } from "@/app/imagechoice/ImagesData";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { checkScore } from "./DndSlice";
import { RootState } from "../store";

interface inititalData {
	images: ImageDataInterface[];
	question: string;
	error: string;
	validationImageChoice: {
		score: number;
		correct: number;
		wrong: number;
	};
}

const initialState: inititalData = {
	images: [],
	question: "Which of these is a laptop ?",
	error: "",
	validationImageChoice: {
		score: 0,
		correct: 0,
		wrong: 0,
	},
};

export const fetchImages = createAsyncThunk(
	"imageChoice/fetchImages",
	async (_, thunkAPI) => {
		try {
			const res = await fetch("https://picsum.photos/v2/list?limit=8");
			const data = await res.json();
			const imagesData: ImageDataInterface[] = data.map((image: any) => {
				return {
					id: image.id,
					alt: image.author,
					url: image.download_url,
					correct: true,
					selected: false,
				};
			});
			return imagesData as ImageDataInterface[];
		} catch (err: any) {
			return thunkAPI.rejectWithValue({ error: err.message });
		}
	}
);

const ImageChoiceSlice = createSlice({
	name: "imageChoice",
	initialState,
	reducers: {
		setSelected: (
			state,
			action: PayloadAction<{ id: number; selected: boolean }>
		) => {
			const index = state.images.findIndex(
				(image) => image.id === action.payload.id
			);
			state.images[index].selected = action.payload.selected;
		},
		resetSelected: (state) => {
			state.images.forEach((image) => {
				image.selected = false;
				image.color = "";
			});
			state.validationImageChoice = {
				score: 0,
				correct: 0,
				wrong: 0,
			};
			state.error = "";
		},
		checkScoreForImageChoice: (state) => {
			for (let i = 0; i < state.images.length; i++) {
				if (state.images[i].selected === state.images[i].correct) {
					state.images[i].color = "border-green-500";
					state.validationImageChoice.score++;
					state.validationImageChoice.correct++;
				} else {
					state.images[i].color = "border-red-500";
					state.validationImageChoice.wrong++;
				}
			}
		},
	},
	extraReducers(builder) {
		builder
			.addCase(
				fetchImages.fulfilled,
				(state, action: PayloadAction<ImageDataInterface[]>) => {
					state.images = action.payload;
				}
			)
			.addCase(fetchImages.rejected, (state, action) => {
				state.error = action.error.message!;
			})
			.addCase(fetchImages.pending, (state, action) => {
				state.error = "";
			});
	},
});

export const getImages = (state: RootState) => state.ImageChoiceSlice.images;
export const getQuestion = (state: RootState) =>
	state.ImageChoiceSlice.question;
export const getError = (state: RootState) => state.ImageChoiceSlice.error;
export const getImageChoiceScore = (state: RootState) =>
	state.ImageChoiceSlice.validationImageChoice.score;
export const getImageChoiceCorrect = (state: RootState) =>
	state.ImageChoiceSlice.validationImageChoice.correct;
export const getImageChoiceWrong = (state: RootState) =>
	state.ImageChoiceSlice.validationImageChoice.wrong;

export const { setSelected, resetSelected, checkScoreForImageChoice } =
	ImageChoiceSlice.actions;

export default ImageChoiceSlice;
