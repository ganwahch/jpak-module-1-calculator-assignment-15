// Created By Ghanwa Khan
function res() {
    document.getElementById("screen").value="";
    
} 
function show(input) {
    document.getElementById("screen").value+=input; // sreen= (Previous screen value ) + (new input)
    
}
function cal() {
    var output = eval(document.getElementById("screen").value);
    document.getElementById("screen").value=output;
}
function backspace() {
    var k = document.getElementById("screen").value;
    document.getElementById("screen").value = k .substring(0, k.length-1);
    
}