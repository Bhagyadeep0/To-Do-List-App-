const input = document.querySelector(".text input");
const lists = document.querySelector(".lists ul");

let list = document.createElement("li");
let listSpan = document.createElement("span");

const submit = () => {
    if (input.value === ""){
        alert("To-Do list cannot be empty");
    }
    else{
        list.innerText = input.value;
        lists.appendChild(list);
        
        listSpan.innerText = "X";
        list.appendChild(listSpan);
    }
    input.value = "";
}

listSpan.addEventListener("click",() =>{
    lists.removeChild(list);
})
