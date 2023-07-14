"use client";
import React, { Dispatch, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
	children: React.ReactNode;
	data: any;
	currentSlide: number;
	setCurrentSlide: Dispatch<React.SetStateAction<[number, number]>>;
	direction: number;
};

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1500 : -1500,
			opacity: 0.1,
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
			x: direction < 0 ? 1500 : -1500,
			opacity: 0.1,
		};
	},
};

const CarouselContext = ({
	children,
	data,
	currentSlide,
	setCurrentSlide,
	direction,
}: Props) => {
	const paginate = (newDirection: number) => {
		setCurrentSlide([currentSlide + newDirection, newDirection]);
	};
	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset: number, velocity: number) => {
		return Math.abs(offset) * velocity;
	};
	return (
		<div className="w-full h-full relative overflow-hidden">
			{currentSlide < data.length - 1 && (
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
					className="h-full w-full overflow-hidden"
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
					// drag="x"
					// dragConstraints={{ left: 0, right: 0 }}
					// dragElastic={1}
					// onDragEnd={(e, { offset, velocity }) => {
					// 	const swipe = swipePower(offset.x, velocity.x);

					// 	if (swipe < -swipeConfidenceThreshold) {
					// 		paginate(1);
					// 	} else if (swipe > swipeConfidenceThreshold) {
					// 		paginate(-1);
					// 	}
					// }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default CarouselContext;
