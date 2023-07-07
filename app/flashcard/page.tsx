import React from "react";
import FlashCardsList from "./FlashCardsList";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<FlashCardsList />
		</div>
	);
};

export default page;
