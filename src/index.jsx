import React from "react";
import ReactDOM from "react-dom/client";

import "./css/style.css";
import Main from "./Main";

import { ChakraProvider } from "@chakra-ui/react";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* const showBrowserWidth = () => {
	const width = window.innerWidth;
	// const height = window.innerHeight;
	const h1 = document.querySelector(".screen");
	h1.innerText = `Width: ${width}px`;
	h1.style.position = `absolute`;
};

window.onload = showBrowserWidth;
window.onresize = showBrowserWidth; */

root.render(
	<React.StrictMode>
		<ChakraProvider>
			{
				<div
					id="global-container"
					className="min-h-screen bg-black p-5 space-y-5 min-w-full flex justify-center"
				>
					<div id="content-container" className="max-w-7xl space-y-10">
						<Main />
					</div>
				</div>
			}
		</ChakraProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
