function submitForm() {
  const name = document.getElementById("name").value.trim();
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!name || weight <= 0 || height <= 0) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Store values in sessionStorage
  sessionStorage.setItem("name", name);
  sessionStorage.setItem("weight", weight);
  sessionStorage.setItem("height", height);

  // Redirect to result page
  window.location.href = "result.html";
}
