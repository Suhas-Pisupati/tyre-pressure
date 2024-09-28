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
          result +=
            `<strong> Reduced Traction: </strong> Over-inflated tires cause less surface area to contact the road, reducing traction, especially in wet conditions<br>`;
          result +=
            `<strong>Increased Risk of Tire Blowouts: </strong> Over-inflation increases the internal pressure beyond the manufacturer’s recommendation, making the tire more susceptible to blowouts.<br>`;
        } else {
          result += `${vehicleData.low}<br>`;
          result +=
            `<strong>Reduced Fuel Efficiency: </strong> An under-inflated tire creates more rolling resistance, causing the vehicle to consume more fuel to move <br >`;
          result +=
            `<strong>Excessive Tire Wear:</strong> The tire's sidewalls flex more, and the edges of the tire wear out faster than the center, leading to uneven tire wear<br>`;
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
