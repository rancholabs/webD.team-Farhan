"use client";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux Toolkit/hooks";
import { setFIBanswers } from "../../redux Toolkit/slice/FIBSlice";
import { RootState } from "../../redux Toolkit/store";

type Props = {
	index: number;
	slideIndex: number;
} & InputHTMLAttributes<HTMLInputElement>;

const Blank = ({ index, slideIndex }: Props) => {
	const dispatch = useAppDispatch();
	const [word, setWord] = useState("");
	const { hasreset } = useAppSelector((state: RootState) => state.FIBSlice);

	useEffect(() => {
		if (hasreset) {
			setWord("");
			// dispatch(setHasReset({ hasreset: false }));
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
						answerSubmitted: { index: index, answer: word },
					})
				);
			}}
			value={word}
		/>
	);
};

export default Blank;
