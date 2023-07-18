"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import { FIBDNDDataInterface } from "../FIBDNDData";
import {
	checkFIBDNDanswers,
	getFIBDNDGameData,
	resetFIBDNDGame,
} from "@/app/redux Toolkit/slice/FIBDndSlice";
import DroppableItemsContainer from "../DroppableItem/DroppableItemsContainer";
import DropZone from "./DropZone";

type Props = FIBDNDDataInterface & { slideIndex: number };

const FIBDNDSlide = ({ question, slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const FIBGamedata = useAppSelector(getFIBDNDGameData);
	let blankIndex = 0;
	return (
		<div className="w-full h-full p-10 flex flex-col justify-center items-center gap-5">
			<DroppableItemsContainer slideIndex={slideIndex} />
			<div>Score : {FIBGamedata[slideIndex].validationFIB.score}</div>
			<div className="flex items-center p-10 bg-slate-200/30 rounded-xl shadow-2xl shadow-gray-400 text-xl">
				{question?.map((word, index) => {
					// set blankIndex to blankIndex + 1 whenever a null found
					if (!word) {
						blankIndex = blankIndex + 1;
					}
					return (
						<span key={index} className="h-full">
							{word ? (
								word
							) : (
								<DropZone
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
						dispatch(
							checkFIBDNDanswers({ slideIndex: slideIndex })
						);
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md">
					Submit
				</button>
				<button
					onClick={() => {
						dispatch(resetFIBDNDGame({ slideIndex: slideIndex }));
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md ml-5">
					Reset
				</button>
			</div>
		</div>
	);
};

export default FIBDNDSlide;
