import "./styles.css";
import { clearExisting } from "./clearExisting";
import { taskHeader, taskList } from "./taskList";
import { task } from "./task";

//generate default view

clearExisting();
taskHeader();
taskList();

window.addEventListener(`load`, () => {
  task();
});

//inbox button
var homeButtonPressed = function () {
  clearExisting();
  taskHeader();
  taskList();

  window.addEventListener(`load`, () => {
    task();
  });
};

const homeButton = document.getElementById("home");
homeButton.addEventListener(`click`, function () {
  homeButtonPressed();
});

//
