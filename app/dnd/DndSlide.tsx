import React from "react";
import ValidationDiv from "./ValidationDiv/ValidationDiv";
import DroppableItemsConatiner from "./DroppableItems/DroppableItemsConatiner";
import DropZonesContainer from "./DropZones/DropZonesContainer";

type Props = {
	slideIndex: number;
};

const DndSlide = ({ slideIndex }: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="h-[600px] w-[1200px] flex justify-between">
				<ValidationDiv slideIndex={slideIndex} />
				<div className="w-[1000px] h-full flex flex-col gap-7">
					<DroppableItemsConatiner slideIndex={slideIndex} />
					<DropZonesContainer slideIndex={slideIndex} />
				</div>
			</div>
		</div>
	);
};

export default DndSlide;
