"use client";
import React, { useState } from "react";
import { useAppSelector } from "../redux Toolkit/hooks";
import { selectImageChoiceGameData } from "../redux Toolkit/slice/ImageChoiceSlice";
import ImageChoiceSlide from "./ImageChoiceSlide";
import CarouselContext from "../utils/context/CarouselContext";

type Props = {};

const ImageChoiceCarousel = (props: Props) => {
	const imageChoiceData = useAppSelector(selectImageChoiceGameData);
	const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

	return (
		<CarouselContext
			data={imageChoiceData}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
			direction={direction}>
			<ImageChoiceSlide
				row={imageChoiceData[currentSlide].row}
				column={imageChoiceData[currentSlide].column}
				images={imageChoiceData[currentSlide].images}
				imageCount={imageChoiceData[currentSlide].imageCount}
				question={imageChoiceData[currentSlide].question}
				validationImageChoice={
					imageChoiceData[currentSlide].validationImageChoice
				}
				slideIndex={currentSlide}
			/>
		</CarouselContext>
	);
};

export default ImageChoiceCarousel;
