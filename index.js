let homeEl = document.querySelector(".Home-el")
let fundadoresEl = document.querySelector(".fundadores-el")
let tabernerosEl = document.querySelector(".Taberneros-el")


let taberneroscontainerEl = document.querySelector(".taberneros-container")
let textocontainerEl = document.querySelector(".texto-container")
let fundadorescontainerEl = document.querySelector(".fundadores-container")

function fundadores() {
    textocontainerEl.classList.add("nodisplay")
    textocontainerEl.classList.remove("display")
    fundadorescontainerEl.classList.add("display")
    fundadorescontainerEl.classList.remove("nodisplay")
    taberneroscontainerEl.classList.add("nodisplay")
    taberneroscontainerEl.classList.remove("display")
}
function home() {
    textocontainerEl.classList.remove("nodisplay")
    textocontainerEl.classList.add("display")
    fundadorescontainerEl.classList.add("nodisplay")
    fundadorescontainerEl.classList.remove("display")
    taberneroscontainerEl.classList.add("nodisplay")
    taberneroscontainerEl.classList.remove("display")
}
function taberneros() {
    textocontainerEl.classList.add("nodisplay")
    textocontainerEl.classList.remove("display")
    fundadorescontainerEl.classList.add("nodisplay")
    fundadorescontainerEl.classList.remove("display")
    taberneroscontainerEl.classList.remove("nodisplay")
    taberneroscontainerEl.classList.add("display")
}
fundadoresEl.addEventListener("click", fundadores)
homeEl.addEventListener("click", home)
tabernerosEl.addEventListener("click", taberneros)
