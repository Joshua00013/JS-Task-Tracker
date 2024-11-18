function submit(){
    let newTask = document.getElementById("myTask").value;
    console.log(newTask);

    //create new list item
    let newListItem = document.createElement("li");
    newListItem.className = "taskItem"

    let newCheckBox = document.createElement("input");
    newCheckBox.type = "checkbox";
    newListItem.appendChild(newCheckBox);

    //create item name tag
    let newItemName = document.createElement("p");
    newItemName.textContent = newTask;
    newItemName.className = "itemName"
    newListItem.append(newItemName)

    //create delete button
    let newDeleteButton = document.createElement("button");
    newDeleteButton.className = "deleteBtn"
    newListItem.appendChild(newDeleteButton);
    newDeleteButton.onclick = function(){
        newListItem.remove();
    }

    //create delete button icon within the delete button tag
    let deleteBtnIcon = document.createElement("img");
    deleteBtnIcon.id = "img";
    deleteBtnIcon.src = "delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
    newDeleteButton.appendChild(deleteBtnIcon);

    console.log(newListItem);
    document.getElementById("taskList").appendChild(newListItem);

    
}