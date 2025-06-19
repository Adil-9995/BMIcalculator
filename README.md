# 💪 BMI Calculator Web App

A clean, user-friendly Body Mass Index (BMI) calculator built using **HTML**, **CSS**, and **Vanilla JavaScript**. It helps users calculate their BMI based on weight and height, categorize the result (Underweight, Normal, Overweight, Obese), and stores their previous BMI entries locally.

### 🔗 Live Demo  
🌐 [Try it here](https://bm-icalculator-22luj2wi1-adil-hassan-a-ks-projects.vercel.app)

---

## 📌 Features

- 🔹 **User Input Form**  
  Enter name, weight (in kg), and height (in cm) to compute BMI.

- 🔹 **BMI Calculation**  
  BMI is calculated using the standard formula:



- 🔹 **BMI Category Detection**  
Automatically classifies result into:
- Underweight
- Normal weight
- Overweight
- Obese

- 🔹 **Session-Based Data Transfer**  
Uses `sessionStorage` to carry input data securely to the result page.

- 🔹 **Local BMI History Tracker**  
Stores previous BMI entries in `localStorage` and displays them with timestamp, name, and category.

- 🔹 **Navigation**  
Includes a "Go Back" button for recalculating BMI.

---

## 🧠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Web Storage API: `sessionStorage` and `localStorage`
- [Vercel](https://vercel.com/) – for deployment

---

## 📁 Folder Structure


---

## 🚀 Getting Started

You can run the project locally by following these steps:

### 🔧 Run Locally

```bash
git clone https://github.com/<your-username>/bmi-calculator.git
cd bmi-calculator
# Open index.html in any browser (Chrome, Firefox, etc.)


🛠️ Code Overview
form.js
Validates input values

Saves them to sessionStorage

Redirects to result.html

result.js
Retrieves values from sessionStorage

Calculates BMI and determines category

Stores the result in localStorage

Renders a scrollable list of past BMI results

🔮 Future Enhancements
📱 Make fully responsive for mobile view

🌗 Add dark/light mode toggle

📊 Display graphical BMI history (charts)

📤 Export history to CSV

🗑 Add "Clear History" button
