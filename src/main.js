// Button Related Selectors
var mantraRadio = document.querySelector('#radio1');

var affimrationRadio = document.querySelector('#radio2');

var receiveMessageButton = document.querySelector('#message-button');

var meditationImage = document.getElementById('meditation-image');


// Event Listeners



// Functions

  function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
  };
  function showRandomAffirmation() {
    var affirmation = affirmations[getRandomIndex(affirmations)];
    // need to hide meditation image
    hideImage();
    // and present random affrimation in the image window
  }

  function showRandomMantra() {
    var mantra = mantras[getRandomIndex(mantras)];
    // need to hide meditation image
    hideImage();
    // and present random mantra in the image window
  }

  function hideImage() {
    meditationImage.classList.add(hide);
  }

  function restoreImage() {
    meditationImage.classList.remove(hide);
  }
