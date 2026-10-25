// Declare variables for task input, add button, and task list
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById("tasklist");
const rankSelect = document.getElementById("rank");
const filterButtons = document.querySelectorAll("[data-filter]");

// Add a task when the button is clicked or Enter is pressed
function addTask() {
  const task = taskInput.value.trim();
  const priority = rankSelect.value;
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
  const priorityLabel = document.createElement("span");
  priorityLabel.textContent = priority;
  priorityLabel.className = "ml-auto  text-xs rounded-md border px-4 py-1";

  if (priority === "high") {
    priorityLabel.classList.add("text-red-400");
  } else if (priority === "medium") {
    priorityLabel.classList.add("text-yellow-400");
  } else {
    priorityLabel.classList.add("text-green-400");
  }

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
  deleteBtn.textContent = "x";
  deleteBtn.className =
    " text-gray-500  rounded-md  text-xl hover:bg-transparent hover:text-red-300 hover:border border-red-300 w-6 h-6 flex items-center justify-center";

  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.appendChild(priorityLabel);

  listItem.appendChild(deleteBtn);

  taskInput.value = "";
  taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

const existingList = document.querySelectorAll("#tasklist li");
const existingBtn = document.querySelectorAll(".existingBtn");

existingBtn.forEach((element) => {
  element.addEventListener("click", function () {
    element.parentElement.remove();
  });
});

const checkboxes = document.querySelectorAll(".existingCheckbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("line-through");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const filter = button.dataset.filter;
    const tasks = tasklist.querySelectorAll("li");

    tasks.forEach((taskItem) => {
      const checkbox = taskItem.querySelector('input[type="checkbox"]');
      const isCompleted = checkbox.checked;

      taskItem.hidden =
        (filter === "pending" && isCompleted) ||
        (filter === "completed" && !isCompleted);
    });
  });
});