// Button Related Selectors
var affirmationRadio = document.getElementById('radio1');

var mantraRadio = document.getElementById('radio2');

var receiveMessageButton = document.getElementById('message-button');

var meditationImage = document.getElementById('meditation-img');

var presentMessage = document.querySelector('.present-message')

// Button Booleans
var isAffirmRadio = false;

var ismantraRadio = false;



// Event Listeners
affirmationRadio.addEventListener('click', setAffirmRadio)
mantraRadio.addEventListener('click', setMantraRadio)
receiveMessageButton.addEventListener('click', showRandomMessage)


// Functions
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };

  function showRandomMessage() {
    var affirmation = affirmations[getRandomIndex(affirmations)];
    var mantra = mantras[getRandomIndex(mantras)];
    hideImage();
    // buttonCheck();
    if (isAffirmRadio !== true) {
      displayMessage(mantra)
  } else {
      displayMessage(affirmation)
    }
  }

  function setAffirmRadio() {
    isAffirmRadio = true;
      return isAffirmRadio;
  }

  function setMantraRadio() {
    isMantraRadio = true;
      return isMantraRadio;
  }

  function hideImage() {
    meditationImage.classList.add('hide');
  }

  function restoreImage() {
    meditationImage.classList.remove('hide');
  }

  function displayMessage(message) {
    presentMessage.innerHTML = "";
    presentMessage.innerHTML +=
      `
      <h4 class="message font-quicksand">${message}</h4>
      `
  }
