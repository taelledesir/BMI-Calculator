const submit = document.getElementById("submit");
const resultSection = document.getElementById("resultSection");
const resultText = document.getElementById("resultText");
const RecalculateBMI = document.getElementById("RecalculateBMI");
const BMIResultCategoryText = document.getElementById("BMIResultCategory");
const FemaleBtn = document.getElementById("female");
const MaleBtn = document.getElementById("male");
var heightcmBox = document.getElementById("heightcm");
var kilogramsBox = document.getElementById("kilograms");

const calculateMetric = document.getElementById("calculateMetric");
const calculateImperial = document.getElementById("calculateImperial");

BMIResultCategoryText.style.visibility = "hidden";


//error handling //make sure they are 
// if(heightFt >9 ){
// let errorMessage = 'one of the information you have enetr is wrong';
// } else if(heightInch >11 ){ //that is if they put feet and inches.
//   let errorMessage = 'one of the information you have enter is wrong';
//   } // else if(heightInch >107 ){ //that is if they put only inches.
//   //   let errorMessage = 'one of the information you have enter is wrong';
//   //   }
//   else if(pounds >2000 ){ //that is if they put feet and inches.
//     let errorMessage = 'one of the information you have enter is wrong';
//     }
// if(heightFt = '' || heightInch = '' || pounds =''){
//   let errorMessage = 'one of the information you have enter is wrong';
// }


calculateImperial.addEventListener("click", () => {
  heightFt.style.visibility = "visible";
  heightInch.style.visibility = "visible";
  pounds.style.visibility = "visible";

  heightcmBox.style.visibility = "hidden";
  kilogramsBox.style.visibility = "hidden";

  computeBmiMetric();
});
submit.addEventListener("click", () => {
  event.preventDefault();
  //if NULL , DO NOT CALCULATE
  // DISABLE Gender BTN
  FemaleBtn.disabled = true;
  MaleBtn.disabled = true;
  computeBMIImperial();
});

function computeBMIImperial(){
const heightFt = parseInt(document.getElementById("heightFt").value);
const heightInch = parseInt(document.getElementById("heightInch").value);
const pounds = parseFloat(document.getElementById("pounds").value);

const feetToInch = heightFt * 12;
const totalHeight = feetToInch + heightInch;
const bmi = pounds / Math.pow(totalHeight, 2) * 703;
const bmiResult = bmi;
resultText.textContent = `Your BMI is: ${bmiResult.toFixed(1)}`;
//function computeBmiPounds
  calculateBMICategory(bmiResult);
}

function calculateBMICategory(bmiResult) {
  if(heightFt !=='' & pounds!=='' ){

  BMIResultCategoryText.style.visibility = "visible";
  var category;
  if (bmiResult < 18.5) {
    category = Underweight;
    BMIResultCategoryText.textContent = `Your BMI Shows that You are ${category}`;
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    category = "Normal weight";
    BMIResultCategoryText.textContent = `Your BMI Shows that You are ${category}`;
  } else if (bmiResult >= 25 && bmiResult <= 29.9) {
    category = "Over weight";
    BMIResultCategoryText.textContent = `Your BMI Shows that You are ${category}`;
  } else if (bmiResult >= 30) {
    category = "Obese";
    BMIResultCategoryText.textContent = `Your BMI Shows that You are ${category}`;
  }
  }

}

RecalculateBMI.addEventListener("click", () => {
  //resultSection.style.visibility = "hidden";
  //resultSection.style.display = "none";
  var elements = document.getElementsByTagName("input");
  for (var ii = 0; ii < elements.length; ii++) {
    if (elements[ii].type == "number") {
      elements[ii].value = "";
    }
  }
  resultText.textContent = " ";
  BMIResultCategoryText.style.visibility = "hidden";
  MaleBtn.style.backgroundColor = '#caf0f8';
  FemaleBtn.style.backgroundColor = '#caf0f8';
  //ReEnable buttons
  FemaleBtn.disabled = false;
  MaleBtn.disabled = false;


});


//swich from metric & imperial

//when switch keep the color & underline under the other one that doesn't have the focus
// & bold the one that has the focus

//metric 
//calculate in kg & cm -- Metric System
// calculateMetric.addEventListener("click", () => {
//   event.preventDefault();
//   //hide imperial
//   heightFt.style.visibility = "hidden";
//   heightInch.style.visibility = "hidden";
//   pounds.style.visibility = "hidden";

//   heightcmBox.style.visibility = "visible";
//   heightcmBox.style.visibility = "visible";

//   computeBmiMetric();
// });

function computeBmiMetric() {
  const heightcm = parseInt(document.getElementById("heightcm").value);
  const kilograms = parseFloat(document.getElementById("kilograms").value);
  // Formula: weight (kg) / [height (m)]2
  let heightToMeters = heightcm * 0.01;
  let bmi = kilograms / Math.pow(heightToMeters, 2);
  const bmiResult = bmi;
  resultText.textContent = `Your BMI is: ${bmiResult.toFixed(1)}`;
  calculateBMICategory(bmiResult);
}


FemaleBtn.addEventListener("click", () => {
  FemaleBtn.style.backgroundColor = '#0496ff';
  MaleBtn.style.backgroundColor = '#caf0f8';
});

MaleBtn.addEventListener("click", () => {
  FemaleBtn.style.backgroundColor = '#caf0f8';
  MaleBtn.style.backgroundColor = '#0496ff';
});


//highlight BMI Categorie && System Options