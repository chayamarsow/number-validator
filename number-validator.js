const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number")
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
  });
  
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
