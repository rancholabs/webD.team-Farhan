export interface DroppableItem {
	id: number;
	name: string;
}

export interface DropZone {
	id: number;
	expectedId: number;
	droppedId: number | null;
	coordinates: string;
	color: string | null;
}

export const DropZonesData: DropZone[] = [
	{
		id: 1,
		expectedId: 2,
		coordinates: "top-[10px] left-[110px]",
		droppedId: null,
		color: null,
	},
	{
		id: 2,
		expectedId: 3,
		coordinates: "top-[10px] left-[340px]",
		droppedId: null,
		color: null,
	},
	{
		id: 3,
		expectedId: 4,
		coordinates: "top-[70px] left-[790px]",
		droppedId: null,
		color: null,
	},
	{
		id: 4,
		expectedId: 1,
		coordinates: "top-[310px] left-[790px]",
		droppedId: null,
		color: null,
	},
	{
		id: 5,
		expectedId: 5,
		coordinates: "top-[400px] left-[790px]",
		droppedId: null,
		color: null,
	},
	{
		id: 6,
		expectedId: 6,
		coordinates: "top-[480px] left-[250px]",
		droppedId: null,
		color: null,
	},
	{
		id: 7,
		expectedId: 7,
		coordinates: "top-[480px] left-[480px]",
		droppedId: null,
		color: null,
	},
	{
		id: 8,
		expectedId: 8,
		coordinates: "top-[480px] left-[710px]",
		droppedId: null,
		color: null,
	},
];

export const DroppableItems: DroppableItem[] = [
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
