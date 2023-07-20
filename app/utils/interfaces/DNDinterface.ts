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
		dropZoneIndex: number;
		answer: string;
	}[];
	submittedAnswers: {
		dropZoneIndex: number;
		answer: string;
	}[];
	imgUrl: string;
	reset: boolean;
	hasSubmitted: boolean;
	error: string;
}
