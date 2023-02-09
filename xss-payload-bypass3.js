function sanitizeUserInput(str) {
  const dangerousCode = /<script>|<\/script>/g;
  if (dangerousCode.test(str)) {
    alert("This website is protected by CRYART XSS Payload Bypass lol");
    return "";
  }
  return str;
}

function displayUserInput(userInput) {
  const displayDiv = document.createElement("div");
  displayDiv.textContent = sanitizeUserInput(userInput);

  document.body.appendChild(displayDiv);
}
