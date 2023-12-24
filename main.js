
document.write(`<span>Масив 1</span>` + "</br>");
let mas1 = [];
for (let i = 0; i < 10; i++) {
  mas1[i] = Math.random();
  document.write(`<span>${mas1[i]}</span>` + "</br> ");
}

document.write("Масив2" + "</br>");
let mas2 = [];
for (let i = 0; i < 10; i++) {
  mas2[i] = Math.random() * 10;
  document.write(`<span>${mas2[i]}</span>` + "</br> ");
}

let mas3 = [];
document.write("Масив3" + "</br>");
for (let i = 0; i < 10; i++) {
  mas3[i] = Math.round(Math.random() * 10);
  document.write(`<span>${mas3[i]}</span>` + "</br> ");
}
