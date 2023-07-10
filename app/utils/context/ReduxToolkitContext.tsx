"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux Toolkit/store";

type Props = {
	children: React.ReactNode;
};

const ReduxToolkitContext = ({ children }: Props) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxToolkitContext;
