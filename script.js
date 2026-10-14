
let input = document.getElementById("missionInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("missionList");
let totalCount = document.getElementById("totalCount");
let completedCount = document.getElementById("completedCount");
let pendingCount = document.getElementById("pendingCount");
function updateCounter() {
    totalCount.textContent = list.children.length;
    let completed = list.querySelectorAll(".completed").length;
    completedCount.textContent = completed;
    pendingCount.textContent = list.children.length - completed;
}
function addMission() {
    let missionText = input.value.trim();
    if (missionText === "") {
        alert("Please enter a mission!");
        return;
    }
    let item = document.createElement("li");
    let text = document.createElement("span");
    text.textContent = missionText;
    text.classList.add("mission-text");
    text.addEventListener("click", function () {
        item.classList.toggle("completed");
        updateCounter();
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = " Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        item.remove();
        updateCounter();
    });
    item.appendChild(text);
    item.appendChild(deleteBtn);
    list.appendChild(item);
    input.value = "";
    updateCounter();
}
addBtn.addEventListener("click", addMission);
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addMission();
    }
});
let colorBtn = document.getElementById("colorBtn");
let colors = ["#f4f7ff", "#e5f7e9", "#fff0f3"];
let colorIndex = 0;
colorBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
});
