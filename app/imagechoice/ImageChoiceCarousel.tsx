"use client";
import React, { useState } from "react";
import { useAppSelector } from "../redux Toolkit/hooks";
import { selectImageChoiceGameData } from "../redux Toolkit/slice/ImageChoiceSlice";
import ImageChoiceSlide from "./ImageChoiceSlide";
import { motion, AnimatePresence } from "framer-motion";
import { ImageChoiceGameData } from "./ImagesData";

type Props = {};

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const ImageChoiceCarousel = (props: Props) => {
	const imageChoiceData = useAppSelector(selectImageChoiceGameData);
	const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);
	const paginate = (newDirection: number) => {
		setCurrentSlide([currentSlide + newDirection, newDirection]);
	};
	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};
	return (
		<div className="w-full h-full relative">
			{currentSlide < ImageChoiceGameData.length - 1 && (
				<div className="absolute next flex" onClick={() => paginate(1)}>
					{"next"}
				</div>
			)}
			{currentSlide >= 1 && (
				<div
					className="absolute top-5 prev"
					onClick={() => paginate(-1)}>
					{"prev"}
				</div>
			)}
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					className="h-full w-full flex"
					key={currentSlide}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}>
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
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default ImageChoiceCarousel;
