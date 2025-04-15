
const numContainer = document.getElementById("num");
const increase = document.querySelector(".add");
const decrease = document.querySelector(".minus");
const reset = document.querySelector(".reset");
let amount

localStorage.getItem(["number"], (data) => {
  if (typeof data.number == "undefined" || data.number == "") {
    amount = numContainer.value
  } else {
    amount = data.number
    numContainer.value = amount
  }
})

function updateCount(count) {
  console.log(count)
  const valueChange = new CustomEvent('updateValue', {detail: {number: count}});
  window.dispatchEvent(valueChange);
}

const setStorage = (value) => {
 localStorage.setItem("number", value || 0)
}

numContainer.addEventListener("input", () => {
  amount = parseInt(numContainer.value)
  setStorage(amount)
  updateCount(amount)
})

increase.addEventListener("click", () => {
  amount = numContainer.value || 0
  amount++
  numContainer.value = amount;
  setStorage(amount)
  updateCount(amount)
});

decrease.addEventListener("click", () => {
  amount = numContainer.valueAsNumber || 0
  amount == 0 ? amount == 0 : amount--;
  numContainer.value = amount;
  setStorage(amount)
  updateCount(amount)
});

reset.addEventListener("click", () => {
  amount = 0;
  numContainer.value = amount;
  setStorage(amount)
  updateCount(amount)
});