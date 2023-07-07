"use client";
import React, { useState } from "react";
import { DropZoneType, DroppableItemType, DroppableItems } from "../data";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import { setAnswer } from "@/app/redux Toolkit/slice/AnswerCollectorSlice";

interface Props extends DropZoneType {}

const DropZone = ({ expectedId, answer, id, coordinates }: Props) => {
	// const answersSet = useAppSelector(
	// 	(state: RootState) => state.answerCollector.answers
	// );
	const dispatch = useAppDispatch();
	const [board, setBoard] = useState<DroppableItemType>();
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: (item: any) => {
			addItemToBoard({ id: item.id });
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	const addItemToBoard = (droppedItemId: any) => {
		const droppedItem = DroppableItems.find(
			(item) => item.id === droppedItemId.id
		);
		setBoard(droppedItem);
		dispatch(
			setAnswer({ index: id - 1, item: droppedItem as DroppableItemType })
		);
	};

	return (
		<div
			className="w-[200px] h-12 min-w-fit px-5 py-3 flex justify-center items-center 
			bg-slate-600 text-white font-semibold"
			ref={drop}>
			{board?.name}
		</div>
	);
};

export default DropZone;
