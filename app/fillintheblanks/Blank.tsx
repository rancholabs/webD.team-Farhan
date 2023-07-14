"use client";
import React, { InputHTMLAttributes, useState } from "react";

type Props = { index: number } & InputHTMLAttributes<HTMLInputElement>;

const Blank = ({ index }: Props) => {
	const [word, setWord] = useState("");

	return (
		<input
			className="shadow-2xl shadow-blue-400"
			onChange={(e) => {
				setWord(e.target.value);
			}}
			value={word}
		/>
	);
};

export default Blank;
