const html = document.querySelector("html")
const trocandoTema = document.querySelector("#switcher")

trocandoTema.addEventListener("change", function(){
    html.classList.toggle("white__mode")
})