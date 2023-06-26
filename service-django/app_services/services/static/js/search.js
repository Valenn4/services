document.querySelectorAll(".service").forEach(service => {
    service.addEventListener("click", () => {
        window.location.href = '/service/'+service.id
    })
})