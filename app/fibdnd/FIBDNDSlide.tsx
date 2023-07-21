"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import {
	checkFIBDNDanswers,
	getFIBDNDGameData,
	resetFIBDNDGame,
	setFIBDNDError,
	setFIBDNDanswers,
} from "@/app/redux Toolkit/slice/FIBDndSlice";
import DroppableItemsContainer from "./DroppableItem/DroppableItemsContainer";
import DropZone from "./fibdndComponents/DropZone";
import SubmitButton from "../utils/components/SubmitButton";
import ResetButton from "../utils/components/ResetButton";

type Props = {
	slideIndex: number;
};

const FIBDNDSlide = ({ slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const FIBDNDGamedata = useAppSelector(getFIBDNDGameData);
	const score = FIBDNDGamedata[slideIndex].validationFIBDND.score;
	const question = FIBDNDGamedata[slideIndex].question;
	const hasSubmitted = FIBDNDGamedata[slideIndex].hasSubmitted;
	const error = FIBDNDGamedata[slideIndex].error;
	let blankIndex = 0;

	const submitHandler = () => {
		if (
			FIBDNDGamedata[slideIndex].submittedAnswers.length <
			FIBDNDGamedata[slideIndex].answers.length
		) {
			dispatch(
				setFIBDNDError({
					slideIndex: slideIndex,
					error: "Please fill all the dropzones",
				})
			);
			return;
		}
		dispatch(
			checkFIBDNDanswers({
				slideIndex: slideIndex,
			})
		);
	};

	return (
		<div className="w-full h-full p-10 flex flex-col justify-center items-center gap-5">
			<DroppableItemsContainer slideIndex={slideIndex} />
			<div>Score : {score}</div>
			<div className="flex items-center p-10 bg-slate-200/30 rounded-xl shadow-2xl shadow-gray-400 text-xl">
				{question?.map((word, index) => {
					// set blankIndex to blankIndex + 1 whenever a null found
					if (!word) {
						blankIndex++;
					}
					return (
						<span key={index} className="h-full">
							{word ? (
								word
							) : (
								<DropZone
									index={blankIndex}
									slideIndex={slideIndex}
								/>
							)}
							&nbsp;
						</span>
					);
				})}
			</div>
			<div className="w-full flex justify-center items-center">
				<div className="w-1/2 flex gap-5">
					<SubmitButton
						hasSubmitted={hasSubmitted}
						onClick={submitHandler}
					/>
					<ResetButton
						onClick={() => {
							dispatch(
								resetFIBDNDGame({
									slideIndex: slideIndex,
								})
							);
						}}
					/>
				</div>
			</div>
			{error && <span className="text-red-500">{error}</span>}
		</div>
	);
};

export default FIBDNDSlide;
