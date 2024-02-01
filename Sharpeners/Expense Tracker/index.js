const form = document.querySelector("#form-1");
const expense = document.querySelector("#expense-amount");
const description = document.querySelector("#Description");
const category = document.querySelector("#category");
const addbtn = document.querySelector("#Add-Expense");
let numOfExpense = "1";
let backUp_key = "";
let backup_data = "";

window.addEventListener('load', function () {
    loadExistingExpenses();
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const expense_Value = expense.value;
    const description_Value = description.value;
    const category_Value = category.value;

    console.log(expense_Value);
    console.log(description_Value);
    console.log(category_Value);


    const UserExpense = {
        "expense amount": expense_Value,
        "Description": description_Value,
        "category": category_Value
    }


    const convertedData = ObjectToJson(UserExpense);
    const key = creationKey();
    const Store = localStoagee(key, convertedData);

    const data = JsonTo_Object(Store);

    const newElement = newLi(data);
    delBtn(newElement, key);
    edtBtn(newElement, key);
    display(newElement);
    clear();

});

function loadExistingExpenses() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedData = JsonTo_Object(key);

        if (storedData) {
            const newElement = newLi(storedData);
            delBtn(newElement, key);
            edtBtn(newElement, key);
            display(newElement);
        }
    }
}

function ObjectToJson(obj) {
    const converted = JSON.stringify(obj);
    return converted;

}

function creationKey() {
    const key = `Expense ${numOfExpense++}`;
    return key;
}

function localStoagee(key, obj) {
    localStorage.setItem(key, obj)
    return key;
}

function JsonTo_Object(key) {
    const keys = key;
    const storedJsonString = localStorage.getItem(keys);
    const data = JSON.parse(storedJsonString);
    return data;
}

function newLi(data) {
    const expenseElement = document.createElement('li');
    expenseElement.textContent = expenseElement.textContent = `Expense Amount: ${data["expense amount"]}, Description: ${data["Description"]}, Category: ${data["category"]}`
    return expenseElement;
}

function delBtn(li, key) {
    const del_btn = document.createElement("button")
    del_btn.type = "button";
    del_btn.textContent = "DELETE";

    del_btn.addEventListener('click', function (event) {
        event.preventDefault();
        const target = event.target.parentNode;
        target.remove();
        localStorage.removeItem(key);
    });
    li.appendChild(del_btn);
}

function edtBtn(li, key) {
    const edtBtn = document.createElement("button");
    edtBtn.type = "button";
    edtBtn.textContent = "EDIT";

    edtBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const storedData = JsonTo_Object(key);


        if (storedData) {
            expense.value = storedData["expense amount"];
            description.value = storedData["Description"];
            category.value = storedData["category"];

            backUp_key = key;
            backup_data = storedData;
            if (addbtn == true) {
                localStorage.removeItem(key);
                li.remove();
            }

        } 
        else {
            console.error('Data not found in localStorage for key:', key);
        }
    });

    li.appendChild(edtBtn);
}

function display(li) {
    document.querySelector("ul").appendChild(li);
}

function clear() {
    expense.value = "";
    description.value = "";
    category.value = "Rent";
}


