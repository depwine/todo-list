import "./styles.css"
import { clearExisting } from "./clearExisting";
import { conLog, inbox } from "./inbox"

var inboxButtonPressed = function(){
    clearExisting();
    conLog("Hello");
    inbox();
}


const inboxButton = document.getElementById("inbox");
inboxButton.addEventListener(`click`, function(){
    inboxButtonPressed();
})

