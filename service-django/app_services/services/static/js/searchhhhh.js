document.querySelectorAll(".service").forEach(service => {
    service.addEventListener("click", () => {
        window.location.href = '/service/'+service.id
    })
    const name_service = service.childNodes[3].childNodes[3].textContent    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const coordenadas_service = document.getElementsByClassName(service.id)[0].id.split(' ')
            const lat1 = position.coords.latitude;
            const lon1 = position.coords.longitude;
            const lat2 = coordenadas_service[0]
            const lon2 = coordenadas_service[1]
            const radioTierra = 6371; // Radio de la Tierra en kilómetros
    
            // Convertir las coordenadas a radianes
            const lat1Rad = degToRad(lat1);
            const lon1Rad = degToRad(lon1);
            const lat2Rad = degToRad(lat2);
            const lon2Rad = degToRad(lon2);
        
            // Diferencia entre las coordenadas
            const latDiff = lat2Rad - lat1Rad;
            const lonDiff = lon2Rad - lon1Rad;
        
            // Aplicar la fórmula del haversine
            const a =
            Math.sin(latDiff / 2) ** 2 +
            Math.cos(lat1Rad) *
                Math.cos(lat2Rad) *
                Math.sin(lonDiff / 2) ** 2;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distancia = radioTierra * c;

            if(distancia<1){
                document.getElementsByClassName(service.id)[0].innerHTML += "menos de un km"
            } else {
                document.getElementsByClassName(service.id)[0].innerHTML += distancia.toFixed(2)+"km"
            }
        })
    } else {
        document.getElementsByClassName(service.id)[0].innerHTML = "Distancia no disponible"
    }   
})

function degToRad(deg) {
    return deg * (Math.PI / 180);
}
