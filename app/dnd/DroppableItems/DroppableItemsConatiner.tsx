"use client";
import React, { useState } from "react";
import DroppableItem from "./DroppableItem";
import { DroppableItems } from "../data";

type Props = {};

const DroppableItemsConatiner = (props: Props) => {
	return (
		<div className="w-full flex items-center justify-between">
			{DroppableItems.map((item) => {
				return (
					<DroppableItem
						key={item.id}
						name={item.name}
						id={item.id}
					/>
				);
			})}
		</div>
	);
};

export default DroppableItemsConatiner;
