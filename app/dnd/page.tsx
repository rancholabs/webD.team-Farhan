import React from "react";
import DndProviderContext from "../utils/context/DndProviderContext";
import DndCarousel from "./DndCarousel";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<DndProviderContext>
				<DndCarousel />
			</DndProviderContext>
		</div>
	);
};

export default page;
