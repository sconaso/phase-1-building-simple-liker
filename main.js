// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Find heart icons and add a click event listener to each, to call function actOnClick
let hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(heart => heart.addEventListener('click', actOnClick))

// Make a call to the fake server
function actOnClick(icon){
  mimicServerCall()
  // If call was a success
  .then(() => {
    // Used console.log below to prove a successful call was made
    // console.log('Success!') 
    
    // Grab span with heart icon
    const span = icon.target
    
    if (span.innerText === EMPTY_HEART){
      span.innerText = FULL_HEART
      span.classList.add('activated-heart')
    } else {
      span.innerText = EMPTY_HEART
      span.classList.remove('activated-heart')
    }

  })
  // If call was a failure
  .catch((e) => {
    // Used console.log below to prove a failed call was made
    // console.log('No Bueno!')
  
    const errorDiv = document.getElementById('modal')
    const errorMessage = document.getElementById('modal-message')
  
    errorDiv.classList.remove('hidden')
    errorMessage.innerText = `${e}`
    setTimeout(() => errorDiv.classList.add('hidden'), 3000)
  })

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
