"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImageChoiceGameInterface, ImageDataInterface } from "./ImagesData";
import { useAppDispatch, useAppSelector } from "../redux Toolkit/hooks";
import {
	checkScoreForImageChoice,
	resetSelectedSlide,
	setSelected,
} from "../redux Toolkit/slice/ImageChoiceSlice";

type Props = ImageChoiceGameInterface & { slideIndex: number };

const ImageChoiceSlide = ({
	row,
	column,
	question,
	imageCount,
	images,
	validationImageChoice,
	slideIndex,
}: Props) => {
	const dispatch = useAppDispatch();

	return (
		<div className="w-full h-full flex p-7 gap-3">
			<div className="flex flex-col w-1/3">
				{question}&nbsp;{validationImageChoice.score}
				<div className="w-full flex justify-center gap-5 items-center">
					<button
						onClick={() => {
							dispatch(
								checkScoreForImageChoice({ index: slideIndex })
							);
						}}
						className="bg-slate-500 text-white px-5 py-2 rounded-md">
						Submit
					</button>
					{/* reset button */}
					<button
						onClick={() => {
							dispatch(resetSelectedSlide({ index: slideIndex }));
						}}
						className="bg-slate-500 text-white px-5 py-2 rounded-md ml-5">
						Reset
					</button>
				</div>
			</div>
			<div className="w-2/3 flex items-center justify-center">
				<div
					className={`w-full gap-2`}
					style={{
						display: "grid",
						gridTemplateColumns: `repeat(${column}, 1fr)`,
						gridTemplateRows: `repeat(${row}, 1fr)`,
					}}>
					{images?.map((image: ImageDataInterface, idx: number) => {
						return (
							<Image
								onClick={() => {
									dispatch(
										setSelected({
											id: image.id,
											selected: !image.selected,
											slideIndex: slideIndex,
										})
									);
									console.log("clicked");
								}}
								className={`w-full h-full cursor-pointer hover:opacity-70 dashed transition-all shadow
							${
								image.selected
									? "border-4 border-dashed border-slate-500 shadow-xl opacity-70"
									: image.color
							} object-contain`}
								key={idx}
								src={image.url}
								alt="user"
								width={999}
								height={999}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ImageChoiceSlide;
