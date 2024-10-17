// Elements
const charCount = document.getElementById('charCount');
const charCountValue = document.getElementById('charCountValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const passwordField = document.getElementById('password');
const copyPasswordButton = document.getElementById('copyPassword');
const generatePasswordButton = document.getElementById('generatePassword');

// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Update character count label
charCount.addEventListener('input', () => {
  charCountValue.textContent = charCount.value;
});

// Generate password function
function generatePassword() {
  const length = charCount.value;
  let charSet = '';
  let password = '';

  if (uppercaseCheckbox.checked) charSet += uppercaseChars;
  if (lowercaseCheckbox.checked) charSet += lowercaseChars;
  if (numbersCheckbox.checked) charSet += numberChars;
  if (symbolsCheckbox.checked) charSet += symbolChars;

  if (charSet.length === 0) return; // Prevent generation if no options are selected

  for (let i = 0; i < length; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }

  passwordField.value = password;
}

// Copy password to clipboard
copyPasswordButton.addEventListener('click', () => {
  passwordField.select();
  document.execCommand('copy');
});

// Regenerate password
generatePasswordButton.addEventListener('click', generatePassword);

// Initialize with first password
generatePassword();
