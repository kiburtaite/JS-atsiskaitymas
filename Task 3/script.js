/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener("click", () => {
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(user => show(user));
    let message = document.querySelector("#message");
    message.setAttribute("hidden", "true");
})

let show = (user) => {
    document.querySelector("#output").innerHTML =
    `<h2>${user.map(user => user.login)}</h2>
    <img src="${user.map(user => user.avatar_url)}">`
}