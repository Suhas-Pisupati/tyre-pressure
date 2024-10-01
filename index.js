function searchTyrePressure() {
  const vehicleType = document.getElementById("vehicleType").value;
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const currentPressure = document.getElementById("currentPressure").value;
  let result = "";

  fetch("tyrePressureData.json")
    .then((response) => response.json())
    .then((data) => {
      const vehicleData = data[vehicleType][make][model];
      if (vehicleData) {
        result += `Recommended Pressure: ${vehicleData.pressure} PSI<br>`;
        if (vehicleData.pressure < currentPressure) {
          result += `${vehicleData.high}<br>`;
          result += `<strong> Reduced Traction: </strong> Over-inflated tires cause less surface area to contact the road, reducing traction, especially in wet conditions<br>`;
          result += `<strong>Increased Risk of Tire Blowouts: </strong> Over-inflation increases the internal pressure beyond the manufacturer’s recommendation, making the tire more susceptible to blowouts.<br>`;
        } else {
          result += `${vehicleData.low}<br>`;
          result += `<strong>Reduced Fuel Efficiency: </strong> An under-inflated tire creates more rolling resistance, causing the vehicle to consume more fuel to move <br >`;
          result += `<strong>Excessive Tire Wear:</strong> The tire's sidewalls flex more, and the edges of the tire wear out faster than the center, leading to uneven tire wear<br>`;
        }
        document.getElementById("result").innerHTML = result;
      } else {
        document.getElementById("result").innerHTML = "Vehicle not found!";
      }
    });
}
function calculatePressure() {
  // Get the value of the load input
  var load = document.getElementById("load").value;

  // Check if the load is valid
  if (load === "" || isNaN(load) || load <= 0) {
    document.getElementById("calcResult").innerHTML =
      "Please enter a valid load in kilograms.";
    return;
  }

  // Calculate tire pressure (this is a placeholder formula)
  var pressure = load * 0.02; // Example: 2% of the load

  // Display the calculated pressure
  document.getElementById("calcResult").innerHTML =
    "Recommended Tyre Pressure: " + pressure.toFixed(2) + " PSI";
}
window.addEventListener("resize", function () {
  if (window.innerHeight < 600) {
    // Adjust the height as needed for your case
    document.querySelector(".mobilenav").style.display = "none"; // Hide the icons when keyboard is open
  } else {
    document.querySelector(".mobilenav").style.display = "flex"; // Show the icons when keyboard is hidden
  }
});
function handleLogin(event) {
  event.preventDefault(); // Prevent form submission from refreshing the page
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic login validation (in practice, you'd validate this server-side)
  if (email === "tyre@gmail.com" && password === "tyre") {
    document.getElementById('loginResult').textContent = "Login successful!";
    document.getElementById('header').classList.toggle('hidden');
    document.getElementById('main').classList.toggle('hidden');
    document.getElementById('login').classList.toggle('hidden');

    
  } else {
    document.getElementById('loginResult').textContent = "Invalid email or password.";
  }
}
function handleLogout(){
  document.getElementById('loginResult').textContent = null;
  document.getElementById('header').classList.toggle('hidden');
  document.getElementById('main').classList.toggle('hidden');
  document.getElementById('login').classList.toggle('hidden');
  document.getElementById('email').value = null;
  document.getElementById('password').value = null;
}

