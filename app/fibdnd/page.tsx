import React from "react";
import FibDndCarousel from "./FibDndCarousel";
import DndProviderContext from "../utils/context/DndProviderContext";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full overflow-hidden">
			<DndProviderContext>
				<FibDndCarousel />
			</DndProviderContext>
		</div>
	);
};

export default page;
