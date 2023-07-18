"use client";
import React from "react";
import ValidationDiv from "./ValidationDiv/ValidationDiv";
import DroppableItemsConatiner from "./DroppableItems/DroppableItemsConatiner";
import DropZonesContainer from "./DropZones/DropZonesContainer";

type Props = {};

const DNDContainer = (props: Props) => {
	return (
		<div className="h-[600px] w-[1200px] flex justify-between">
			<ValidationDiv />
			<div className="w-[1000px] h-full flex flex-col gap-7">
				<DroppableItemsConatiner />
				<DropZonesContainer />
			</div>
		</div>
	);
};

export default DNDContainer;
