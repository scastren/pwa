// Rekisteröi service worker PWA:ta varten
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}
