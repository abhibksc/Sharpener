// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Collecting user details
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Storing user details in local storage
    var userDetails = {
        username: username,
        email: email,
        phone: phone
    };

    // Converting the user details to a JSON string
    var userDetailsString = JSON.stringify(userDetails);

    // Storing the JSON string in local storage
    localStorage.setItem('userDetails', userDetailsString);

    // Optional: Provide feedback to the user
    alert('User details submitted and stored successfully!');
}

// Adding an event listener to the form
var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', handleFormSubmission);