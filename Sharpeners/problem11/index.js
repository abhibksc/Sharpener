var submitform = document.querySelector('form')

function handleFormSubmit(event){
    
    event.preventDefault();
    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const ph = document.querySelector("#phone").value

    const userDetails = {
        "username" : username,
        "email" : email,
        "ph" : ph
    }

    var jsonString = JSON.stringify(userDetails);

    localStorage.setItem("userDetails" , jsonString);

    let deserialized = JSON.parse(localStorage.getItem(userDetails))
}
