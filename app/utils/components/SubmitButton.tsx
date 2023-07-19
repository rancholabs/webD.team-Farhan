import React, { ButtonHTMLAttributes } from "react";

type Props = {
	hasSubmitted: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton = ({ hasSubmitted, ...restProps }: Props) => {
	return (
		<button
			className="mt-5 w-4/5 font-semibold border-2 border-slate-500 rounded text-slate-700 py-2
					disbaled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
			disabled={hasSubmitted}
			{...restProps}>
			Submit
		</button>
	);
};

export default SubmitButton;
