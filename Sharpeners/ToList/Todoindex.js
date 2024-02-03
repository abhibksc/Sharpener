const todoName = document.querySelector("#TodoName");
const description = document.querySelector("#Description");
const sbt_btn = document.querySelector("#add-btn");
let flag = true;

document.addEventListener('DOMContentLoaded', function () {
    get()
});

sbt_btn.addEventListener("click", (event) => {
    event.preventDefault();
    const todoName_Value = todoName.value;
    const description_value = description.value;
    console.log(todoName_Value);
    console.log(description_value);

    obj = {
        todoName_Value,
        description_value,
        flag
    }

    post(obj).then(res => {
        newUser(res.data);
    })

})

console.log("happy kfkldsjf");

function post(obj) {
    return axios.post(`https://crudcrud.com/api/6873aed517d14d25ba98cb3d8a282d4d/todoList`, obj);
}

function get() {
    axios.get(`https://crudcrud.com/api/6873aed517d14d25ba98cb3d8a282d4d/todoList`)
        .then(res => {
            res.data.forEach(element => {
                if(element.flag === true){
                    newUser(element);
                }
                else if(element.flag === false){
                    const li = document.createElement("li")
                    li.innerHTML = `${element.todoName_Value},${element.description_value}`
                    document.querySelector("#TodosDone").appendChild(li)
                }
            });
        })
}

function newLi(data) {
    const list = document.createElement('li');
    list.textContent = `${data.todoName_Value} ${data.description_value}`
    return list;
}
function delBtn(data) {
    const del_btn = document.createElement("button")
    del_btn.type = "button";
    del_btn.innerHTML = "&#10007";

    del_btn.addEventListener('click', function (event) {
        event.preventDefault();
        const del = data._id;
        axios.delete(`https://crudcrud.com/api/6873aed517d14d25ba98cb3d8a282d4d/todoList/${del}`)
        const target = event.target.parentNode;
        target.remove();

    });
    return del_btn;
}

function Done_btn(data) {
    const btn = document.createElement("button");
    btn.innerHTML = "&#10003;"

    btn.addEventListener("click", (event) => {
        event.preventDefault();
            const newData = {
                todoName_Value : data.todoName_Value,
                description_value : data.description_value,
                flag : false
            };
    
    
            const edit = data._id;
            axios.put(`https://crudcrud.com/api/6873aed517d14d25ba98cb3d8a282d4d/todoList/${edit}`, newData)
                .then((res) => {
                    console.log('Updated:', res.data);
                })
                .catch((error) => {
                    console.error('Error updating:', error);
                });

                const target = event.target.parentNode;
                target.remove();
                const li = document.createElement("li")
                li.innerHTML = `${data.todoName_Value} , ${data.description_value}`
                document.querySelector("#TodosDone").appendChild(li)
        })

    return btn;
}

function newUser(data) {
    const li = newLi(data);
    const del = delBtn(data);
    const done = Done_btn(data)
    li.appendChild(del);
    li.appendChild(done);
    document.querySelector("#Todo-Remaining").appendChild(li);
    clear();
}
function clearScreen() {
    document.querySelector("ul").innerHTML = "";

}

function clear() {
    document.querySelector("#TodoName").value = "";
    document.querySelector("#Description").value = "";
    
}