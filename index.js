const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasklist = document.getElementById("tasklist");

addBtn.addEventListener("click", function () {
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "flex items-center gap-2 border w-2xl p-5 rounded-lg bg-gray-800";
    listItem.innerHTML = `<input type="checkbox" class="cursor-pointer w-5 h-5 " />${task}`;
    tasklist.appendChild(listItem);
    taskInput.value = "";
});