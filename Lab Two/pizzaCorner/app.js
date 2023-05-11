const crust_radio = document.getElementsByName("crust")
const home_del = document.getElementById("home_del")
const deepPan = document.getElementById("deep_pan")
const total_span = document.getElementById("amount")
const mushrooms = document.getElementById("mus")
const olives = document.getElementById('oli')
const fingernail = document.getElementById('finger')
const beef = document.getElementById('beef')

home_del.addEventListener('change',showSelected)
deepPan.addEventListener('change',showSelected)
mushrooms.addEventListener('change',showSelected)
olives.addEventListener('change',showSelected)
fingernail.addEventListener('change',showSelected)
beef.addEventListener('change',showSelected)

for(const radioButton of crust_radio){
    radioButton.addEventListener('change', showSelected)
}

var crust_price = 99
var deep_pan = 0
var mus = 0
var oli = 0
var fing = 0
var bee = 0
var home_delivary = 0

function showSelected() {
    if (this.id == "small") {
        crust_price = 99
    }
    if (this.id == "medium") {
        crust_price = 199
    }
    if (this.id == "large") {
        crust_price = 399
    }
    if (home_del.checked){
        home_delivary = 25;
    }
    if (!home_del.checked){
        home_delivary = 0;
    }
    if (deepPan.checked){
        deep_pan = 20;
    }
    if (!deepPan.checked){
        deep_pan = 0;
    }
    if (mushrooms.checked){
        mus = 15;
    }
    if (!mushrooms.checked){
        mus = 0;
    }
    if (olives.checked){
        oli = 10;
    }
    if (!olives.checked){
        oli = 0;
    }
    if (fingernail.checked){
        fing = 30;
    }
    if (!fingernail.checked){
        fing = 0;
    }
    if (beef.checked){
        bee = 20;
    }
    if (!beef.checked){
        bee = 0;
    }
    total_span.innerText = (crust_price+deep_pan+mus+oli+fing+bee+home_delivary)
}