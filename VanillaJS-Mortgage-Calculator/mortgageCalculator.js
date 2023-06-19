document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
  
    // Validate inputs
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
      displayError('Please enter valid numeric values.');
      return;
    }
  
    // Perform calculations
    const monthlyInterestRate = interestRate / 100 / 12;
    const loanTermMonths = loanTerm * 12;
  
    const monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterestRate, loanTermMonths);
    const totalPayment = monthlyPayment * loanTermMonths;
    const totalInterest = totalPayment - loanAmount;
  
    // Display results
    displayResults(monthlyPayment, totalPayment, totalInterest);
  });
  
  function calculateMonthlyPayment(loanAmount, monthlyInterestRate, loanTermMonths) {
    return (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
  }
  
  function displayResults(monthlyPayment, totalPayment, totalInterest) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
      <h2>Results</h2>
      <p>Monthly Mortgage Payment: ₹${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment Amount: ₹${totalPayment.toFixed(2)}</p>
      <p>Total Interest Paid: ₹${totalInterest.toFixed(2)}</p>
    `;
  }
  
  function displayError(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p class="error">${message}</p>`;
  }
  