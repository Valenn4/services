localStorage_location = window.localStorage.getItem("location")
if(localStorage_location != null){
    document.querySelector(".location_actually").innerHTML = localStorage_location
}
/* Abrir localidades */
document.querySelector(".actually_location").addEventListener("click", () => {
    document.querySelector(".maps_options").style.display = "flex"
})

/* Al hacer click en una localidad */
document.querySelectorAll(".location").forEach(el =>{
    el.addEventListener("click", () => {
        document.querySelector(".maps_options").style.display = "none"
        window.localStorage.setItem("location", el.innerHTML)
        document.querySelector(".location_actually").innerHTML = window.localStorage.getItem("location")
    })
})

/* abrir buscador */
document.querySelector(".category").addEventListener("click", () => {
    document.querySelector(".search").style.display = 'flex'
})

/* cerrar buscador */
document.querySelector("#close").addEventListener("click", () => {
    document.querySelector(".search").style.display = 'none' 
    document.querySelector(".input_search").value = ''
})

/* coincidencias del buscador */
document.querySelector(".input_search").addEventListener("keyup", () => {
    document.querySelectorAll(".job").forEach(el => {
        if(el.innerHTML.toLowerCase().includes(document.querySelector(".input_search").value.toLowerCase())){
            el.style.display = 'flex'
        } else {
            el.style.display = 'none'
        }
        if(document.querySelector(".input_search").value == ''){
            el.style.display = 'none'
        }
    })
})

