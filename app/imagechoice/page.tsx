import React from "react";
import ImageChoiceCarousel from "./ImageChoiceComponents/ImageChoiceCarousel";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full">
			<ImageChoiceCarousel />
		</div>
	);
};

export default page;
