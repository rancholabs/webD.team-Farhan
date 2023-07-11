"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImageData } from "./ImagesData";

type Props = {};

const ImageChoice = (props: Props) => {
	const [images, setImages] = useState<ImageData[]>([]);

	useEffect(() => {
		// fetch images
		const fetchImages = async () => {
			const res = await fetch("https://picsum.photos/v2/list?limit=8");
			const data = await res.json();
			// convert data to ImageData type
			const imagesData: ImageData[] = data.map((image: any) => {
				return {
					id: image.id,
					alt: image.author,
					url: image.download_url,
					correct: true,
				};
			});
			setImages(imagesData);
			console.log("data", imagesData);
		};
		fetchImages();
	}, []);

	return (
		<div className="w-full h-full flex flex-col p-12 gap-5">
			<div>Which of these is a laptop ?</div>
			<div className="w-full h-full grid grid-cols-4 grid-rows-2 gap-5">
				{images?.map((image, idx) => {
					return (
						<Image
							className="w-full h-full"
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
	);
};

export default ImageChoice;
