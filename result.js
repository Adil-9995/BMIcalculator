function goBack() {
  window.location.href = "index.html";
}

window.onload = function () {
  const name = sessionStorage.getItem("name");
  const weight = parseFloat(sessionStorage.getItem("weight"));
  const height = parseFloat(sessionStorage.getItem("height"));

  if (!name || !weight || !height) {
    document.getElementById("output").innerHTML =
      "Missing data. Please go back and fill the form.";
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 24.9) category = "Normal weight";
  else if (bmi < 29.9) category = "Overweight";
  else category = "Obese";

  document.getElementById("output").innerHTML = `<p>Hello, <b>${name}</b>!</p>
     <p>Your BMI is <b>${bmi.toFixed(2)}</b></p>
     <p>Category: <b>${category}</b></p>`;

  // Save to localStorage
  const entry = {
    name,
    weight,
    height,
    bmi: bmi.toFixed(2),
    category,
    time: new Date().toLocaleString(),
  };
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  history.unshift(entry);
  localStorage.setItem("bmiHistory", JSON.stringify(history));

  // Display history
  displayHistory();
};

function displayHistory() {
  const history = JSON.parse(localStorage.getItem("bmiHistory")) || [];
  const list = document.getElementById("history-list");

  if (history.length === 0) {
    list.innerHTML = "<p>No previous records found.</p>";
    return;
  }

  list.innerHTML = history
    .map(
      (entry) => `
    <div class="record">
      <p><strong>${entry.name}</strong> (${entry.time})</p>
      <p>Weight: ${entry.weight} kg, Height: ${entry.height} cm</p>
      <p>BMI: <b>${entry.bmi}</b> - ${entry.category}</p>
    </div>
  `
    )
    .join("");
}
