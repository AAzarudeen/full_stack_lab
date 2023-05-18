const imageTag = document.getElementById("image");
const chooser = document.getElementById("chooser");
const add_btn = document.getElementById("add-btn");
const song_list = document.getElementById("song-list");
const details_list = document.getElementsByClassName("details");
var nameArr = [];
chooser.addEventListener("change", (e) => {
  imageTag.src = URL.createObjectURL(chooser.files[0]);
});
add_btn.addEventListener("click", () => {
  if (nameArr.includes(details_list[0].value)) {
    alert("Song Already Exits");
    return;
  }
  const row = document.createElement("tr");

  row.setAttribute("id", details_list[0].value);

  for (let c = 0; c < details_list.length; c++) {
    if (details_list[c].value === "") {
      alert("Please Fill all details");
      return;
    } else {
      const td = document.createElement("td");
      const textNode = document.createTextNode(details_list[c].value);
      td.appendChild(textNode);
      row.append(td);
    }
  }
  nameArr.push(details_list[0].value);

  const td = document.createElement("td");
  const img = document.createElement("img");

  img.style.width = "50px";
  img.style.height = "50px";
  img.src = imageTag.src;

  td.append(img);
  row.append(td);

  const close = document.createElement("img");

  close.setAttribute("id", details_list[0].value);

  close.style.width = "25px";
  close.style.height = "25px";
  close.src = "close.png";

  close.addEventListener("click", (e) => {
    removeFromArray(e.target.id)
    document.getElementById(e.target.id).remove();
  });

  row.append(close);
  song_list.appendChild(row);
});
function removeFromArray(ele) {
    for (let c = 0; c < nameArr.length; c++) {
        if(nameArr[c] === ele){
            nameArr.splice(c,1)
            break;
        }
    }
}