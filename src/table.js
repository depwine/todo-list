function Task (image, title, date, deleteTask){

    this.image = image;
    this.title = title;
    this.date = date;
    this.delete = deleteTask;

}

let firstTask = new Task ("Z", "title", "date", "deleteTask");

    
var generateTableHead = function (table, data){
    let thead = table.createHead();
    let row = thead.insertRow();

    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}


export var generateTable = function(table, data){

    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }

}
let tableTemp = document.createElement("table");

let table = document.querySelector("table");
let data = Object.keys(firstTask[0]);
generateTableHead(table, data);
generateTable(table, firstTask);











