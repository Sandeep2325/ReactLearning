import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import useCurrencyInfo from "./hooks/useCurrencyinfo";
import { InputBox } from "./components/index.js";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="container-fluid custom-container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1791583/pexels-photo-1791583.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="w-100">
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-12 col-md-8 col-lg-6 border border-gray-60 rounded-lg p-5 bg-blur"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <form
              // onSubmit={() => {
              //   e.preventDefault();
              //   convert();
              // }}
              >
                <div className="w-100 mb-1">
                  <InputBox
                    label="from"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    onAmountChange={(amount) => setAmount(amount)}
                    selectedCurrency={from}
                  />
                </div>
                <div
                  className="position-relative w-100"
                  style={{ height: "0.5rem" }}
                >
                  <button
                    className="position-absolute start-50 translate-middle border-2 border-light rounded-md bg-primary text-white px-2 py-0.5"
                    style={{ transform: "translate(-50%, -50%)" }}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default form submission behavior
                      swap();
                    }}
                  >
                    Swap
                  </button>
                </div>
                <div className="w-100 mb-1">
                  <InputBox
                    label="to"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    onAmountChange={(amount) => setAmount(amount)}
                    selectedCurrency={to}
                    amountDisabled={true}
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    convert();
                  }}
                  className="w-100 bg-primary text-white px-4 py-3 rounded-lg"
                >
                  Convert
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
