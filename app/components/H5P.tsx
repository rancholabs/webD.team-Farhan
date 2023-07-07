import Head from "next/head";
import React from "react";

type Props = {};

const H5P = (props: Props) => {
	return (
		<>
			<Head>
				<script
					async
					src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js"></script>
			</Head>
			<div className="w-full h-full flex justify-center items-center bg-black">
				<iframe
					src="https://h5p.org/h5p/embed/1409266"
					width="1091"
					height="556"
					allowFullScreen
					allow="geolocation *; microphone *; camera *; midi *; encrypted-media *"
					title="Boomer Quiz"></iframe>
			</div>
		</>
	);
};

export default H5P;
