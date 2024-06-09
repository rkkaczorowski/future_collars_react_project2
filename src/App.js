import React, { useState } from "react";
import CurrencyForm from "./components/CurrencyForm";
import Result from "./components/Result";
import Loader from "./components/Loader";

function App() {
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState("");
	const [error, setError] = useState("");

	const handleResult = (data) => {
		setResult(data);
		setLoading(false);
	};

	const handleSubmit = async (formData) => {
		setLoading(true);
		setError(""); // Reset błędu przy nowym zapytaniu
		try {
			const response = await fetch(
				`https://api.nbp.pl/api/exchangerates/rates/a/${formData.currency}/?format=json`
			);
			const data = await response.json();
			if (!data.rates || !data.rates.length) {
				throw new Error("Nie udało się pobrać kursu waluty");
			}
			const exchangeRate = data.rates[0].mid;
			const result = formData.amount * exchangeRate;
			handleResult(
				`${formData.amount} ${formData.currency} to ${result.toFixed(2)} PLN`
			);
		} catch (error) {
			console.error("Wystąpił błąd:", error);
			setError("Wystąpił błąd. Spróbuj ponownie później.");
			setLoading(false);
		}
	};

	return (
		<div className="container">
			<div className="logo"></div>
			<h1 className="title">Przelicznik Walut</h1>
			<CurrencyForm onSubmit={handleSubmit} loading={loading} />
			<Result result={result} error={error} />
			<Loader loading={loading} />
		</div>
	);
}

export default App;
