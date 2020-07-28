function newItem() {
    console.log("Inside newItem");

    var item = document.getElementById("input").value;
    console.log(item);

    // store the unordered list as a variable (now we can refer to it as "ul")
    var ul = document.getElementById("list");

    var li = document.createElement('li');

    // now put text in list item
    li.appendChild(document.createTextNode("- " + item));

    ul.appendChild(li); // put list item in our unordered list

    document.getElementById("input").value = ""; // erase what is currently in todo list
    li.onclick = removeItem; // run removeItem when the li is clicked

}

document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
        newItem();

    }
};

function removeItem(e) {
    e.target.remove()
}