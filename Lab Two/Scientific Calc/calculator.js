const input_box = document.getElementById("input_box")

function input_fun(number) {
    input_box.textContent += number
}

function all_clear() {
    input_box.textContent = ""
}

function back_space() {
    input_box.textContent = input_box.textContent.slice(0,-1)
}

function evaluate_ex() {
    input_box.textContent = math.evaluate(input_box.textContent)
}

function squr(){
    input_box.textContent = input_box.textContent * input_box.textContent
}

function cube(){
    input_box.textContent = input_box.textContent * input_box.textContent * input_box.textContent 
}

function squrt(){
    input_box.textContent = math.sqrt(input_box.textContent)
}
function sin_fun(){
    input_box.textContent = math.sin(input_box.textContent).toFixed(2)
}
function cos_fun(){
    input_box.textContent = math.cos(input_box.textContent).toFixed(2)
}
function tan_fun(){
    input_box.textContent = math.tan(input_box.textContent).toFixed(2)
}
function round_fun(){
    input_box.textContent = math.round(input_box.textContent)
}
function log_fun(){
    input_box.textContent = math.log(input_box.textContent).toFixed(2)
}
function log_ten_fun(){
    input_box.textContent = math.log(input_box.textContent).toFixed(2)
}
function abs_fun(){
    input_box.textContent = math.abs(input_box.textContent)
}
function fact_fun(){
    var num = input_box.textContent
    var ans = 1
    for(let c = 1; c <= num;c++){
        ans *= c
    }
    input_box.textContent = ans
}