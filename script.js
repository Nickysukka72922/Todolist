let cloneCount = 0;
function addtask() {
 const original = document.getElementById("task");
    const clone = original.cloneNode(true);
cloneCount++;
    clone.id = "task-" + cloneCount;
document.getElementById("task-container").appendChild(clone);
clone.classList.add("show");
}




function deleteTask() {
    if (cloneCount > 0) {
        // Find the element with the highest count ID
        const lastClone = document.getElementById("task-" + cloneCount);
        
        if (lastClone) {
            lastClone.remove(); // Deletes the element
            cloneCount--;       // Decrement the counter so the next add is correct
        }
    }
}



function clearTask() {
    const container = document.getElementById("task-container");
    // This quickly removes all children except your original "task" template
    // if the template is not inside the "body" container
    container.replaceChildren(); 
    cloneCount = 0;
}
