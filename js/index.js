function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    message.textContent = "Please enter an email address.";
    message.className = "invalid";
  } else if (regex.test(email)) {
    message.textContent = "Valid Email ✅";
    message.className = "valid";
  } else {
    message.textContent = "Invalid Email ❌";
    message.className = "invalid";
  }
}
