"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../redux Toolkit/hooks";
import { getFIBData } from "../redux Toolkit/slice/FIBSlice";
import CarouselContext from "../utils/context/CarouselContext";
import FillInTheBlanksSlide from "./FillInTheBlanksSlide";

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
			/>
		</CarouselContext>
	);
};

export default FillInTheBlanksCarousel;
