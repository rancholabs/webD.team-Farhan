import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const ResetButton = (props: Props) => {
	return (
		<button
			className="w-4/5 font-semibold border-2 border-slate-500 rounded text-slate-700 py-2"
			{...props}>
			Reset
		</button>
	);
};

export default ResetButton;
