"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import {
	getFIBDNDGameReset,
	setFIBDNDanswers,
} from "@/app/redux Toolkit/slice/FIBDndSlice";
import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

type Props = {
	index: number;
	slideIndex: number;
};

const DropZone = ({ index, slideIndex }: Props) => {
	const hasReset = useAppSelector(getFIBDNDGameReset);
	const dispatch = useAppDispatch();
	const [word, setWord] = useState<string>("");
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: (item: any) => {
			addItemToBoard(item.answer);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	const addItemToBoard = (answer: any) => {
		setWord(answer);
		dispatch(
			setFIBDNDanswers({
				slideIndex,
				answerSubmitted: { index: index, answer: answer },
			})
		);
	};

	useEffect(() => {
		if (hasReset) {
			setWord("");
			return;
		}
	}, [hasReset]);

	return (
		<>
			{word ? (
				<span
					className={`w-[100px] h-full text-black  border-b border-black border-dashed `}
					ref={drop}>
					{word}
				</span>
			) : (
				<span
					className={`flex text-black w-[100px] h-full border-b border-black border-dashed `}
					ref={drop}
				/>
			)}
		</>
	);
};

export default DropZone;
