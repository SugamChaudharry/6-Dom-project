const startEl = document.getElementsByClassName("start");

for (const start of startEl) {
    start.addEventListener("click", function onClick() {
        start.innerHTML = (start.innerHTML === '')?`<p>START</p>`:'';
        match()
    });
}

function match() {
    if (startEl[0].innerHTML === startEl[1].innerHTML && startEl[0].innerHTML !== '' && startEl[1].innerHTML !== '') {
        setTimeout(() => {
            window.location.pathname = "7-memory-game/game.html";
        }, 1000);

    }
}