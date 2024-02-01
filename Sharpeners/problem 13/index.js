document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const userList = document.getElementById("userList");
  
    form.onsubmit = function (event) {
      event.preventDefault();
  
      const username = document.querySelector("#username").value;
      const email = document.querySelector("#email").value;
      const ph = document.querySelector("#phone").value;
  
      const userDetails = {
        "username": username,
        "email": email,
        "ph": ph
      };
  
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      const editIndex = form.getAttribute("data-edit-index");
  
      if (editIndex !== null) {
        // If editIndex is present, update the existing user
        existingUsers[editIndex] = userDetails;
        form.removeAttribute("data-edit-index"); // Clear the edit index after updating
      } else {
        // Add the new user to the list
        existingUsers.push(userDetails);
      }
  
      // Save the updated user list back to local storage
      localStorage.setItem("users", JSON.stringify(existingUsers));
  
      // Clear the form fields
      form.reset();
  
      // Update the displayed user list
      displayUserList(existingUsers);
    };
  
    function displayUserList(users) {
      // Clear the existing list items
      userList.innerHTML = "";
  
      // Iterate through the users and create list items for each
      users.forEach((user, index) => {
        const li = document.createElement("li");
  
        // Create an edit button for each user
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
          // Call a function to handle user editing
          editUser(index);
        };
  
        // Create a delete button for each user
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
          // Call a function to handle user deletion
          deleteUser(index);
        };
  
        // Display user details, edit button, and delete button
        li.textContent = `${user.username}, ${user.email} ${user.ph}`;
        li.appendChild(editButton);
        li.appendChild(deleteButton);
  
        // Append the list item to the unordered list
        userList.appendChild(li);
      });
    }
  
    function editUser(index) {
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // Set the form fields with the details of the selected user for editing
      const selectedUser = existingUsers[index];
      document.querySelector("#username").value = selectedUser.username;
      document.querySelector("#email").value = selectedUser.email;
      document.querySelector("#phone").value = selectedUser.ph;
  
      // Set the edit index in the form attribute
      form.setAttribute("data-edit-index", index);
  
      // Remove the user details from the screen and local storage
      deleteUser(index);
    }
  
    function deleteUser(index) {
      // Retrieve existing users from local storage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // Remove the user at the specified index
      existingUsers.splice(index, 1);
  
      // Save the updated user list back to local storage
      localStorage.setItem("users", JSON.stringify(existingUsers));
  
      // Update the displayed user list
      displayUserList(existingUsers);
    }
  
    // Display existing users on page load
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    displayUserList(existingUsers);
  });
  