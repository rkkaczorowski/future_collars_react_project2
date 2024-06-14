import "./Result.css";

function Result({ result, error }) {
	return (
		<div id="result" className="result">
			{error && <p>{error}</p>}
			{result && <p>{result}</p>}
		</div>
	);
}

export default Result;
