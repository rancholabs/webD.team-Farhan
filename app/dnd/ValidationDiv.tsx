"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux Toolkit/hooks";
import {
	checkScore,
	resetDropZones,
	setError,
} from "../redux Toolkit/slice/DndSlice";
import { RootState } from "../redux Toolkit/store";

type Props = {};

const ValidationDiv = (props: Props) => {
	const dispatch = useAppDispatch();
	const score = useAppSelector(
		(state: RootState) => state.dndSlice.Validation.score
	);
	const correctAnswers = useAppSelector(
		(state) => state.dndSlice.Validation.correct
	);
	const wrongAnswers = useAppSelector(
		(state) => state.dndSlice.Validation.wrong
	);
	const hasSubmitted = useAppSelector(
		(state: RootState) => state.dndSlice.hasSubmitted
	);
	const dropZones = useAppSelector(
		(state: RootState) => state.dndSlice.dropZones
	);
	const error = useAppSelector((state: RootState) => state.dndSlice.error);

	const submithandler = () => {
		for (let i = 0; i < dropZones.length; i++) {
			if (dropZones[i].droppedId === null) {
				dispatch(setError({ error: "Fill all the blocks" }));
				return;
			}
		}
		dispatch(checkScore());
	};

	return (
		<div className="w-[200px] h-full flex justify-center items-center">
			<div
				className="w-full flex flex-col items-center justify-center gap-3 p-10 border-2 border-slate-500
			rounded-xl">
				<span className="text-xl font-bold">Score</span>
				<div className="border-2 border-slate-500 rounded-full p-10 relative flex justify-center items-center">
					<span className="absolute text-xl text-slate-700 font-semibold">
						{score}
					</span>
				</div>
				<button
					className="mt-5 w-4/5 font-semibold border-2 border-slate-500 rounded text-slate-700 py-2
					disbaled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
					onClick={submithandler}
					disabled={hasSubmitted}>
					Submit
				</button>
				<button
					className="w-4/5 font-semibold border-2 border-slate-500 rounded text-slate-700 py-2"
					onClick={() => {
						dispatch(resetDropZones());
					}}>
					Reset
				</button>
				<span>{error}</span>
			</div>
		</div>
	);
};

export default ValidationDiv;
