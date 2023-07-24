// set main margin top
function setMainMarginTop() {
    let nav = document.getElementById("navbar");
    let main = document.getElementById("main");
    main.style = `margin-top: calc(${nav.offsetHeight}px + 3rem);`;
}
setMainMarginTop();
window.addEventListener("resize", () => {
    setMainMarginTop();
});