var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var nameField1 = document.getElementById('nameField1');
var nameField2 = document.getElementById('nameField2');
var nameField3 = document.getElementById('nameField3');
var choice = document.getElementById('selectedOption');
var form = document.getElementById('forminputs');

function changeFieldNames() {
    if (choice.value === "1") {
        form.className += " show";
        nameField1.innerText = "";  
        nameField2.innerText = "is What % of";
        nameField3.innerText = "?";
        numField1.value = "";
        numField2.value = "";
        resultField.innerText = "";
    }
    else if (choice.value === "2") {
        form.className += " show"; 
        nameField1.innerText = "What is";
        nameField2.innerText = "% of";  
        nameField3.innerText = "";
        numField1.value = "";
        numField2.value = "";
        resultField.innerText = "";
    }
    else if (choice.value === "0") {
        form.className = "formstyle"; 
    }    
} 

form.addEventListener('submit', function(event) {
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    }
    else if (choice.value === "1") {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var result = x / y;
        var percent = result * 100;
        resultField.innerText = "Answer: " + percent + "%";  
        event.preventDefault();
    }
    else if (choice.value === "2") {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var result = (y / 100) * x;
        resultField.innerText = "Answer: " + result;  
        event.preventDefault();
    }
});