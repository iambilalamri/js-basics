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
