"use client";
import React from "react";
import Quiz from "react-quiz-component";
import { quiz } from "./quiz";

type Props = {};

const page = (props: Props) => {
	return (
		<div>
			<Quiz quiz={quiz} shuffle={true} />
		</div>
	);
};

export default page;
