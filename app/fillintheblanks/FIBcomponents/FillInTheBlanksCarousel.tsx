"use client";
import React, { useState } from "react";
import FillInTheBlanksSlide from "./FillInTheBlanksSlide";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import CarouselContext from "@/app/utils/context/CarouselContext";
import { getFIBGameData } from "@/app/redux Toolkit/slice/FIBSlice";

type Props = {};

const FillInTheBlanksCarousel = (props: Props) => {
	const FIBGameData = useAppSelector(getFIBGameData);
	const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

	return (
		<CarouselContext
			data={FIBGameData}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
			direction={direction}>
			<FillInTheBlanksSlide slideIndex={currentSlide} />
		</CarouselContext>
	);
};

export default FillInTheBlanksCarousel;
