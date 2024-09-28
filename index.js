
  function searchTyrePressure() {
    const vehicleType = document.getElementById('vehicleType').value;
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;

    fetch('tyrePressureData.json')
        .then(response => response.json())
        .then(data => {
            const vehicleData = data[vehicleType][make][model];
            if (vehicleData) {
                document.getElementById('result').innerHTML = `Recommended Pressure: ${vehicleData.pressure} PSI<br>${vehicleData.low}<br>${vehicleData.high}`;
            } else {
                document.getElementById('result').innerHTML = 'Vehicle not found!';
            }
        });
}
function calculatePressure () {
  // Get the value of the load input
  var load = document.getElementById('load').value;

  // Check if the load is valid
  if (load === '' || isNaN(load) || load <= 0) {
      document.getElementById('calcResult').innerHTML = "Please enter a valid load in kilograms.";
      return;
  }

  // Calculate tire pressure (this is a placeholder formula)
  var pressure = load * 0.02; // Example: 2% of the load

  // Display the calculated pressure
  document.getElementById('calcResult').innerHTML = "Recommended Tyre Pressure: " + pressure.toFixed(2) + " PSI";
}
  