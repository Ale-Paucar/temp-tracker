const claveApi = "e51a25670bce4e6e95f15153261904";
const idioma = "es";
const inpCiudad = document.getElementById("input-ciudad");

async function obtenerClima() {
    const ciudad = inpCiudad.value

    if(!ciudad){
        alert("¡Por favor, ingresa una ciudad!")
        return;
    }
    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`
    const res = await fetch(apiClimaActual);
    let data = await res.json();
    mostrarClima(data)
}

inpCiudad.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        obtenerClima();
    }
});

function mostrarClima(data) {
    document.querySelector(".clima-icono").src = data.current.condition.icon ;
    document.querySelector(".clima-texto").innerHTML = data.current.condition.text;
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".ciudad").innerHTML = data.location.name;
    document.querySelector(".humedad" ).innerHTML = data.current.humidity + '%';
    document.querySelector(".viento").innerHTML = data.current.wind_kph + "km/h";
}