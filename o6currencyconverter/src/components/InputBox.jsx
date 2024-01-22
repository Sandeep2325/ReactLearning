import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm d-flex ${className}`}>
      <div class="row">
        <div class="col-6">
          <label htmlFor={id} className="text-black-40 mb-2 d-inline-block">
            {label}
          </label>
          <input
            id={id}
            type="number"
            className="form-control bg-transparent border-0 outline-none w-100 py-1.5"
            placeholder="Amount"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="col-md-6 d-flex justify-content-end text-end">
          <p
            className="text-black-40 mb-2 w-100"
            style={{ color: "rgba(0, 0, 0, 0.4)" }}
          >
            Currency Type
          </p>
          <select
            className="btn rounded-lg px-1 py-1 bg-light cursor-pointer border-0 outline-none"
            value={selectedCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
