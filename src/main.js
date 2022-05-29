// Button Related Selectors
var mantraRadio = document.querySelector('#radio1');

var affimrationRadio = document.querySelector('#radio2');

var receiveMessageButton = document.querySelector('#message-button');


// Event Listeners



// Functions

  function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
  };
  function getRandomAffirmation {
    var affirmation = affirmations[getRandomIndex(affirmations)];
    // need to hide meditation image
    // and present random affrimation in the image window
  }

  function getRandomMantra {
    var mantra = mantras[getRandomIndex(mantras)];
    // need to hide meditation image
    // and present random mantra in the image window
  }
