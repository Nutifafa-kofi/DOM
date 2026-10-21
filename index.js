// Declare variables for task input, add button, and task list
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById("tasklist");

// Event listener for the add button
addBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  // Check if the task input is empty and shake the input field if it is
  if (task === "") {
    taskInput.classList.add("shake");
    setTimeout(() => {
      taskInput.classList.remove("shake");
    }, 300);
    return;
  }

  // Add the list item to the task list with a checkbox and delete button
  const listItem = document.createElement("li");
  listItem.className =
    "flex items-center gap-2 border w-2xl p-4 rounded-lg bg-gray-900";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "cursor-pointer w-3 h-3 rounded-full";

  // Create the task text
  const taskText = document.createElement("span");

  // Mark the task as completed when the checkbox is checked
  checkbox.addEventListener("change", function () {
    taskText.classList.toggle("line-through");
  });
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
});

const existingList = document.querySelectorAll("#tasklist li");
const existingBtn = document.querySelectorAll("#existingBtn");

existingBtn.forEach((element) => {
  element.addEventListener("click", function () {
    element.parentElement.remove();
  });
});
