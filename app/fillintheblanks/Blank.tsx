"use client";
import React, { InputHTMLAttributes, useState } from "react";
import { useAppDispatch } from "../redux Toolkit/hooks";
import { setFIBanswers } from "../redux Toolkit/slice/FIBSlice";

type Props = {
	index: number;
	slideIndex: number;
} & InputHTMLAttributes<HTMLInputElement>;

const Blank = ({ index, slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const [word, setWord] = useState("");

	return (
		<input
			className="shadow-2xl shadow-blue-400"
			onChange={(e) => {
				setWord(e.target.value);
			}}
			onBlur={() => {
				dispatch(
					setFIBanswers({
						slideIndex,
						answerSubmitted: { index: index, answer: word },
					})
				);
			}}
			value={word}
		/>
	);
};

export default Blank;
