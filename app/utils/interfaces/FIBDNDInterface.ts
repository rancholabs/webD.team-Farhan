export interface DroppableItemInterface {
	index: number;
	name: string;
}
export interface FIBDNDDataInterface {
	id: number;
	question: (string | null)[];
	answers: {
		index: number;
		answer: string;
	}[];
	submittedAnswers: {
		index: number;
		answer: string;
	}[];
	validationFIB: {
		score: number;
		correct: number;
		wrong: number;
	};
}
