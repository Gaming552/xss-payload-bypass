function escapeHTML(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function displayUserInput(userInput) {
  if (userInput.length > 100) {
    alert("User input is too long");
    return;
  }

  var safeHTML = escapeHTML(userInput);

  var cspHeader = "default-src 'self'; script-src 'self' 'unsafe-inline';";
  document.setAttribute("http-equiv", "Content-Security-Policy", cspHeader);

  document.write(safeHTML);
}
