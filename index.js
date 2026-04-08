let random = Math.floor(Math.random() * 10) + 1

let guess = document.getElementById("btn-guess")

let input = document.getElementById("input-nm")

let high = document.getElementById("high")

let low = document.getElementById("low")

let congrats = document.getElementById("congrats")

let counter = document.getElementById("counter")

let reset = document.getElementById("btn-reset")

let attempts = 0

guess.addEventListener("click", function(){
    let guess = input.value;
 
    if(input.value === ""){
        alert("Please type in a number")
        return
    }

    [high, low, congrats].forEach(el => el.style.display = "none")

    if (guess > random){
        high.style.display="block"
    }
    else if (guess < random){
        low.style.display="block"
    }
    else {
        congrats.style.display="block"
    }

    attempts++
    counter.innerHTML ="Attempts:" + attempts
})

reset.addEventListener("click", function(){
    attempts = 0
    counter.innerHTML = "Attempts:" + attempts
    input.value = ""
    random = Math.floor(Math.random() * 10) + 1;
    [high, low, congrats].forEach(el => el.style.display = "none")
})

