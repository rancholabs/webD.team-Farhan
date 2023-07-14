import { ImageChoiceGameInterface } from "@/app/imagechoice/ImagesData";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ImageChoiceGameData } from "@/app/imagechoice/ImagesData";

interface inititalData {
	ImageChoiceGameData: ImageChoiceGameInterface[];
	error: string;
}

const initialState: inititalData = {
	ImageChoiceGameData,
	error: "",
};

const ImageChoiceSlice = createSlice({
	name: "imageChoice",
	initialState,
	reducers: {
		setSelected: (
			state,
			action: PayloadAction<{
				id: number;
				selected: boolean;
				slideIndex: number;
			}>
		) => {
			const { id, selected, slideIndex } = action.payload;
			const index = state.ImageChoiceGameData[
				slideIndex
			].images.findIndex((image) => image.id === id);
			state.ImageChoiceGameData[slideIndex].images[index].selected =
				selected;
		},

		resetSelectedSlide: (
			state,
			action: PayloadAction<{ index: number }>
		) => {
			const { index } = action.payload;
			state.ImageChoiceGameData[index].images.forEach((image) => {
				image.selected = false;
				image.color = "";
			});
			state.ImageChoiceGameData[index].validationImageChoice.score = 0;
			state.ImageChoiceGameData[index].validationImageChoice.correct = 0;
			state.ImageChoiceGameData[index].validationImageChoice.wrong = 0;
			state.error = "";
		},
		checkScoreForImageChoice: (
			state,
			action: PayloadAction<{ index: number }>
		) => {
			const { index } = action.payload;
			for (
				let j = 0;
				j < state.ImageChoiceGameData[index].images.length;
				j++
			) {
				if (
					state.ImageChoiceGameData[index].images[j].selected ===
					state.ImageChoiceGameData[index].images[j].correct
				) {
					state.ImageChoiceGameData[index].images[j].color =
						"border-4 border-green-500";
					state.ImageChoiceGameData[index].images[j].selected = false;
					state.ImageChoiceGameData[index].validationImageChoice
						.score++;
					state.ImageChoiceGameData[index].validationImageChoice
						.correct++;
				} else {
					state.ImageChoiceGameData[index].images[j].color =
						"border-4 border-red-500";
					state.ImageChoiceGameData[index].validationImageChoice
						.wrong++;
				}
			}
		},
	},
});

export const selectImageChoiceGameData = (state: RootState) =>
	state.ImageChoiceSlice.ImageChoiceGameData;
export const selectImageChoiceError = (state: RootState) =>
	state.ImageChoiceSlice.error;

export const { setSelected, checkScoreForImageChoice, resetSelectedSlide } =
	ImageChoiceSlice.actions;

export default ImageChoiceSlice;

// export const fetchImages = createAsyncThunk(
// 	"imageChoice/fetchImages",
// 	async (_, thunkAPI) => {
// 		try {
// 			const res = await fetch("https://picsum.photos/v2/list?limit=8");
// 			const data = await res.json();
// 			const imagesData: ImageDataInterface[] = data.map((image: any) => {
// 				return {
// 					id: image.id,
// 					alt: image.author,
// 					url: image.download_url,
// 					correct: true,
// 					selected: false,
// 				};
// 			});
// 			return imagesData as ImageDataInterface[];
// 		} catch (err: any) {
// 			return thunkAPI.rejectWithValue({ error: err.message });
// 		}
// 	}
// );

// extraReducers(builder) {
// 	builder
// 		.addCase(
// 			fetchImages.fulfilled,
// 			(state, action: PayloadAction<ImageDataInterface[]>) => {
// 				state.images = action.payload;
// 			}
// 		)
// 		.addCase(fetchImages.rejected, (state, action) => {
// 			state.error = action.error.message!;
// 		})
// 		.addCase(fetchImages.pending, (state, action) => {
// 			state.error = "";
// 		});
// },
