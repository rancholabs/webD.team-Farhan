"use client";
import React, { useState } from "react";
import { FlashCardData } from "../FlashCardData";

type Props = FlashCardData;

const FlashCard = ({ id, question, answer }: Props) => {
	const [flip, setFlip] = useState<Boolean>(false);
	const clickHandler = () => {
		setFlip(!flip);
	};

	return (
		<div
			className={`w-60 h-40  rounded p-5 flex items-center justify-center text-center relative
            shadow-xl bg-white transform-style-3d ${
				flip ? "rotate-y-180" : ""
			} transition-all duration-300 perspective-1000 cursor-pointer`}
			onClick={clickHandler}>
			<div className="absolute backface-hidden">{question}</div>
			<div className="absolute rotate-y-180 backface-hidden">
				{answer}
			</div>
		</div>
	);
};

export default FlashCard;
