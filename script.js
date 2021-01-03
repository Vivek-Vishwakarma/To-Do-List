const input = document.querySelector('#inp');
const btn = document.querySelector('#check');
const inp = document.querySelector('#lists');

btn.addEventListener('click', addtodo);
inp.addEventListener('click', deleteCheck);

function addtodo(event){
    event.preventDefault();
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");

    const newtodo = document.createElement("li");
    newtodo.innerText = input.value;
    newtodo.classList.add("todoitem");
    tododiv.appendChild(newtodo);

    const complete = document.createElement("button");
    complete.innerHTML = '<i class="fas fa-check"></i>';
    complete.classList.add("completebtn");
    tododiv.appendChild(complete);

    const trash = document.createElement("button");
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add("trashbtn");
    tododiv.appendChild(trash);

    lists.appendChild(tododiv);

    input.value = "";
}
function deleteCheck(e){
    const item = e.target;
    console.log(e.target);
    if(item.classList[0] === "trashbtn") {
        const todo = item.parentElement;
        todo.remove();
    }  
    if(item.classList[0] === "completebtn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }  
}
