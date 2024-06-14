import "./CurrencyForm.css";

function CurrencyForm({ onSubmit, loading }) {
	const handleSubmit = (event) => {
		event.preventDefault();

		const currency = event.target.currency.value;
		const amount = parseFloat(event.target.amount.value);

		if (!currency) {
			alert("Proszę wybrać walutę.");
			return;
		}

		if (isNaN(amount) || amount <= 0) {
			alert("Proszę podać poprawną kwotę większą od zera.");
			return;
		}

		const formData = { currency, amount };
		onSubmit(formData);
	};

	return (
		<form className="currency-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="currency" className="label-currency">
					Wybierz walutę:
				</label>
				<select
					id="currency"
					name="currency"
					className="select-currency"
					disabled={loading}
				>
					<option value="">Wybierz...</option>
					<option value="EUR">Euro</option>
					<option value="USD">Dolary amerykańskie</option>
					<option value="CHF">Franki szwajcarskie</option>
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="amount" className="label-currency">
					Podaj kwotę:
				</label>
				<input
					type="number"
					id="amount"
					name="amount"
					min="0.01"
					step="0.01"
					className="input-amount"
					disabled={loading}
				/>
			</div>
			<button type="submit" className="submit-button" disabled={loading}>
				Przelicz
			</button>
		</form>
	);
}

export default CurrencyForm;
