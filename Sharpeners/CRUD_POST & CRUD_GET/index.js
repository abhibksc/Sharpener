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

    post(obj);

}



document.addEventListener('DOMContentLoaded', function () {
    get();
});



function post(obj) {
    axios.post(`https://crudcrud.com/api/f9817db1f14c4ed8a16157fdde9da08f/BookingAppointment`, obj)
        .then((res) => {
            newUser(res.data)
        })
        .then((error) => {
            console.log(error);
        })
}

function get() {

    axios.get(`https://crudcrud.com/api/f9817db1f14c4ed8a16157fdde9da08f/BookingAppointment`)
        .then((res) => {
            res.data.forEach(element => {
                newUser(element)
            });
        })
        .catch((error) => {
            console.log(error);
        })
        
}


function newUser(data) {
    const li = newLi(data);
    const del = delBtn(data);
    const edit = Edit_btn(data)
    li.appendChild(del);
    li.appendChild(edit);
    document.querySelector("#listOfitems").appendChild(li);
    clear();
}



function newLi(data) {
    const list = document.createElement('li');
    list.textContent = `Username: ${data.name}, Email: ${data.email}, phonenumber: ${data.phonenumber}`
    return list;
}
function delBtn(data) {
    const del_btn = document.createElement("button")
    del_btn.type = "button";
    del_btn.textContent = "DELETE";

    del_btn.addEventListener('click', function (event) {
        event.preventDefault();
        const del = data._id;
        axios.delete(`https://crudcrud.com/api/f9817db1f14c4ed8a16157fdde9da08f/BookingAppointment/${del}`)
        const target = event.target.parentNode;
        target.remove();

    });
    return del_btn;
}

function Edit_btn(data) {
    const edit_btn = document.createElement("button")
    edit_btn.type = "button";
    edit_btn.textContent = "EDIT";

    edit_btn.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target.parentNode;
        target.remove();


        document.querySelector("#username").value = data.name;
        document.querySelector("#email").value = data.email;
        document.querySelector("#phone").value = data.phonenumber;
    })

    return edit_btn;
}



function clear() {
    document.querySelector("#username").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
}