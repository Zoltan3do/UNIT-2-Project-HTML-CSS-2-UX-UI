function changeColorHeader() {
    const header = document.getElementsByTagName("header")[0];
    const liList = document.querySelectorAll("header li");
    const getStarted = liList[liList.length - 1];

    window.addEventListener("scroll", function () {
        const height = document.getElementsByClassName("hero")[0].offsetHeight;
        header.style.backgroundColor = this.window.scrollY >= height ? "white" : "";
        getStarted.style.backgroundColor = this.window.scrollY >= height ? "green" : "";
    });
}


changeColorHeader();