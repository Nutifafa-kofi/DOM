const taskText = document.getElementById("taskText");
const taskList = document.getElementById("tasklist");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const tasks = [taskList];

function addTask() {
  if (taskText.value.trim() === "") {
    taskText.classList.remove("shake");

    setTimeout(() => {
      taskText.classList.add("shake");
    }, 500);
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
  <input type ="checkbox" class =" existingCheckbox
  cursor-pointer appearance-none border-2 border-[#2A2E39] hover:border-green-500 w-6 h-6 rounded-full 
  checked:bg-[#27D49A] checked:border-green-500 checked:after:content-['✓'] 
  checked:after:flex checked:after:items-center checked:after:justify-center"> 
  <span>${taskText.value}</span>

  <button class = " existingBtn text-gray-500 rounded-md text-xl hover:bg-transparent hover:text-red-300 hover:border border-red-300 w-6 h-6 flex items-center justify-center ml-auto">x</button> `;

  listItem.className =
    "flex items-center gap-2 bg-[#1A1E2A] border border-[#2A2E39] w-3xl p-4 rounded-xl relative";

  listItem;
  taskList.appendChild(listItem);
  taskText.value = "";
}

taskList.addEventListener("change", (e) => {
  if (e.target.classList.contains("existingBtn")) {
    const deleteItems = e.target.parentElement;
    deleteItems.remove();
  }

  if (e.target.classList.contains("existingCheckbox")) {
    const lineThrough = e.target.nextElementSibling;
    lineThrough.classList.toggle("line-through");
    updateProgress();
  }
});

function updateProgress() {
  const totalTask = taskList.querySelectorAll("li").length;
  const completedTasks = taskList.querySelectorAll(
    "input:[type = 'checkbox']:checked",
  ).length;
  let progress;

  if (progressBar === 0) {
    progress = 0;
  } else {
    (completedTasks / totalTask) * 100;
  }

  progress.style.width = `${progress}%`;
}
