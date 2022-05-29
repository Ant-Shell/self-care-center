// Button Related Selectors
var affirmationRadio = document.getElementById('radio1');

var mantraRadio = document.getElementById('radio2');

var receiveMessageButton = document.getElementById('message-button');

var meditationImage = document.getElementById('meditation-img');

// var imageBox = document.getElementById('image-box')

var presentMessage = document.querySelector('.present-message')

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
    // setAffirmRadio();
    if (isAffirmRadio !== true) {
      // displayMessage(mantra)
      console.log(mantra)
      } else {
      // displayMessage(affirmation)
      console.log(affirmation)
      }
    }

    function setAffirmRadio() {
      isAffirmRadio = true;
      console.log(`isAffirmRadio Set to ${isAffirmRadio}`)
      return isAffirmRadio;
    }

    function setMantraRadio() {
      isMantraRadio = true;
      console.log(`isMantraRadio Set to ${isMantraRadio}`)
      return isMantraRadio;
    }

  // function showRandomAffirmation() {
  //   var affirmation = affirmations[getRandomIndex(affirmations)];
  //   // need to hide meditation image
  //   hideImage();
  //   // and present random affrimation in the image window
  //   displayMessage(affirmation)
  // }
  //
  // function showRandomMantra() {
  //   var mantra = mantras[getRandomIndex(mantras)];
  //   // need to hide meditation image
  //   hideImage();
  //   // and present random mantra in the image window
  //   displayMessage(message)
  //
  // }

  function hideImage() {
    meditationImage.classList.add('hide');
  }

  function restoreImage() {
    meditationImage.classList.remove('hide');
  }

  function displayMessage(message) {
    presentMessage.innerHTML = "";
    for (var i =0; message.length; i++) {
      presentMessage.innerHTML +=
      `<div>
      <h2 class="message">${message[i]}</h2>
      </div>
      `
    }
  }
