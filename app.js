const input = document.querySelector(".text input");
const lists = document.querySelector(".lists ul");


const submit = () => {
    if (input.value === "") {
        alert("To-Do list cannot be empty");
    }
    else {
        // label tag created
        let listLabel = document.createElement("label");

        //list tag created and added to label tag 
        let list = document.createElement("li");
        list.innerText = input.value;
        list.classList.add("uncheck");
        listLabel.appendChild(list);
        
        // sapn tag created and added to label tag
        let listSpan = document.createElement("span");
        listSpan.innerText = "X";
        listLabel.appendChild(listSpan);
        
        // label tag created and added to ul tag
        lists.appendChild(listLabel);
        saveList();
    }
    input.value = "";
}
// check un check and delete button added
lists.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("check");
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
})

function saveList(){
    localStorage.setItem('list',lists.innerHTML);
}
function showList(){
    lists.innerHTML = localStorage.getItem('list');
}

showList();