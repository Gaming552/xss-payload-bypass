function sanitizeUserInput(str) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return str.replace(/[&<>"']/g, function(m) {
    return map[m];
  });
}

function displayUserInput(userInput) {
  const displayDiv = document.createElement("div");
  displayDiv.textContent = sanitizeUserInput(userInput);

  document.body.appendChild(displayDiv);
}
