export var conLog = function(string){
    return console.log(string);
}

//create inbox
export var inbox = function(){
    const contentHtml = document.getElementById("content");

    const contentBody = document.createElement("div");
    contentBody.classList.add("contentBody");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");
    headerDiv.textContent = "Inbox";
    
    const todoImg = document.createElement("div");
    todoImg.classList.add("imgBody");
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");
    todoDiv.textContent = "test";
    
    const imagePlaceholder = document.createElement("div");
    imagePlaceholder.classList.add("imgBody");
    
    const addTask = document.createElement("div");
    addTask.classList.add("bodyTaskCopy");
    addTask.textContent = "Add Task";

    contentHtml.appendChild(contentBody);

    contentBody.appendChild(headerDiv);
    
    contentBody.appendChild(todoImg);
    contentBody.appendChild(todoDiv);

    contentBody.appendChild(imagePlaceholder);
    contentBody.appendChild(addTask);
}





