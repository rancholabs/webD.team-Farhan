"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const ImageChoice = (props: Props) => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		async () => {
			// const response = await fetch("https://api.pexels.com/v1/");
			// const users = await response.json();
			setUsers(users);
		};
	});
	return (
		<div className="w-full h-full flex flex-col p-12 gap-5">
			<div>Which of these is a human being ?</div>
			<div>
				{users.map((user, idx) => {
					return <div key={idx}>use</div>;
				})}
			</div>
		</div>
	);
};

export default ImageChoice;
