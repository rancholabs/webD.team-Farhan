export interface DroppableItemType {
	id: number;
	name: string;
}

export interface DropZoneType {
	id: number;
	expectedId: number;
	coordinates: string;
	answer: string;
}

export const DroppableItems = [
	{
		id: 1,
		name: "Microcontroller",
	},
	{
		id: 2,
		name: "USB Port",
	},
	{
		id: 3,
		name: "USB to serial chip",
	},
	{
		id: 4,
		name: "Digital Pins",
	},
	{
		id: 5,
		name: "Analog Pins",
	},
	{
		id: 6,
		name: "5V/3.3V",
	},
	{
		id: 7,
		name: "GND",
	},
	{
		id: 8,
		name: "VIN",
	},
];

export const DropZones = [
	{
		id: 1,
		expectedId: 2,
		coordinates: "top-[10px] left-[110px]",
		answer: "USB Port",
	},
	{
		id: 2,
		expectedId: 3,
		coordinates: "top-[10px] left-[340px]",
		answer: "USB to serial chip",
	},
	{
		id: 3,
		expectedId: 4,
		coordinates: "top-[70px] left-[790px]",
		answer: "Digital Pins",
	},
	{
		id: 4,
		expectedId: 1,
		coordinates: "top-[310px] left-[790px]",
		answer: "Microcontroller",
	},
	{
		id: 5,
		expectedId: 5,
		coordinates: "top-[400px] left-[790px]",
		answer: "Analog Pins",
	},
	{
		id: 6,
		expectedId: 6,
		coordinates: "top-[480px] left-[250px]",
		answer: "5V/3.3V",
	},
	{
		id: 7,
		expectedId: 7,
		coordinates: "top-[480px] left-[480px]",
		answer: "GND",
	},
	{
		id: 8,
		expectedId: 8,
		coordinates: "top-[480px] left-[710px]",
		answer: "VIN",
	},
];

export const correctAnswers = [
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
	{
		id: 1,
	},
	{
		id: 5,
	},
	{
		id: 6,
	},
	{
		id: 7,
	},
	{
		id: 8,
	},
];
