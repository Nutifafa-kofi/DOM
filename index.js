const taskText = document.getElementById("taskText");
const taskList = document.getElementById("tasklist");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const rank = document.getElementById("rank");

const totalTasks = document.getElementById("totalTasks");
const tasksCompleted = document.getElementById("tasksCompleted");
const tasksLeft = document.getElementById("tasksLeft");

const filterButtons = document.querySelectorAll(".filter-btn");

// Function to check tasks summary

function updateSummary() {
  const total = document.querySelectorAll("li").length;
  const completed = document.querySelectorAll(
    "input[type='checkBox']:checked",
  ).length;

  const remaining = total - completed;
  totalTasks.textContent = total;
  tasksCompleted.textContent = completed;
  tasksLeft.textContent = remaining;
}

// Function to sort list items under the filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    const tasks = document.querySelectorAll("li");

    tasks.forEach((task) => {
      const checkbox = task.querySelector("input[type= 'checkbox']");

      if (filter === "all") {
        task.style.display = "flex";
      } else if (filter === "pending") {
        if (checkbox.checked) {
          task.style.display = "none";
        } else {
          task.style.display = "flex";
        }
      } else if (filter === "completed") {
        if (checkbox.checked) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
      }
    });

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((button) => {
          button.classList.remove("active");
        });

        btn.classList.add("active");
      });
    });
  });
});

// Function to add newly created tasks
function addTask() {
  if (taskText.value.trim() === "") {
    taskText.classList.remove("shake");

    setTimeout(() => {
      taskText.classList.add("shake");
    }, 100);
    return;
  }

  const priority = rank.value;
  let priorityStyle = "";
  if (priority === "high") {
    priorityStyle =
      "ml-auto text-[#F05B5B] text-xs rounded-md border border-[#F05B5B] px-3 py-1";
  } else if (priority === "medium") {
    priorityStyle =
      "ml-auto text-[#F0A52B] text-xs rounded-md border border[#F0A52B] px-3 py-1";
  } else {
    priorityStyle =
      "ml-auto text-[#27C282] text-xs rounded-md border border-[#27C282] px-3 py-1";
  }

  // Creating new List Items
  const listItem = document.createElement("li");
  listItem.innerHTML = `
  <input type ="checkbox" class =" existingCheckbox
  cursor-pointer appearance-none border-2 border-[#2A2E39] hover:border-green-500 w-6 h-6 rounded-full 
  checked:bg-[#27D49A] checked:border-green-500 checked:after:content-['✓'] 
  checked:after:flex checked:after:items-center checked:after:justify-center"> 
  <span>${taskText.value}</span>
  <span class = "${priorityStyle}">${priority}</span>
  <button class = " existingBtn text-gray-500 rounded-md text-xl hover:bg-transparent hover:text-red-300 hover:border border-red-300 w-6 h-6 flex items-center justify-center ">x</button> `;

  listItem.className =
    "flex items-center gap-2 bg-[#1A1E2A] border border-[#2A2E39] w-3xl p-4 rounded-xl relative";

  // listItem;
  taskList.prepend(listItem);
  updateSummary();
  taskText.value = "";
}

// Function to track progress for each item completed or deleted
function updateProgress() {
  const totalTask = taskList.querySelectorAll("li").length;
  const completedTasks = taskList.querySelectorAll(
    "input[type = 'checkbox']:checked",
  ).length;

  let progress;

  if (totalTask === 0) {
    progress = 0;
  } else {
    progress = (completedTasks / totalTask) * 100;
  }
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${Math.round(progress)}% `;
}

const filterBtns = document.querySelectorAll("filter-btn");

filterBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
  });
});

// Function to handle delete button clicks and checked events
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("existingBtn")) {
    const deleteItems = e.target.parentElement;
    deleteItems.remove();
  }

  if (e.target.classList.contains("existingCheckbox")) {
    const lineThrough = e.target.nextElementSibling;
    lineThrough.classList.toggle("line-through");
  }
  updateProgress();
  updateSummary();
});
