/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let kilos = e.target.search.value;
    let pounds = kilos*2.2046;
    let grams = kilos*1000;
    let ounces = kilos*35.274;
    document.querySelector("#output").innerHTML =
    `${kilos} kg = ${pounds} lb = ${grams} g = ${ounces} oz`
})