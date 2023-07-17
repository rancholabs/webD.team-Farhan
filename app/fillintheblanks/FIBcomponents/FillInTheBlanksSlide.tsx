"use client";
import React, { useState } from "react";
import { FIBDataInterface } from "./FIBData";
import Blank from "./Blank";
import { useAppDispatch, useAppSelector } from "../redux Toolkit/hooks";
import {
	checkFIBanswers,
	getFIBData,
	resetFIBGame,
} from "../redux Toolkit/slice/FIBSlice";

type Props = FIBDataInterface & { slideIndex: number };

const FillInTheBlanksSlide = ({ question, slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const FIBGamedata = useAppSelector(getFIBData);
	let blankIndex = 0;
	return (
		<div className="w-full h-full p-10 flex flex-col justify-center items-center gap-5">
			<div>Score : {FIBGamedata[slideIndex].validationFIB.score}</div>
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
				<button
					onClick={() => {
						dispatch(checkFIBanswers({ slideIndex: slideIndex }));
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md">
					Submit
				</button>
				<button
					onClick={() => {
						dispatch(resetFIBGame({ slideIndex: slideIndex }));
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md ml-5">
					Reset
				</button>
			</div>
		</div>
	);
};

export default FillInTheBlanksSlide;
