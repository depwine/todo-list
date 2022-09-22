export var taskHeader = function(){

    const content = document.getElementById("content");

    const contentBody = document.createElement(`div`);
    contentBody.setAttribute(`id`, `content-body`);
        //Add Task Form

    const taskForm = document.createElement("form");
    taskForm.setAttribute(`id`, `new-task-form`);
    
    const textInput = document.createElement("input");
    textInput.setAttribute(`type`, `text`);
    textInput.setAttribute(`id`, `new-task-input`);
    textInput.setAttribute(`placeholder`, `What are you planning?`);

    const textSubmit = document.createElement(`input`);
    textSubmit.setAttribute(`type`, `submit`);
    textSubmit.setAttribute(`id`, `new-task-submit`);
    textSubmit.setAttribute(`value`, `Add Task`);

    taskForm.appendChild(textInput);
    taskForm.appendChild(textSubmit);

        contentBody.appendChild(taskForm);
        content.appendChild(contentBody);
}

        //Task List

export var taskList = function(){

    //
    const content = document.getElementById("content");
    const contentBody = document.getElementById("content-body");

    const taskList = document.createElement("section");
    taskList.classList.add("task-list");

        //header
    const tasksHeader = document.createElement("h2");
    tasksHeader.classList.add(`h2-index`);
    tasksHeader.textContent = "Tasks";

    const tasks = document.createElement("div");
    tasks.setAttribute(`id`, `tasks`);

        //content
    const taskContent = document.createElement(`div`);
    taskContent.classList.add(`content`);

    const taskInput = document.createElement(`input`);
    taskInput.setAttribute(`type`, `text`);
    taskInput.classList.add(`text`);
    taskInput.setAttribute(`value`, `default task: go to zoo`);
    taskInput.setAttribute(`readonly`, ``);

    contentBody.appendChild(tasksHeader);
    taskList.appendChild(tasks);

    taskContent.appendChild(taskInput);
    tasks.appendChild(taskContent);
    
        contentBody.appendChild(taskList);
        content.appendChild(contentBody);

        //add buttons:

    const actions = document.createElement(`div`);
    actions.classList.add(`actions`);

    const editButton = document.createElement(`button`);
    editButton.classList.add("edit");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement(`button`);
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

        tasks.appendChild(actions);
        content.appendChild(contentBody);
}