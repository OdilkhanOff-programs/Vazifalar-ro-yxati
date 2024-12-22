function handleClick() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById("tasks-list");
    const newTask = document.createElement("div");
    newTask.className = "task-item";

    
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;


    const buttonsParent = document.createElement("div");
    buttonsParent.className = "buttons__parent";

    
    const editButton = document.createElement("button");
    editButton.textContent = "Tahrirlash";
    editButton.className = "task-edit-btn";
    editButton.onclick = function () {
      const newTaskText = prompt(
        "Yangi vazifani kiriting:",
        taskContent.textContent
      );
      if (newTaskText) {
        taskContent.textContent = newTaskText.trim();
      }
    };

  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "O'chirish";
    deleteButton.className = "task-delete-btn";
    deleteButton.onclick = function () {
      taskList.removeChild(newTask);
    };

   
    buttonsParent.appendChild(editButton);
    buttonsParent.appendChild(deleteButton);

   
    newTask.appendChild(taskContent);
    newTask.appendChild(buttonsParent);
    taskList.appendChild(newTask);

    
    taskInput.value = "";
  }
}

document
  .getElementById("task-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleClick();
    }
  });
