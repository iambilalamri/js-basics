function print(callback) {
  callback();
}

const callback = function () {
  console.log("Hello FROM Callback function");
};
print(callback);

//*****************************/

const message = function () {
  console.log("This message is shown after 3 seconds");
};

setTimeout(message, 3000);

//*****************************/

setTimeout(() => {
  console.log("This message is shown after 4 seconds");
}, 4000);

//**************************** */

function printSpecialAlphabet() {
  alphabel = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i <= alphabel.length - 1; i++) {
    if (i % 2 === 0) console.log(alphabel[i]);
  }
}

printSpecialAlphabet();

//********************************/
