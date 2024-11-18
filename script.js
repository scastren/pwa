if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Palvelutyöntekijä rekisteröity onnistuneesti.'))
    .catch(error => console.error('Palvelutyöntekijän rekisteröinti epäonnistui:', error));
}