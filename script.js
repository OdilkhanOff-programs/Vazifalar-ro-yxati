function handleClick() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const taskList = document.getElementById("tasks-list");
    const newTask = document.createElement("div");
    newTask.className = "task-item";
    newTask.textContent = taskText;

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
