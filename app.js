var calculateBMI = function () {
  var weight = document.getElementById("weightField").value;
  var height = document.getElementById("heightField").value;

  var bmi = weight / (height * height);

  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "Your BMI is " + bmi;

  var categoryDiv = document.getElementById("category");


  if (bmi < 18.5) {
    categoryDiv.innerHTML  = "You are underweight plz eat more";
  } else if (bmi < 22.5) {
    categoryDiv.innerHTML  = "Very good plz don't get hit by a car";
  } else if (bmi < 27.5) {
    categoryDiv.innerHTML  = "Overweight";
  } else {
    categoryDiv.innerHTML  = "Obese";
  }
};
