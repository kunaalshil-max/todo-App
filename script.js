document.addEventListener("DOMContentLoaded", () => {
  function addTask() {
    const taskinput = document.getElementById("text-Input");
    const tasktext = taskinput.value.trim();

    if (tasktext === "") return;

    const li = document.createElement("li");
    li.style.color = "black";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener('change', () => {
      li.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "remove";
    deletebtn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(" " + tasktext + " "));
    li.appendChild(deletebtn);

    document.getElementById("list").appendChild(li);
    taskinput.value = "";
  }

  document.querySelector("#add-Task").addEventListener('click', addTask);
});
