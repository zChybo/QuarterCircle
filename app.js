let xboxConverter = {
    "2H" : "Down B",
    "6H" : "Forward B",
    "236S" : "Quarter Circle A",
    "," : "  "
  }

  document.querySelector("textarea")
  .addEventListener("keyup", e => {
    const input = e.target.value.toUpperCase();
    const inputValidated = input.replace(/[^a-zA-Z0-9 ]/g, "");
    const arrOfIns = inputValidated.split(" ");
    const arrOfOuts = arrOfIns.map(e => xboxConverter[e] ? xboxConverter[e] : "");
    const out = arrOfOuts.join("  ");
    document.getElementById("output").innerText = out;
  });s