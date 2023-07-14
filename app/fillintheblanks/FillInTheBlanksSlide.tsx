"use client";
import React, { useState } from "react";
import { FIBDataInterface } from "./FIBData";
import { useAppDispatch } from "../redux Toolkit/hooks";
import { checkFIBAnswers } from "../redux Toolkit/slice/FIBSlice";
import Blank from "./Blank";

type Props = FIBDataInterface & { slideIndex: number };

const FillInTheBlanksSlide = ({ question, slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	return (
		<div className="w-full h-full p-10 flex flex-col justify-center items-center gap-5">
			<div className="flex p-10 bg-slate-200/30 rounded-xl shadow-2xl shadow-gray-400">
				{question?.map((word, index) => {
					return (
						<span key={index}>
							{word ? word : <Blank index={index} />}
							&nbsp;
						</span>
					);
				})}
			</div>
			<div className="w-full flex justify-center gap-5 items-center">
				<button
					onClick={() => {
						// dispatch();
						// checkScoreForImageChoice({ index: slideIndex })
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md">
					Submit
				</button>
				{/* reset button */}
				<button
					onClick={() => {
						// dispatch(resetSelectedSlide({ index: slideIndex }));
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md ml-5">
					Reset
				</button>
			</div>
		</div>
	);
};

export default FillInTheBlanksSlide;
