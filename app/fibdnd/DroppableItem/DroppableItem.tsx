"use client";
import { FIBDNDDroppableItemInterface } from "@/app/utils/interfaces/FIBDNDInterface";
import React from "react";
import { useDrag } from "react-dnd";

type Props = FIBDNDDroppableItemInterface;

const DroppableItem = ({ name }: Props) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "card",
		item: { answer: name },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	return (
		<div
			className="px-3 py-2 flex justify-center items-center bg-slate-600 text-white cursor-pointer font-semibold
			text-sm"
			ref={drag}>
			{`${name.toUpperCase()}`}
		</div>
	);
};

export default DroppableItem;
