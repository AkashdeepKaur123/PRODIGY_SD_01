function convertTemp() {
    const value = parseFloat(document.getElementById("tempValue").value);
    const unit = document.getElementById("tempUnit").value;
    const resultOutput = document.getElementById("resultOutput");

    if (isNaN(value)) {
        resultOutput.textContent = "? Invalid input!";
        return;
    }

    let c, f, k;
    if (unit === "C") {
        c = value;
        f = (value * 9 / 5) + 32;
        k = value + 273.15;
    } else if (unit === "F") {
        c = (value - 32) * 5 / 9;
        f = value;
        k = c + 273.15;
    } else {
        c = value - 273.15;
        k = value;
        f = (c * 9 / 5) + 32;
    }

    resultOutput.innerHTML = `
    <div>??? Celsius: ${c.toFixed(2)}°C</div>
    <div>?? Fahrenheit: ${f.toFixed(2)}°F</div>
    <div>?? Kelvin: ${k.toFixed(2)}K</div>
  `;
}
