const display = document.getElementById("display");
const historylist = document.getElementById("history-list");
let history = [];

function appendToDisplay(input) {
    display.value += input;
}

function ClearDispaly() {
    display.value = "";
}

function RemoveAll() {
    location.reload(); /*to reload the page*/
}

function Calculate() {
    /*searching for how to handle the error when the user enter an invalid expression*/
    try {
        const expression = display.value; // to handle 
        const result = eval(expression);
        display.value = result;

        history.push(`${expression} = ${result}`); 
        updateHistory();
    } catch (error) {
        display.value = "Error";
    }
}

function RemoveLast() {

    display.value = display.value.slice(0, -1);

}

function updateHistory() {

    historylist.innerHTML = "";
    
    history.slice().reverse().forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        historylist.appendChild(li);
    });
}