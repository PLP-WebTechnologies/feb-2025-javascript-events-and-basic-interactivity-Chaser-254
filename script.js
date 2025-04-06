// Event listener for form submission
document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const messageDiv = document.getElementById("message");
  
    if (!name || !email || password.length < 6) {
      messageDiv.style.color = "red";
      messageDiv.textContent = "Please fill all fields correctly!";
    } else {
      messageDiv.style.color = "green";
      messageDiv.textContent = `Welcome, ${name}! Your form was submitted successfully.`;
    }
  });
  
  // Event listener for textarea character counter
  const bio = document.getElementById("bio");
  const charCount = document.getElementById("char-count");
  
  bio.addEventListener("input", () => {
    const remaining = 100 - bio.value.length;
    charCount.textContent = `Characters left: ${remaining}`;
  });
  
