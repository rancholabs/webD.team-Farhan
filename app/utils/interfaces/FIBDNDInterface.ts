export interface FIBDNDDroppableItemInterface {
	index: number;
	name: string;
}

export interface FIBDNDDropZoneInterface {
	dropZoneIndex: number;
	color: string | null;
}

export interface FIBDNDDataInterface {
	dropZones: FIBDNDDropZoneInterface[];
	droppableItems: FIBDNDDroppableItemInterface[];
	question: (string | null)[];
	answers: {
		dropZoneIndex: number;
		answer: string;
	}[];
	submittedAnswers: {
		dropZoneIndex: number;
		answer: string;
	}[];
	validationFIBDND: {
		score: number;
		correct: number;
		wrong: number;
	};
	reset: boolean;
	hasSubmitted: boolean;
	error: string;
}
