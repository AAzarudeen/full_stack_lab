const city = document.getElementById("city")
const input = document.getElementById("item")
const place_order = document.getElementById("place_order")

place_order.addEventListener("click", place)
city.addEventListener("change", () => {
    switch (city.value) {

        case "chennai":
            input.value = "0";
            input.max = "15";
            break;

        case "coimbatore":
            input.value = "0";
            input.max = "12"
            break

        case "madurai":
            input.value = "0";
            input.max = "12"
            break;

        case "salem":
            input.value = "0";
            input.max = "8"
            break;

        case "tiruchirappalli":
            input.value = "0";
            input.max = "6"
            break;

        case "thoothukudi":
            input.value = "0";
            input.max = "2"
            break;
    }
})

function place() {

    document.getElementById("selected-city").innerHTML = city.value;
    document.getElementById("no-items").innerHTML = input.value;


}