import React from "react";
import ImageChoiceSlide from "./ImageChoiceSlide";
import ImageChoiceCarousel from "./ImageChoiceCarousel";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full">
			<ImageChoiceCarousel />
		</div>
	);
};

export default page;
