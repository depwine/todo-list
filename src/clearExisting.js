export var clearExisting = function(){
    //remove existing
    var el = document.getElementById("content");
    while ( el.firstChild ) el.removeChild( el.firstChild );
}
