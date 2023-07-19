export interface DroppableItemInterface {
	index: number;
	name: string;
}

export interface DropZoneInterface {
	index: number;
	coordinates: string;
	color: string | null;
}

export interface DNDGameDataInterface {
	dropZones: DropZoneInterface[];
	droppableItems: DroppableItemInterface[];
	Validation: {
		score: number;
		correct: number;
		wrong: number;
	};
	answers: {
		index: number;
		answer: string;
	}[];
	submittedAnswers: {
		index: number;
		answer: string;
	}[];
	imgUrl: string;
	reset: boolean;
	hasSubmitted: boolean;
	error: string;
}
