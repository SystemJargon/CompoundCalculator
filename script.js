document.getElementById('interestForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var balance = parseFloat(document.getElementById('balance').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);
  var years = parseInt(document.getElementById('years').value);
  // Added taxRate and inflationRate 22/7/2023 in v1.1
  var taxRate = parseFloat(document.getElementById('taxRate').value);
  var inflationRate = parseFloat(document.getElementById('inflationRate').value);

  // Calculate the final balance after tax and inflation
  var balanceAfterTax = balance - (balance * (taxRate / 100));
  var balanceAfterInflation = balanceAfterTax / (1 + (inflationRate / 100)) ** years;

  // Calculate the rate of return
  var rateOfReturn = balanceAfterInflation * (Math.pow((1 + (interestRate / 100)), years)) - balanceAfterInflation;

  document.getElementById('result').textContent = 'Rate of Return: $' + rateOfReturn.toFixed(2);
});
