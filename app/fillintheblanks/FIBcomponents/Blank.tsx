"use client";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux Toolkit/hooks";
import {
	getFIBGameData,
	setFIBanswers,
} from "@/app/redux Toolkit/slice/FIBSlice";

type Props = {
	index: number;
	slideIndex: number;
} & InputHTMLAttributes<HTMLInputElement>;

const Blank = ({ index, slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const [word, setWord] = useState("");
	const FIBGameData = useAppSelector(getFIBGameData);
	const hasreset = FIBGameData[slideIndex].hasreset;
	useEffect(() => {
		if (hasreset) {
			setWord("");
			return;
		}
	}, [hasreset]);

	return (
		<input
			className="shadow-2xl shadow-blue-400 bg-transparent outline-none border-b border-dashed border-black
			text-center"
			onChange={(e) => {
				setWord(e.target.value);
			}}
			onBlur={() => {
				dispatch(
					setFIBanswers({
						slideIndex,
						submittedAnswers: {
							index: index,
							answer: word,
						},
					})
				);
			}}
			value={word}
		/>
	);
};

export default Blank;
