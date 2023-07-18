import React from "react";
import DndProviderContext from "../utils/context/DndProviderContext";
import DNDContainer from "./DNDContainer";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<DndProviderContext>
				<DNDContainer />
			</DndProviderContext>
		</div>
	);
};

export default page;
