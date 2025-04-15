import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, child, onValue, get, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyCip0zekylx6FbhRAB6huv63OSARaH62CA",
authDomain: "club-counter-portfolio.firebaseapp.com",
databaseURL: "https://club-counter-portfolio-default-rtdb.firebaseio.com",
projectId: "club-counter-portfolio",
storageBucket: "club-counter-portfolio.firebasestorage.app",
messagingSenderId: "89044195390",
appId: "1:89044195390:web:fcddffa3a42eeb0d51d96f"
};

initializeApp(firebaseConfig);

const db = getDatabase();
const dbRef = ref(db);
const intro = document.getElementById("intro")
const peopleAmount = document.getElementById("db-amount")
const close = document.getElementById("close")

onValue(child(dbRef, '/members'), (snapshot) => {
  setStorage(snapshot.val())
  const timeObject = localStorage.getItem('amountFromDB')
  const dbValue = JSON.parse(timeObject)
  const data = dbValue.count
  const member = (data === 1) ? 'member' : 'members'
  const are = (data === 1) ? 'is' : 'are'
  intro.textContent = `There ${are} currently`
  peopleAmount.textContent = data 
  close.textContent = `${member} inside\r\n the club`
})

function setStorage(info) {
  localStorage.setItem("amountFromDB", JSON.stringify(info))
}

get(child(dbRef, `/members`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

window.addEventListener('updateValue', (event) => {
  const time = new Date().getTime()
 
      set(ref(db, '/members'), {
        count: event.detail.number || 0,
        timeStamp: time
      })
});