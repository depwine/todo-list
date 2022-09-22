import "./styles.css"
import { clearExisting } from "./clearExisting";
import { taskHeader, taskList } from "./taskList"
import { task } from "./task"

//generate default view

clearExisting();
taskHeader();
taskList();

window.addEventListener(`load`, () => {

    task();

})




//inbox button
var inboxButtonPressed = function(){
    clearExisting();
    taskHeader();
    taskList();

    window.addEventListener(`load`, () => {
        task();
    })
}

const inboxButton = document.getElementById("inbox");
inboxButton.addEventListener(`click`, function(){
    inboxButtonPressed();
})

//



