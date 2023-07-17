"use client";
import React, { useState } from "react";
import FillInTheBlanksSlide from "./FillInTheBlanksSlide";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import { getFIBData } from "@/app/redux Toolkit/slice/FIBSlice";
import CarouselContext from "@/app/utils/context/CarouselContext";

type Props = {};

const FillInTheBlanksCarousel = (props: Props) => {
	const FIBGameData = useAppSelector(getFIBData);
	console.log("FIBGameData: ", FIBGameData);
	const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

	return (
		<CarouselContext
			data={FIBGameData}
			currentSlide={currentSlide}
			setCurrentSlide={setCurrentSlide}
			direction={direction}>
			<FillInTheBlanksSlide
				slideIndex={currentSlide}
				question={FIBGameData[currentSlide].question}
				answers={FIBGameData[currentSlide].answers}
				id={FIBGameData[currentSlide].id}
				validationFIB={FIBGameData[currentSlide].validationFIB}
				submittedAnswers={FIBGameData[currentSlide].submittedAnswers}
			/>
		</CarouselContext>
	);
};

export default FillInTheBlanksCarousel;
