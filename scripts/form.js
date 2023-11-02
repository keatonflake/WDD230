const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const emailInput = document.getElementById('email');
const ratingInput = document.getElementById('pageRating');
const ratingDisplay = document.getElementById('ratingDisplay');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (event) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = 'Passwords do not match. Please try again.';
    usernameInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    event.preventDefault();
  }
});

ratingInput.addEventListener('input', function () {
  ratingDisplay.textContent = ratingInput.value;
});
