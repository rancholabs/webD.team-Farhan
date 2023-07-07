import React from "react";
import Flow from "./Flow";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<Flow />
		</div>
	);
};

export default page;
