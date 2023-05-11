const input = document.getElementById("input");
const result = document.getElementById("result");
input.addEventListener("keyup", () => {
  result.innerText = input.value;
});

function addPrefix(prefix) {
  if (input.value.length != 0) {
    result.innerText = prefix + input.value.toLowerCase();
  }
}
