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
        list.classList.add("uncheck")
        listLabel.appendChild(list);
        
        // sapn tag created and added to label tag
        let listSpan = document.createElement("span");
        listSpan.innerText = "X";
        listLabel.appendChild(listSpan);
        
        // label tag created and added to ul tag
        lists.appendChild(listLabel);
        
        // check and uncheck function
        list.addEventListener("click", () => {
            list.classList.toggle("uncheck");
            list.classList.toggle("check");
            console.log("class is toggled");
        })
        // delete function
        listSpan.onclick = () => {
            lists.removeChild(listLabel);
        }
    }
    input.value = "";
}



