import React, { useState } from 'react';

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const calculateMortgage = (e) => {
    e.preventDefault();

    // Clear error message
    setErrorMessage('');

    // Parse input values as floats
    const amount = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const term = parseInt(loanTerm);

    // Validate inputs
    if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
      setErrorMessage('Please enter valid numeric values.');
      return;
    }

    // Calculate mortgage
    const monthlyInterestRate = rate / 100 / 12;
    const loanTermMonths = term * 12;

    const payment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
    const total = payment * loanTermMonths;
    const interest = total - amount;

    // Update state with calculated values
    setMonthlyPayment(payment.toFixed(2));
    setTotalPayment(total.toFixed(2));
    setTotalInterest(interest.toFixed(2));
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <form onSubmit={calculateMortgage}>
        <label htmlFor="loanAmount">Loan Amount (₹):</label>
        <input
          type="text"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        /><br />

        <label htmlFor="interestRate">Annual Interest Rate (%):</label>
        <input
          type="text"
          id="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        /><br />

        <label htmlFor="loanTerm">Loan Term (in years):</label>
        <input
          type="text"
          id="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          required
        /><br />

        <button type="submit">Calculate</button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}

      {monthlyPayment > 0 && (
        <div>
          <h2>Results</h2>
          <p>Monthly Mortgage Payment: ₹{monthlyPayment}</p>
          <p>Total Payment Amount: ₹{totalPayment}</p>
          <p>Total Interest Paid: ₹{totalInterest}</p>
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator;
