import React from "react";

function Loader({ loading }) {
	return (
		<div
			id="loader"
			className="loader"
			style={{ display: loading ? "block" : "none" }}
		></div>
	);
}

export default Loader;
