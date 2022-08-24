let countdown;

// Grabbing the elemnts
const timeLeftText = document.querySelector('.display__time-left')
const timeEndText = document.querySelector('.display__end-time')

// create a timer function
function timer(seconds) {
  // now => the time the timer starts
  const now = Date.now(); // return the elapsed ms sinc Jan 1st, 1970
  const endTime = now + seconds * 1000; // Convert seconds => miliseconds

  //display the time left
  renderTimeLeft(seconds);
  //display the end time
  renderEndTime(endTime);

  // Execute after each second
  countdown = setInterval(() => {
    // The code below is what we run after each second
    // returning the seconds left
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);
    // Check 
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return; //Exit the function
    }

    //update the display
    renderTimeLeft(secondsLeft);
  }, 1000);
}

// display the countdown on the browser
function renderTimeLeft(seconds) {
    // convert seconds into minutes
    const minutes = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60
    // 
    let text = `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}` // if lesser than 10 => we add 0 before seconds
    timeLeftText.textContent = text
}

function renderEndTime(time){
    // grab the 
    const endTime = new Date(time)
    const h = endTime.getHours()
    const m = endTime.getMinutes()
    timeEndText.textContent = `See you at ${h}:${m < 10 ? '0' : ''}${m}`
}

/////////////////////////////////////// HomeWork starts here 
// function to start the timer: startTimer()

// Add event listeners to the buttons button.addEventListener('click', startTimer)
// Grab the (data-*) value from html (data-time)
const buttons = document.querySelectorAll('button')
//Accessing the dataset for the first button that we have
console.log(buttons[0].dataset.time)

// Create logic for the input
