const buildTaskList = (eachTask) => {
    if (eachTask.completed == "false" || eachTask.completed == "False" && eachTask.userId == 2) {
        return `
    <div id="task-${eachTask.id}">
    <p id="task-name-${eachTask.id}"> Task - ${eachTask.name}</p>
    <p>Expected Completion Date: ${eachTask.completion_date}&nbsp;&nbsp;
    Completed:<input type="checkbox" name="task-complete-chkbx" id="task-complete-chkbx-${eachTask.id}"><br></p>
    <hr>
    </div>
`
    } else {
        return `
    <div> `
    }
};


const printAllTasks = (tasksArray) => {
    // Clear the container
    document.querySelector("#tasksContainer").innerHTML = "";
    tasksArray.forEach((taskInLoop) => {
        const htmlString = buildTaskList(taskInLoop);
        document.querySelector("#tasksContainer").innerHTML += htmlString;
    })
    if (document.getElementById("newTaskButton").style.display == "none") { document.getElementById("newTaskButton").style.display = "block" }
};



export default printAllTasks;