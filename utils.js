function introduce() {
    const curtain = document.getElementById("curtain");
    const subinfo = document.getElementsByClassName("subinfo");
    curtain.classList.toggle("introduce");
    for (let i = 0; i < subinfo.length; i++) {
        subinfo[i].classList.toggle("introduce");
    }
}

window.addEventListener("load", introduce);