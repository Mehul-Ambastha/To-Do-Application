'use strict';   

const addTask = document.querySelector('#btn');     //add task button
const taskArea = document.querySelector('.tasks');  //pending tasks container
var input = document.querySelector('#inputTask');   //input box

//task actions buttons - done and remove
const taskActions = `
    <div class="task-actions">
    <button class="done">Done</button> <button class="remove">Remove</button>
    </div>
`;

addTask.addEventListener('click', addNewTask); //registering the click on 'add task' button

//registering the pressing of enter key to add the new task
input.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        addNewTask();
    }
});

//this function adds the new task 
function addNewTask(){
    var taskName = input.value;//the value of input box
    const exisTasks = taskArea.querySelectorAll('li');//the array of existing tasks in 'li' tags 
    
    //to check if the user input is not empty.
    if(taskName.length !== 0){
        var newTask = document.createElement('li');//to create an 'li' tag to hold the task inside
        
        newTask.classList.add('task');//adding the class 'task' to apply pre-defined styles
        
        //the content inside the new Task
        newTask.innerHTML = `
        ${exisTasks.length + 1}) ${taskName}
        ${taskActions}
        `;
        
        taskArea.appendChild(newTask);//appending the task to the taskArea
        
        input.value = "";//clearing the input box
        input.focus();
    }else{
        alert('Task cannot be empty. Try with a valid task again');
        input.focus();
    }

    const taskDoneButton = document.querySelectorAll('.done');
    const taskRemoveButton = document.querySelectorAll('.remove');
    
    //iterating/looping through all the tasks/'li' and applying onclick events on every done and remove button
    //also, iterating through only taskRemoveButton array because no. of taskDoneButton === taskRemoveButton
    for(var i in taskDoneButton){
        taskDoneButton[i].addEventListener('click', removeTask);
        taskRemoveButton[i].addEventListener('click', removeTask);
    }
}

//this function is applied to onclick events of done and remove buttons to remove the repective task
function removeTask() {
    /*
    const actionButtonContainer = this.parentNode; //referring to the parent of remove/done buttons
    actionButtonContainer.parentNode.remove(); //removing the grand parent of remove/done buttons (which is the current/respective task) buttons
    */
    this.parentNode.parentNode.remove(); /*remove the current task(grand-parent of taskactionbutton i.e. 
    currentTaskLi > task-action-button-container > task-action-buttons)*/
}