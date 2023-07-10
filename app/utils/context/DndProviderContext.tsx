"use client";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DroppableItemsConatiner from "../../dnd/DroppableItems/DroppableItemsConatiner";
import DropZonesContainer from "../../dnd/DropZones/DropZonesContainer";
import ValidationDiv from "../../dnd/ValidationDiv/ValidationDiv";

type Props = {};

const DndProviderContext = (props: Props) => {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className="h-[600px] w-[1200px] flex justify-between">
				<ValidationDiv />
				<div className="w-[1000px] h-full flex flex-col gap-7">
					<DroppableItemsConatiner />
					<DropZonesContainer />
				</div>
			</div>
		</DndProvider>
	);
};

export default DndProviderContext;
