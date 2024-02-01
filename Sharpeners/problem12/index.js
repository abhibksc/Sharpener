const form = document.querySelector("form");
console.log(form)

function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const ph = document.querySelector("#phone").value;

    const userDetails = {
        "username": username,
        "email": email,
        "ph": ph
    };

    var jsonString = JSON.stringify(`${username} ${"-"} ${email} ${"-"}  ${ph}`);

    localStorage.setItem("userDetails", jsonString);

    const li = document.createElement("li");
    li.textContent = jsonString; // Use textContent to set the text of the li element
    console.log(li.textContent);

    // Assuming you have a specific ul element with an id, e.g., "userList"
    const ul = document.getElementById("userList");
    ul.appendChild(li);
}

