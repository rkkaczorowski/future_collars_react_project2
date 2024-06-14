import "./Loader.css";

function Loader({ loading }) {
	return (
		<div id="loader" className={`loader ${loading ? "visible" : "hidden"}`}>
			{}
		</div>
	);
}

export default Loader;
