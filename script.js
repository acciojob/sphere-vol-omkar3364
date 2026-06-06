function volume_sphere() {
    let radius = parseFloat(document.getElementById("radius").value);

    // Check if input is invalid or negative
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return false;
    }

    // Calculate volume of sphere
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display result rounded to 4 decimal places
    document.getElementById("volume").value = volume.toFixed(4);

    return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
