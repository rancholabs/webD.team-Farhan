"use client";
import React from "react";
import DropZone from "./DropZone";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import { getDNDGameData } from "@/app/redux Toolkit/slice/DndSlice";

type Props = {
	slideIndex: number;
};

const DropZonesContainer = ({ slideIndex }: Props) => {
	const DNDGameData = useAppSelector(getDNDGameData);
	const imageUrl = DNDGameData[slideIndex].imgUrl;
	const DropZones = DNDGameData[slideIndex].dropZones;

	return (
		<div
			className="w-full h-full relative"
			style={{
				backgroundImage: `url(${imageUrl})`,
				backgroundSize: "",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}>
			{DropZones.map((item) => {
				return (
					<div
						className={`absolute ${item.coordinates}`}
						key={item.index}>
						<DropZone
							index={item.index}
							coordinates={item.coordinates}
							color={item.color}
							slideIndex={slideIndex}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default DropZonesContainer;
