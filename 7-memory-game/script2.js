const mainEl = document.querySelector(".main");
const boxEl = document.getElementsByClassName("box");

arr = [];
for (let i = 0, a = 1 ,b =''; i < 6 * 6; i++, a === 18 ? (a = 1) : a++, arr.push(b)) {
    b = `<div class="box"><p>${a}</></div>`;
}
function toHtml(array) {
    arr.sort(function () {
        return 0.5 - Math.random();
    });
    arr.forEach(element => {
        mainEl.innerHTML += element;
    });
}
toHtml(arr);
for (const start of boxEl) {
    start.addEventListener("click", function onClick() {
        start.firstElementChild.style.display = (start.firstElementChild.style.display === '')?'block': '';
    });
}