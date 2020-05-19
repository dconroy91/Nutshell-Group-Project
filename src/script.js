import tasksAPIManagerObject from "./tasks-APIManager.js"
import printAllTasks from "./tasks-DOMPrinter.js"
import eventListenerObject from "./tasks-EventListeners.js"
//Tasks events on page load - Pat Shaver
//Gets all existing tasks from nutshell api for logged in user, which is hardcoded as the DM username (Derek- userId:2) and Prints them to the taskContainer on page load
tasksAPIManagerObject.getAllTasksFromAPI()
    .then((parsedTasks) => {
        printAllTasks(parsedTasks)
    });

//Click event listener for New Task button
document
.querySelector("#newTaskButton")
.addEventListener("click", () => {
    console.log("You clicked the New Task Button")
eventListenerObject.newTaskForm(); 
});