function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;

    const obj = {
        name,
        email,
        phonenumber
    }

    const converted = ObjectToJson(obj);
    const keys = key(obj);


    if (localStorage.length === 0) {
        if(keys!== ''){
            StoreInLocal(keys, converted);
        displayUser(keys);
        }
       
    }
    
    
    if (!localStorage.hasOwnProperty(keys)) {
        if(keys!==''){
            StoreInLocal(keys, converted);
        displayUser(keys);
        }
    }


}

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
            displayUser(key);
    }
});

function ObjectToJson(obj) {
    const converted = JSON.stringify(obj);
    return converted;

}

function key(obj) {
    const key = obj.email;
    return key;
}

function StoreInLocal(key, obj) {
    localStorage.setItem(key, obj)
}

function JsonTo_Object(Json) {
    const keys = Json;
    const storedJsonString = localStorage.getItem(keys);
    const data = JSON.parse(storedJsonString);
    return data;
}


function newLi(data) {
    const list = document.createElement('li');
    list.textContent = `Username: ${data.name}, Email: ${data.email}, phonenumber: ${data.phonenumber}`
    return list;
}
function delBtn(key) {
    const del_btn = document.createElement("button")
    del_btn.type = "button";
    del_btn.textContent = "DELETE";

    del_btn.addEventListener('click', function (event) {
        event.preventDefault();

        console.log(key);
        const target = event.target.parentNode;
        target.remove();
        localStorage.removeItem(key);
    });
    return del_btn;
}

function Edit_btn(data){
    const edit_btn = document.createElement("button")
    edit_btn.type = "button";
    edit_btn.textContent = "EDIT";

    edit_btn.addEventListener('click', (event)=>{
        event.preventDefault();
        localStorage.removeItem(data.email);
        const target = event.target.parentNode;
        target.remove();

        
        document.querySelector("#username").value = data.name;
        document.querySelector("#email").value = data.email;
        document.querySelector("#phone").value = data.phonenumber;  
    })

    return edit_btn;
}

function displayUser(key) {

        const data = JsonTo_Object(key);
        const li = newLi(data);
        const del = delBtn(key);
        const edit = Edit_btn(data,key)
        li.appendChild(del);
        li.appendChild(edit);
        document.querySelector("#listOfitems").appendChild(li);
        clear();

}

function clear() {
    document.querySelector("#username").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#phone").value = "";  
}