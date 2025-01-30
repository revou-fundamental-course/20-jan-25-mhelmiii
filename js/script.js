document.getElementById('bmi-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  const weight = parseFloat(document.getElementById('weight').value);

  // Calculate BMI
  const bmi = (weight / (height * height)).toFixed(2);

  // Display result
  const resultDiv = document.getElementById('result');
  let category = '';

  if (bmi < 18.5) {
    category = 'Berat badan kurang';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Berat badan normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Kelebihan berat badan';
  } else {
    category = 'Obesitas';
  }

  resultDiv.innerHTML = `Berat badan kamu: ${bmi} <br><br> ${category}
  `;
});
