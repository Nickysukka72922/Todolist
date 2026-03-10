let cloneCount = 0;
function addtask() {
 const original = document.getElementById("task");
    const clone = original.cloneNode(true);
cloneCount++;
    clone.id = "task-" + cloneCount;
document.getElementById("body").appendChild(clone);
}
