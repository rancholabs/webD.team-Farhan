"use client";

import React, { useCallback } from "react";
import ReactFlow, {
	MiniMap,
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
} from "reactflow";

import "reactflow/dist/style.css";

type Props = {};

const initialNodes = [
	{
		id: "1",
		type: "input",
		data: { label: "Node 1" },
		position: { x: 0, y: 0 },
	},
	{ id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const Flow = (props: Props) => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(params: any) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}>
			<Controls />
			<MiniMap />
			<Background gap={12} size={1} />
		</ReactFlow>
	);
};

export default Flow;
