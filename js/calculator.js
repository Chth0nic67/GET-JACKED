// Function to calculate BMI
function calculateBMI() {
  console.log("Button clicked!"); // Add this line
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    alert("Please fill out the height and weight fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)
  let heightInMeters = height / 100;
  let BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  document.getElementById("result").innerHTML = BMI;
}

// Function to calculate calories
function calculateCalories() {
  console.log("Button clicked!"); // Add this line
  // Get user input
  var age = parseInt(document.getElementById("age").value);
  var gender = document.getElementById("gender").value;
  var weight = parseFloat(document.getElementById("weightcal").value);
  var height = parseFloat(document.getElementById("heightcal").value);
  var activity = document.getElementById("activity").value;

  // Calculate BMR based on Harris-Benedict equation
  var bmr =
    gender === "male"
      ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
      : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

  // Adjust BMR based on activity level
  var activityFactor = getActivityFactor(activity);

  // Calculate TDEE (Total Daily Energy Expenditure)
  var tdee = bmr * activityFactor;

  // Calculate calories for weight maintenance, gain, and loss
  var maintainCalories = tdee;
  var gainCalories = tdee + 500; // 500 calories surplus for gaining 1 kg/week
  var loseCalories = tdee - 500; // 500 calories deficit for losing 1 kg/week

  // Display results in the HTML
  document.getElementById("maintain").innerHTML = maintainCalories.toFixed(2);
  document.getElementById("gain").innerHTML = gainCalories.toFixed(2);
  document.getElementById("lose").innerHTML = loseCalories.toFixed(2);
}

// Function to get BMI status
function getBMIStatus(BMI) {
  if (BMI < 18.5) {
    return "Underweight";
  } else if (BMI < 25) {
    return "Healthy";
  } else if (BMI < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

function getActivityFactor(act) {
  if (act === "sedentary") {
    return 1.2;
  } else if (act === "light") {
    return 1.375;
  } else if (act === "moderate") {
    return 1.55;
  } else if (act === "very") {
    return 1.725;
  } else if (act === "extreme") {
    return 1.9;
  }
}

function setupAnimation(targetClass, animationClass) {
  const elementsToAnimate = document.querySelectorAll(`.${targetClass}`);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Defer the animation until scrolling is complete
        setTimeout(() => {
          entry.target.classList.remove("animate__hidden");
          entry.target.classList.add("animate__animated", animationClass);
        }, 50);
      } else {
        entry.target.classList.remove("animate__animated", animationClass);
        entry.target.classList.add("animate__hidden");
      }
    });
  });

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

// Apply different animations for different classes
setupAnimation('result', 'animate__fadeInDown');
setupAnimation('indicator-text', 'animate__fadeInUp');
setupAnimation('indicator-text2', 'animate__fadeInDown');
setupAnimation('calcbutton', 'animate__fadeInUp');

var scrollDownButton = document.getElementById("slideButton");
// Scroll to a specific section when the button is clicked
scrollDownButton.addEventListener("click", function () {
  var targetSection = document.getElementById("calorie"); // Replace with your target section ID
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
});

var backToTopButton = document.getElementById("slideButton2");

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Attach event listeners
document.getElementById("calculate").addEventListener("click", calculateBMI);
document
  .getElementById("calculateCalories")
  .addEventListener("click", calculateCalories);
