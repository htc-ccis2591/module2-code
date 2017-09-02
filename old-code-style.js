(function () { //Start IIFE

  var myMessage_IIFE = "Hello World";
  console.log(myMessage_IIFE);

  //Why does this not say our variable is NOT defined?
  console.log(myMsg);

}()); //End IIFE

var myMsg = "Hello"; //Defines myMessage in global scope
console.log(myMsg);