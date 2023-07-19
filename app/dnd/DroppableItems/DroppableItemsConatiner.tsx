"use client";
import React, { useState } from "react";
import DroppableItem from "./DroppableItem";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import { getDNDGameData } from "@/app/redux Toolkit/slice/DndSlice";

type Props = {
	slideIndex: number;
};

const DroppableItemsConatiner = ({ slideIndex }: Props) => {
	const DNDGameData = useAppSelector(getDNDGameData);
	const droppableItems = DNDGameData[slideIndex].droppableItems;

	return (
		<div className="w-full flex items-center justify-between">
			{droppableItems.map((item) => {
				return (
					<DroppableItem
						key={item.index}
						name={item.name}
						index={item.index}
					/>
				);
			})}
		</div>
	);
};

export default DroppableItemsConatiner;
