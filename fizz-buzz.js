{ //block added so both scripts can run on the same web page.

  const button = document.getElementById("btn-count");
  button.addEventListener("click", function () {

    const outputElement = document.getElementById("output");
    removeAllChildren(outputElement);

    const maxInput = document.getElementById("max");
    const max = maxInput.value;
    fizzBuzzGame(max);
  });


  function removeAllChildren(element) {
    const children = element.children;
    for (let i = 0; i < children.length; i++) {
      let current = children[i];
      element.removeChild(current);
    }
  }


  function fizzBuzzGame(maxCount) {

    const outputElement = document.getElementById("output");
    const listTarget = document.createElement("ul");
    outputElement.appendChild(listTarget);
    let count = 0

    while (count < maxCount) {

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

      const item = document.createElement("li");
      const text = document.createTextNode(msg);

      item.appendChild(text);
      listTarget.appendChild(item);

    }
  }
}