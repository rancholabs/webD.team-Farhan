"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux Toolkit/hooks";
import {
	checkDNDScore,
	getDNDGameData,
	resetDNDDropZones,
	setDNDError,
} from "../../redux Toolkit/slice/DndSlice";
import SubmitButton from "@/app/utils/components/SubmitButton";
import ResetButton from "@/app/utils/components/ResetButton";

type Props = {
	slideIndex: number;
};

const ValidationDiv = ({ slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const DNDGameData = useAppSelector(getDNDGameData);
	const Validation = DNDGameData[slideIndex].Validation;
	const hasSubmitted = DNDGameData[slideIndex].hasSubmitted;
	const error = DNDGameData[slideIndex].error;

	const submithandler = () => {
		if (
			DNDGameData[slideIndex].submittedAnswers.length <
			DNDGameData[slideIndex].answers.length
		) {
			dispatch(
				setDNDError({
					slideIndex: slideIndex,
					error: "Please fill all the dropzones",
				})
			);
			return;
		}
		dispatch(
			checkDNDScore({
				slideIndex: slideIndex,
			})
		);
	};

	return (
		<div className="w-[200px] h-full flex justify-center items-center">
			<div
				className="w-full flex flex-col items-center justify-center gap-3 p-10 border-2 border-slate-500
			rounded-xl">
				<span className="text-xl font-bold">Score</span>
				<div className="border-2 border-slate-500 rounded-full p-10 relative flex justify-center items-center">
					<span className="absolute text-xl text-slate-700 font-semibold">
						{Validation.score}
					</span>
				</div>
				<SubmitButton
					hasSubmitted={hasSubmitted}
					onClick={submithandler}
				/>
				<ResetButton
					onClick={() => {
						dispatch(
							resetDNDDropZones({
								slideIndex: slideIndex,
							})
						);
					}}
				/>
				<span>{error}</span>
			</div>
		</div>
	);
};

export default ValidationDiv;
