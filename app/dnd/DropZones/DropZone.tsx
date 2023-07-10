"use client";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import { DropZone, DroppableItem, DroppableItems } from "../Reduxdata";
import { setDropZones } from "@/app/redux Toolkit/slice/DndSlice";

type Props = DropZone;

const DropZone = ({ id, color, droppableItem }: Props) => {
	const dispatch = useAppDispatch();
	const [board, setBoard] = useState<DroppableItem>();
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: (item: any) => {
			addItemToBoard(item.id);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	const addItemToBoard = (droppedItemId: any) => {
		const droppedItem = DroppableItems.find(
			(item) => item.id === droppedItemId
		);
		dispatch(
			setDropZones({
				index: id,
				droppedId: droppedItemId,
				droppedItem: droppedItem!,
			})
		);
	};

	return (
		<div
			className={`w-[200px] h-12 min-w-fit px-5 py-3 flex justify-center items-center 
			bg-slate-600 font-semibold ${color ? color : "text-white"}`}
			ref={drop}>
			{droppableItem?.name}
		</div>
	);
};

export default DropZone;
