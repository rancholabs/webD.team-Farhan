"use client";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import { RootState } from "@/app/redux Toolkit/store";
import React from "react";
import DroppableItem from "./DroppableItem";

type Props = {
	slideIndex: number;
};

const DroppableItemsContainer = ({ slideIndex }: Props) => {
	const DroppableItems = useAppSelector(
		(state: RootState) =>
			state.FIBDNDSlice.FIBDNDGameData[slideIndex].answers
	);
	return (
		<div className="w-full flex items-center justify-between">
			{DroppableItems.map((item, index) => {
				return (
					<DroppableItem
						key={index}
						name={item.answer}
						index={item.index}
					/>
				);
			})}
		</div>
	);
};

export default DroppableItemsContainer;
