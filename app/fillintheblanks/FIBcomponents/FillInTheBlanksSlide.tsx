"use client";
import React, { useState } from "react";
import Blank from "./Blank";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import {
	checkFIBanswers,
	getFIBGameData,
	resetFIBGame,
	setFIBError,
} from "@/app/redux Toolkit/slice/FIBSlice";
import SubmitButton from "@/app/utils/components/SubmitButton";
import ResetButton from "@/app/utils/components/ResetButton";

type Props = { slideIndex: number };

const FillInTheBlanksSlide = ({ slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const FIBGamedata = useAppSelector(getFIBGameData);
	const question = FIBGamedata[slideIndex].question;
	const score = FIBGamedata[slideIndex].validationFIB.score;
	const hasSubmitted = FIBGamedata[slideIndex].hasSubmitted;
	const error = FIBGamedata[slideIndex].error;
	let blankIndex = 0;
	return (
		<div className="w-full h-full p-10 flex flex-col justify-center items-center gap-5">
			<div>Score : {score}</div>
			<div className="flex p-10 bg-slate-200/30 rounded-xl shadow-2xl shadow-gray-400">
				{question?.map((word, index) => {
					// set blankIndex to blankIndex + 1 whenever a null found
					if (!word) {
						blankIndex = blankIndex + 1;
					}
					return (
						<span key={index}>
							{word ? (
								word
							) : (
								<Blank
									index={blankIndex - 1}
									slideIndex={slideIndex}
								/>
							)}
							&nbsp;
						</span>
					);
				})}
			</div>
			<div className="w-full flex justify-center gap-5 items-center">
				<div className="w-1/2 flex gap-5">
					<SubmitButton
						hasSubmitted={hasSubmitted}
						onClick={() => {
							if (
								FIBGamedata[slideIndex].answers.length !==
								FIBGamedata[slideIndex].submittedAnswers.length
							) {
								dispatch(
									setFIBError({
										slideIndex,
										error: "Please fill all the blanks",
									})
								);
								return;
							}
							dispatch(
								checkFIBanswers({ slideIndex: slideIndex })
							);
						}}
					/>
					<ResetButton
						onClick={() => {
							dispatch(resetFIBGame({ slideIndex: slideIndex }));
						}}
					/>
				</div>
			</div>
			{error && <span className="text-red-500">{error}</span>}
		</div>
	);
};

export default FillInTheBlanksSlide;
