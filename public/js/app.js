console.log("client side stuff")
const weatherForm = document.querySelector("form")
const userInput = document.querySelector("input")
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const textPlaceHolder = document.querySelector('#cityHolder')




weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const location = userInput.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    
    fetch("http://localhost:3000/weather?address=" + location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.weather
        }
    })
})
})

