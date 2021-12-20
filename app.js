
var xboxConverter = {
  "1" : "Up",
  "2" : "Down",
  "3" : "Down Foward",
  "4" : "Backward",
  "5" : "Standing",
  "6" : "Forward",
  "7" : "Up Backward",
  "8" : "Up",
  "9" : "Up Foward",
  "236S": "Quarter Circle Special",
  ",": "  ",
  "H" : "B",
  "M": "Y",
  "L": "X",
  "S": "A",
  "2" : "Down",
  "RB" : "RB",
  "236" : "Quarter Circle Forward",
  "214" : "Quarter Circle Backwards",
  "214S" : "Quarter Circle Backwards Special",
  "2 1 4" : "Quarter Circle Backwards"

};

document.querySelector("textarea").addEventListener("keyup", (e) => {
  const input = e.target.value.toUpperCase();
  const inputValidated = input.replace(/[^a-zA-Z0-9 ,]/g, "");
  const arrOfIns = inputValidated.split(" ");
  const arrOfOuts = arrOfIns.map((e) =>
    xboxConverter[e] ? xboxConverter[e] : " "    
  ); 
if (parseInt.innerText == 236 & 214)
return
  const out = arrOfOuts.join(" , ");
  document.getElementById("output").innerText = out;

});
