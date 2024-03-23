const form = document.querySelector("form");
const btn = document.querySelector("button");

// Create input element for fruit name


// Create input element for fruit description
const descriptionInput = document.createElement("input");
descriptionInput.type = 'text';
descriptionInput.name = 'description';
descriptionInput.id = 'description-to-add';

// Insert both input elements before the button

form.insertBefore(descriptionInput, btn);

form.addEventListener('submit', function(event){
    event.preventDefault();

    // Get values from input elements
    const fruitName = document.querySelector("#fruit-to-add").value;
    const fruitDescription = descriptionInput.value;

    // Create list item
    const li = document.createElement("li");

    // Create span for fruit name
    const fruitSpan = document.createElement("span");
    fruitSpan.textContent = fruitName;

    // Create paragraph for fruit description (in italics)
    const descriptionPara = document.createElement("p");
    descriptionPara.innerHTML = `<i>${fruitDescription}</i>`;

    // Append both spans to the list item
    li.appendChild(fruitSpan);
    li.appendChild(descriptionPara);

    // Append the list item to the '.fruits' container
    document.querySelector(".fruits").appendChild(li);

    // Clear input fields after adding the fruit
    fruitInput.value = "";
    descriptionInput.value = "";
});
