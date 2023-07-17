import React from "react";
import { data } from "../FlashCardData";
import FlashCard from "./FlashCard";

type Props = {};

const FlashCardsList = (props: Props) => {
	return (
		<div className="grid grid-cols-2 gap-5">
			{data.map((flashcard) => {
				return (
					<FlashCard
						key={flashcard.id}
						id={flashcard.id}
						question={flashcard.question}
						answer={flashcard.answer}
					/>
				);
			})}
		</div>
	);
};

export default FlashCardsList;
