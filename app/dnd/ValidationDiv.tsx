"use client";
import React, { useState } from "react";
import { useAppSelector } from "../redux Toolkit/hooks";
import { correctAnswers } from "./data";
import Validator from "../hooks/useValidator";

type Props = {};

const ValidationDiv = (props: Props) => {
	const [score, setScore] = useState(0);
	const answers = useAppSelector((state) => state.answerCollector.answers);
	const submithandler = () => {
		if (answers.length !== correctAnswers.length)
			console.log("not all answers are filled");
		else {
			const updatedScore = Validator(correctAnswers, answers);
			setScore(updatedScore);
		}
	};

	return (
		<div className="w-[200px] flex flex-col items-center">
			<span>Score</span>
			<span>{score}</span>
			<button
				className="w-4/5 font-semibold border-2 border-slate-500 rounded text-slate-700 py-2"
				onClick={submithandler}>
				Submit
			</button>
		</div>
	);
};

export default ValidationDiv;
