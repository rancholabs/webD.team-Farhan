"use client";
import React, { useState } from "react";
import { useAppSelector } from "../redux Toolkit/hooks";
import { getDNDGameData } from "../redux Toolkit/slice/DndSlice";
import CarouselContext from "../utils/context/CarouselContext";
import DndSlide from "./DndSlide";

type Props = {};

const DndCarousel = (props: Props) => {
	const DNDGameData = useAppSelector(getDNDGameData);
	const [[currentSlide, direction], setCurrentSlide] = useState<
		[number, number]
	>([0, 0]);

	return (
		<CarouselContext
			data={DNDGameData}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
			direction={direction}>
			<DndSlide slideIndex={currentSlide} />
		</CarouselContext>
	);
};

export default DndCarousel;
