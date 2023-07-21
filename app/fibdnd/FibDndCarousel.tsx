"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import CarouselContext from "@/app/utils/context/CarouselContext";
import { getFIBDNDGameData } from "@/app/redux Toolkit/slice/FIBDndSlice";
import FIBDNDSlide from "./FIBDNDSlide";

type Props = {};

const FibDndCarousel = (props: Props) => {
	const FIBDNDGameData = useAppSelector(getFIBDNDGameData);
	const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

	return (
		<CarouselContext
			data={FIBDNDGameData}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
			direction={direction}>
			<FIBDNDSlide slideIndex={currentSlide} />
		</CarouselContext>
	);
};

export default FibDndCarousel;
