import { DroppableItemType } from "../dnd/data";

const Validator = (
	correctAnswers: { id: Number }[],
	userAnswers: DroppableItemType[]
) => {
	let score = 0;
	for (let i = 0; i < correctAnswers.length; i++) {
		if (correctAnswers[i].id === userAnswers[i].id) {
			score++;
		}
	}
	return score;
};

export default Validator;
