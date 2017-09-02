const outputElement = document.getElementById("output");
const listTarget = document.createElement("ul");
outputElement.appendChild(listTarget);

let count = 0

while (count < 30) {

  //Change the counter first so we don't forget
  count += 1;

  let msg = "";

  if (count % 3 === 0) {
    msg += "Fizz ";
  }

  if (count % 5 === 0) {
    msg += "Buzz ";
  }

  if (msg === "") {
    msg += count;
  }

  console.log("msg");

}