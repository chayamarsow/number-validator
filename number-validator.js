const userInput = document.getElementById("user-input"); //1
const checkBtn = document.getElementById("check-btn"); //2
const clearBtn = document.getElementById("clear-btn"); //3
const results = document.getElementById("results-div"); //4

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number") //5
    } else {
      check(userInput.value)
    }
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (userInput.value === "") {
      alert("Please provide a phone number")
    } else {
      check(userInput.value)
    }
  }
}); //same as check btn but with enter key

clearBtn.addEventListener("click", () => {
  results.innerText = "";
  userInput.value = "";
  }); //6
  
const check = (userInput) => {
  const valid = /^1?\s?(?:\d{3}|\(\d{3}\))[-/.\s]?\d{3}[-/.\s]?\d{4}$/;
  if (valid.test(userInput)) {
    results.innerText = `Valid US number: ${userInput}`;
    return;
  } else {
    results.innerText = `Invalid US number: ${userInput}`;
    return;
  }
}
