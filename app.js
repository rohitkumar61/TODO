let form = document.getElementById("add-item");
let inputItem = document.getElementById("output-item");
let filterItem = document.getElementById("search-input");

//on Submit add item
form.addEventListener("submit", addItem);

//on click remove item
inputItem.addEventListener("click", removeItem);

//on keyup filter item
filterItem.addEventListener("keyup", filterItems);

//addItem
function addItem(e) {
    e.preventDefault();
    //get input value
    let inputValue = document.getElementById("enter-item").value;

    //create element to append above data
    let h2 = document.createElement("h2");

    //add class to it
    h2.className = "item-list";

    //create button

    let btn = document.createElement("button");
    btn.className = "delete";
    btn.appendChild(document.createTextNode("X"));
    btn.style.background = "red";
    if (inputValue.length > 0) {
        h2.appendChild(document.createTextNode(inputValue));

        h2.appendChild(btn);
        //append input item to output div
        inputItem.appendChild(h2);
    }
}

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        // console.log("working");
        if (confirm("Are You Sure")) {
            let h2 = e.target.parentElement;
            inputItem.removeChild(h2);
        }
    }
}

function filterItems(e) {
    //convert to lower text
    let txt = e.target.value.toLowerCase();
    //get h2
    let items = inputItem.getElementsByTagName("h2");
    //convert to an array

    Array.from(items).forEach(function(itemElement) {
        let itemName = itemElement.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(txt) != -1) {
            itemElement.style.display = "block";
        } else {
            itemElement.style.display = "none";
        }
    });
}