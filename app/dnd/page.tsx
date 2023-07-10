import React from "react";
import DndProviderContext from "../utils/context/DndProviderContext";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<DndProviderContext />
		</div>
	);
};

export default page;
