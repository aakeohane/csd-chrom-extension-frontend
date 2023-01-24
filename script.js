  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase, ref, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

  const firebaseConfig = {
    apiKey: "AIzaSyDpNvU6P5hKM6XZFZhOnQn8omh6v4XGWF8",
    authDomain: "club-sd-counter.firebaseapp.com",
    databaseURL: "https://club-sd-counter-default-rtdb.firebaseio.com",
    projectId: "club-sd-counter",
    storageBucket: "club-sd-counter.appspot.com",
    messagingSenderId: "181109959257",
    appId: "1:181109959257:web:cb9e9ab0d75b4ce21b5f48"
  };

initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = ref(db);
const intro = document.getElementById("intro")
const peopleAmount = document.getElementById("db-amount")
const close = document.getElementById("close")
const clock = document.getElementById("timer")


get(child(dbRef, `/`)).then((snapshot) => {
  if (snapshot.exists()) {
    setStorage(snapshot.val())
    const pastObject = localStorage.getItem('amountFromDB')
    const pastValue = JSON.parse(pastObject)
    setTimeUpdate(pastValue)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

onValue(child(dbRef, '/'), (snapshot) => {
    setStorage(snapshot.val())
    const data = snapshot.val().count
    const time = snapshot.val().timeStamp
    const member = (data === 1) ? 'member' : 'members'
    const are = (data === 1) ? 'is' : 'are'
    intro.textContent = `There ${are} currently`
    peopleAmount.textContent = data 
    close.textContent = `${member} waiting for you inside the club`
    const currentTime = new Date().getTime()
    let timeDifference = currentTime - time
    // 500 is arbitray, everytime database updates, startTimer() should run (time difference will be less than 500), however, I did not want 
    // startTimer() to run if user refreshed page with the database not being updated over 10 or 30 minutes ago, this keeps the timer in a 
    // conditional format for each function
    // --> I had to do this, because this function automatically runs on a page refresh
    timeDifference < 500 ? startTimer() : null
})

function setStorage(info) {
  localStorage.setItem("amountFromDB", JSON.stringify(info))
}

function updateTen(timeDifference) {
  clock.textContent = "Last updated over 10 minutes ago"
  let countdown
  timeDifference ? countdown = 1800000 - timeDifference : countdown = 1800000
  setTimeout(updateThirty, countdown)
}

function updateThirty() {
  clock.textContent = "Last updated over 30 minutes ago"
}

// timeLeft variable will be undefined on database update hence setting setTimeout to 10 minutes,this will also rerun on refresh only
// if timeLeft variable is less than ten minutes.
function startTimer(timeLeft) {
  let countdown
  console.log("timeleft function")
  timeLeft ? countdown = 600000 - timeLeft : countdown = 600000
  clock.textContent = ''
  setTimeout(updateTen, countdown)
}

function setTimeUpdate(time) {
  const currentTime = new Date().getTime()
  let timeDifference = currentTime - time.timeStamp
  switch(true) {
    case (timeDifference >= 600000 && timeDifference <= 1800000):
      updateTen(timeDifference)
      break
    case (timeDifference >= 1800000):
      updateThirty()
      break
    default:
      startTimer(timeDifference)
  }
}