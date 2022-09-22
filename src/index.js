import "./styles.css"
import { clearExisting } from "./clearExisting";
import { taskHeader, taskList } from "./taskList"
import {inbox} from "./inbox"
import {task} from "./task"

//generate default view

clearExisting();
taskHeader();
taskList();

window.addEventListener(`load`, () => {

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks")

    task();

})








//inbox button
var inboxButtonPressed = function(){
    clearExisting();
    //conLog("Hello");
    //generateTable()
    inbox();

}

const inboxButton = document.getElementById("inbox");
inboxButton.addEventListener(`click`, function(){
    inboxButtonPressed();
})




