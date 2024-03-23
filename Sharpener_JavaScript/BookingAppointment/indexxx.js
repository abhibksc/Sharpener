const form = document.querySelector("form");

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
    
    posts(userDetails);
}

function posts(obj) {
    axios.post('https://crudcrud.com/api/bfb421534ad7466bac4a683f6edabea9/Booking', obj)
        .then(res => {
            console.log('Response:', res);
            // Handle successful response if needed
        })
        .catch(err => {
            console.error('Error:', err);
            // Handle error appropriately
        });
}

