function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let date = new Date();
    let dateTime = date.toLocaleString();

    let li = document.createElement("li");

    let spanText = document.createElement("span");
    spanText.classList.add("task-text");
    spanText.textContent = taskText;

    let spanDate = document.createElement("span");
    spanDate.classList.add("task-date");
    spanDate.textContent = " (" + dateTime + ")";

    let actions = document.createElement("div");
    actions.classList.add("action-buttons");

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = function () {
        document.getElementById("completedList").appendChild(li);
        completeBtn.remove();
    };

    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = function () {
        let newTask = prompt("Edit your task:", spanText.textContent);
        if (newTask) spanText.textContent = newTask;
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(spanText);
    li.appendChild(spanDate);
    li.appendChild(actions);

    document.getElementById("pendingList").appendChild(li);

    taskInput.value = "";
}
