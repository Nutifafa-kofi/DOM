const inputBox = document.getElementById("inputBox");
const taskList = document.getElementById("tasklist");

const tasks = [];

function addTask() {
  if (inputBox.value.trim() === "") {
    inputBox.classList.remove("shake")

    setTimeout(() => {
      inputBox.classList.add("shake")
    }, 500)
    return;
  }

  const listItem = document.createElement("li");
  listItem.className =
    "flex items-center gap-2 border w-2xl p-5 rounded-xl bg-gray-900";
  listItem.textContent = inputBox.value;
  taskList.appendChild(listItem);
  inputBox.value = "";
}

