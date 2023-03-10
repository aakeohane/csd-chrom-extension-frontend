import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, child, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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

onValue(child(dbRef, '/'), (snapshot) => {
  setStorage(snapshot.val())
  const timeObject = localStorage.getItem('amountFromDB')
  const dbValue = JSON.parse(timeObject)
  const data = dbValue.count
  const time = dbValue.timeStamp
  const member = (data === 1) ? 'member' : 'members'
  const are = (data === 1) ? 'is' : 'are'
  intro.textContent = `There ${are} currently`
  peopleAmount.textContent = data 
  close.textContent = `${member} inside\r\nclub san diego`
  setTimeUpdate(time)
})

function resetTimerOnTabReturn() {
  const localObject = localStorage.getItem('amountFromDB')
  const timeObject = JSON.parse(localObject)
  const time = timeObject.timeStamp
  setTimeUpdate(time)
}

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    resetTimerOnTabReturn()
  } else {
    return null
  }
});

function setStorage(info) {
  localStorage.setItem("amountFromDB", JSON.stringify(info))
}

function updateTen(timeLeft) {
  clock.textContent = "Last updated over 10 minutes ago"
  const countdown = 1800000 - timeLeft
  setTimeout(updateThirty, countdown)
}

function updateThirty(timeLeft) {
  clock.textContent = "Last updated over 30 minutes ago"
  const countdown = 3600000 - timeLeft
  setTimeout(updateHour, countdown)
}

function updateHour() {
  clock.textContent = "Last updated over an hour ago"
}

function startTimer(timeLeft) {
  const countdown = 600000 - timeLeft
  clock.textContent = ''
  setTimeout(updateTen, countdown)
}

// time in milliseconds
// 10 minutes = 600000
// 30 minuttes = 1800000
// one hour = 3600000

function setTimeUpdate(databaseTime) {
  const currentTime = new Date().getTime()
  let timeDifference = currentTime - databaseTime
  switch(true) {
    // time between updates is between 10 and 30 minutes
    case (timeDifference >= 600000 && timeDifference <= 1800000):
      updateTen(timeDifference)
      break
    // time between updates is between 30 and one hour
    case (timeDifference >= 1800000 && timeDifference <= 3600000):
      updateThirty(timeDifference)
      break
    // greater than an hour
    case (timeDifference >= 3600000):
      updateHour()
      break
    // less than ten minutes is default
    default:
      startTimer(timeDifference)
  }
}