"use client";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import { RootState } from "@/app/redux Toolkit/store";
import React from "react";
import DroppableItem from "./DroppableItem";
import { getFIBDNDGameData } from "@/app/redux Toolkit/slice/FIBDndSlice";

type Props = {
	slideIndex: number;
};

const DroppableItemsContainer = ({ slideIndex }: Props) => {
	const FIBDNDGamedata = useAppSelector(getFIBDNDGameData);
	const DroppableItems = FIBDNDGamedata[slideIndex].droppableItems;
	return (
		<div className="w-full flex items-center justify-between">
			{DroppableItems.map((item, index) => {
				return (
					<DroppableItem
						key={index}
						name={item.name}
						index={item.index}
					/>
				);
			})}
		</div>
	);
};

export default DroppableItemsContainer;
