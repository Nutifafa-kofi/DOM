// Declare variables for task input, add button, and task list
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById("tasklist");

// Event listener for the add button
addBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (task === "") {
    taskInput.classList.add("shake");
    setTimeout(() => {
      taskInput.classList.remove("shake");
    }, 300);
    return;
  }

  // Create a new list item for the task and add it to the task list
  const listItem = document.createElement("li");
  listItem.className =
    "flex items-center gap-2 border w-2xl p-4 rounded-lg bg-gray-900";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "cursor-pointer w-5 h-5";
  const taskText = document.createElement("span");
  taskText.textContent = task;
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  tasklist.appendChild(listItem);

  


  // Event listener for the task list to handle delete button clicks
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.className =
    " text-gray-500  rounded-md ml-auto text-2xl hover:bg-transparent hover:text-red-300 hover:border border-red-300 w-6 h-6 flex items-center justify-center";

  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(deleteBtn);
  tasklist.appendChild(listItem);
});
