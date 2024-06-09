import React, { useState } from "react";

function CurrencyForm({ onSubmit, loading }) {
	const [formData, setFormData] = useState({ currency: "EUR", amount: "" });

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
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
					value={formData.currency}
					onChange={handleChange}
					disabled={loading}
				>
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
					value={formData.amount}
					onChange={handleChange}
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
