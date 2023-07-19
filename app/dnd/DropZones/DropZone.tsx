"use client";
import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import { DropZoneInterface } from "@/app/utils/interfaces/DNDinterface";
import {
	getDNDGameData,
	setDNDDropZones,
} from "@/app/redux Toolkit/slice/DndSlice";

type Props = DropZoneInterface & { slideIndex: number };

const DropZone = ({ index, color, slideIndex }: Props) => {
	const DNDGameData = useAppSelector(getDNDGameData);
	const reset = DNDGameData[slideIndex].reset;
	const dispatch = useAppDispatch();
	const [board, setBoard] = useState<string>("");
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: ({ answer }: any) => {
			addItemToBoard(answer);
			setBoard(answer);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	const addItemToBoard = (answer: string) => {
		console.log("answer", answer);
		dispatch(
			setDNDDropZones({
				slideIndex: slideIndex,
				submittedAnswer: {
					index: index,
					answer: answer,
				},
			})
		);
	};

	useEffect(() => {
		if (reset) {
			setBoard("");
			return;
		}
	}, [reset]);

	return (
		<div
			className={`w-[200px] h-12 min-w-fit px-5 py-3 flex justify-center items-center 
			bg-slate-600 font-semibold ${color ? color : "text-white"}`}
			ref={drop}>
			{board ? board : null}
		</div>
	);
};

export default DropZone;
