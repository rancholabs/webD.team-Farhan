"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImageDataInterface } from "./ImagesData";
import { useAppDispatch, useAppSelector } from "../redux Toolkit/hooks";
import {
	checkScoreForImageChoice,
	fetchImages,
	getImageChoiceScore,
	getImages,
	resetSelected,
	setSelected,
} from "../redux Toolkit/slice/ImageChoiceSlice";

type Props = {};

const ImageChoice = (props: Props) => {
	const dispatch = useAppDispatch();
	const newImages = useAppSelector(getImages);
	const score = useAppSelector(getImageChoiceScore);

	useEffect(() => {
		dispatch(fetchImages());
	}, []);

	return (
		<div className="w-full h-full flex flex-col p-12 gap-5">
			<div>Which of these is a laptop ? {score}</div>
			<div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-5">
				{newImages?.map((image, idx) => {
					return (
						<Image
							onClick={() => {
								dispatch(
									setSelected({
										id: image.id,
										selected: !image.selected,
									})
								);
								console.log("clicked");
							}}
							className={`w-full h-full cursor-pointer hover:opacity-70 dashed transition-all shadow
							${
								image.selected
									? "border-4 border-dashed border-slate-500 shadow-xl opacity-70"
									: "border-4 border-transparent"
							} ${image.color}`}
							key={idx}
							src={image.url}
							alt="user"
							width={999}
							height={999}
						/>
					);
				})}
			</div>
			<div className="w-full flex justify-center gap-5 items-center">
				<button
					onClick={() => {
						dispatch(checkScoreForImageChoice());
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md">
					Submit
				</button>
				{/* reset button */}
				<button
					onClick={() => {
						dispatch(resetSelected());
					}}
					className="bg-slate-500 text-white px-5 py-2 rounded-md ml-5">
					Reset
				</button>
			</div>
		</div>
	);
};

export default ImageChoice;
