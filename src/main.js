// Button Related Selectors
var affirmationRadio = document.getElementById('radio1');

var mantraRadio = document.getElementById('radio2');

var receiveMessageButton = document.getElementById('message-button');

var meditationImage = document.getElementById('meditation-img');

var presentMessage = document.querySelector('.present-message')

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
    
    if (affirmationRadio.checked !== true
      && mantraRadio.checked !== true) {
        return;
  } else if (affirmationRadio.checked !== true) {
      hideImage();
      displayMessage(mantra)
  } else {
      hideImage();
      displayMessage(affirmation)
    }
  }

  function setAffirmRadio() {
    affirmationRadio.checked = true;
      return affirmationRadio.checked;
  }

  function setMantraRadio() {
      mantraRadio.checked = true;
        return mantraRadio.checked;
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
