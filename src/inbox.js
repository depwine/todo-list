export var conLog = function (string) {
  return console.log(string);
};
//create inbox
export var inbox = function () {
  const contentHtml = document.getElementById("content");

  const contentBody = document.createElement("div");
  contentBody.setAttribute(`id`, `content-body`);

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerDiv");
  headerDiv.textContent = "Inbox";

  const todoImg = document.createElement("div");
  todoImg.setAttribute(`id`, `to-do-1`);

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  todoDiv.textContent = "Test";

  const imagePlaceholder = document.createElement("div");
  imagePlaceholder.setAttribute(`id`, `add-task`);

  const addTask = document.createElement("div");
  addTask.classList.add("bodyTaskCopy");
  addTask.textContent = "Add Task";

  const deleteTask = document.createElement("div");
  deleteTask.classList.add("deleteTask");
  deleteTask.setAttribute(`id`, `deleteTask`);
  deleteTask.textContent = "X";

  contentHtml.appendChild(contentBody);

  contentBody.appendChild(headerDiv);

  contentBody.appendChild(todoImg);
  contentBody.appendChild(todoDiv);
  contentBody.appendChild(deleteTask);

  contentBody.appendChild(imagePlaceholder);
  contentBody.appendChild(addTask);
};
