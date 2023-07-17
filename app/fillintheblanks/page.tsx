import React from "react";
import FillInTheBlanksCarousel from "./FIBcomponents/FillInTheBlanksCarousel";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full overflow-hidden">
			<FillInTheBlanksCarousel />
		</div>
	);
};

export default page;
