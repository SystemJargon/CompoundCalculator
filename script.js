document.getElementById('interestForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  var balance = parseFloat(document.getElementById('balance').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);
  var years = 5; // You can change the number of years to calculate here
  var rateOfReturn = balance * (Math.pow((1 + (interestRate / 100)), years)) - balance;

  document.getElementById('result').textContent = 'Rate of Return: $' + rateOfReturn.toFixed(2);
});