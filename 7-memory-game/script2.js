const mainEl = document.querySelector(".main");
const boxEl = document.getElementsByClassName("box");
const numberEl = document.getElementsByClassName("number");

arr = [];

for (let i = 0, a = 1, b = ""; i < 5 * 5; i++, a === 18 ? (a = 1) : a++, arr.push(b)) {
  b = `<div class="box"><p>${a}</p></div>`;
}

function toHtml(array) {
  arr.sort(function () {
    return 0.5 - Math.random();
  });
  arr.forEach((element) => {
    mainEl.innerHTML += element;
  });
}
toHtml(arr);

console.log(boxEl);

for (const iterator of boxEl) {
  iterator.addEventListener("click", () => {
    iterator.classList[1] === undefined
      ? iterator.classList.add("ShowFont")
      : iterator.classList.remove("ShowFont");
    console.log(iterator.classList);
    setTimeout(() => {
      const ShowFontEl = document.querySelectorAll(".ShowFont");
      console.log(ShowFontEl.length);
      if (ShowFontEl.length > 1) {
        if (ShowFontEl[0].innerHTML === ShowFontEl[1].innerHTML) {
          ShowFontEl[0].classList.add("boxMatch");
          ShowFontEl[1].classList.add("boxMatch");

          ShowFontEl[0].classList.remove("ShowFont");
          ShowFontEl[1].classList.remove("ShowFont");
          if (document.querySelectorAll(".boxMatch").length == arr.length) {
            alert("win");
          }
        } else {
          ShowFontEl[0].classList.remove("ShowFont");
          ShowFontEl[1].classList.remove("ShowFont");
        }
      }
    }, 2000);
  });
}
