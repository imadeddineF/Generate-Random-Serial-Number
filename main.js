let btnEl = document.querySelector(".generate");
let serialEL = document.querySelector(".serial");

btnEl.onclick = function () {
    let characters = "1234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN@|#&$£%*";
    let chrasCount = 10;
    let randomSerial = "";
    for (let i = 0; i < chrasCount; i++) {
        randomSerial += characters[Math.floor(Math.random() * characters.length)];
    }
    serialEL.innerHTML = randomSerial;
}