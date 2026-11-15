const taskText = document.getElementById("taskText");
const taskList = document.getElementById("tasklist");

const tasks = [];

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
  <input type ="checkbox" class = "
  cursor-pointer appearance-none border-2 border-[#2A2E39] hover:border-green-500 w-6 h-6 rounded-full 
  checked:bg-[#27D49A] checked:border-green-500 checked:after:content-['✓'] 
  checked:after:flex checked:after:items-center checked:after:justify-center"> 
  <span>${taskText.value}</span>
  <button class = "text-gray-500 rounded-md text-xl hover:bg-transparent hover:text-red-300 hover:border border-red-300 w-6 h-6 flex items-center justify-center ml-auto">x</button> `;

  listItem.className =
    "flex items-center gap-2 bg-[#1A1E2A] border border-[#2A2E39] w-3xl p-4 rounded-xl relative";

  taskList.appendChild(listItem);
  taskText.value = "";
}
