

let filter = document.querySelector("#filter");


document.addEventListener('DOMContentLoaded', function () {
    let filterValue = filter.value;
    getBookings(filterValue)
 
});

filter.addEventListener("change", (e) => {
    e.preventDefault();
    const filterValue = filter.value;
    getBookings(filterValue);

})


function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phone.value;
    const busNum = event.target.busNum.value;


    const obj = {
        name,
        email,
        phonenumber,
        busNum
    }

    postBooking(obj).then(res => {
        newUser(res.data);
    });
  
}


function postBooking(obj) {
    return axios.post(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus`, obj);
}

function getBookings(value) {
    console.log(value);

    if (value === "Bus 1") {
        clearScreen();
        axios.get(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus`)
            .then(res => {
                res.data.forEach((element) => {
                    if (element.busNum === "Bus 1") {
                        newUser(element);
                    }
                });
            });
    }
    else if (value === "Bus 2") {
        clearScreen();
        axios.get(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus`)
            .then(res => {
                res.data.forEach((element) => {
                    if (element.busNum === "Bus 2") {
                        newUser(element);
                    }
                });
            });

    }
    else if (value === "Bus 3") {
        clearScreen()

        axios.get(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus`)
            .then(res => {
                res.data.forEach((element) => {
                    if (element.busNum === "Bus 3") {
                        newUser(element);
                    }
                });
            });
    }
    else {
        clearScreen()
        axios.get(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus`)
            .then(res => {
                res.data.forEach((element) => {
                    newUser(element);
                });
            });
    }

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
    list.textContent = `Username: ${data.name}, Email: ${data.email}, phonenumber: ${data.phonenumber}, Bus: ${data.busNum}`
    return list;
}
function delBtn(data) {
    const del_btn = document.createElement("button")
    del_btn.type = "button";
    del_btn.textContent = "DELETE";

    del_btn.addEventListener('click', function (event) {
        event.preventDefault();
        const del = data._id;
        axios.delete(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus/${del}`)
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

        document.querySelector("#username").value = data.name;
        document.querySelector("#email").value = data.email;
        document.querySelector("#phone").value = data.phonenumber;

        const target = event.target.parentNode;
        target.remove();


        const newData = {
            names: data.name,
            emails: data.email,
            phonenumbers: data.phonenumber
        };


        const edit = data._id;
        axios.put(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus/${edit}`, newData)
            .then((res) => {
                console.log('Updated:', res.data);
            })
            .catch((error) => {
                console.error('Error updating:', error);
            });
        axios.delete(`https://crudcrud.com/api/72bd4c0427c6475c9d6948a6cdc67e4b/BookingBus/${edit}`)
            .then(res => {
                console.log("worked");
            })
            .catch(res => {
                console.log("Not worked");
            })

    })

    return edit_btn;
}


function clearScreen() {
    document.querySelector("ul").innerHTML = "";

}

function clear() {
    document.querySelector("#username").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
}