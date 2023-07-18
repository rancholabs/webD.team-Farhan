import React from "react";
import DropZone from "./DropZone";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import { RootState } from "@/app/redux Toolkit/store";

type Props = {};

const DropZonesContainer = (props: Props) => {
	const DropZones = useAppSelector(
		(state: RootState) => state.dndSlice.dropZones
	);

	return (
		<div
			className="w-full h-full relative"
			style={{
				backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/solocl-assignment.appspot.com/o/Screenshot%202023-07-06%20230147.png?alt=media&token=4ddd9945-ca53-4943-8354-e9d9734fb1cf)`,
				backgroundSize: "",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}>
			{DropZones.map((item) => {
				return (
					<div
						className={`absolute ${item.coordinates}`}
						key={item.id}>
						<DropZone
							id={item.id}
							expectedId={item.expectedId}
							droppedId={item.droppedId}
							coordinates={item.coordinates}
							color={item.color}
							droppableItem={item.droppableItem}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default DropZonesContainer;
