//display el contenido

const app = document.querySelector("#root")

//creamos el logo
const logo = document.createElement("img")
logo.src = "images/logo.png"

//creamos el contenedor de tooodo
const container = document.createElement("div")
container.setAttribute("class", "container")

//ubicamos todo dentro del root
app.appendChild(logo)
app.appendChild(container)



//Crear un pedido y asignarle un objecto nuevo XMLHttpRequest
const request = new XMLHttpRequest()

//Abrir nueva conexión, utilizando la GET request de la pag de Studio Ghibli
request.open("GET", "https://ghibliapi.herokuapp.com/films", true)


request.onload = function(){
//empezar a acceder a los datos JSON
let data = JSON.parse(this.response) //JSON.parse analiza la respuesta

//Este if advierte que si te conectas a una pag erronea que te de "ERROR $=$", 
//va a saltar error, pero si te conecta bien, entonces te muestra todas las pelis
//o la propiedad que sea que quieras leer. (estan detalladas en la pag)
if (request.status >= 200 && request.status < 400){

    data.forEach(movie => {
        //crear un div con class "card"
        const card = document.createElement("div")
        card.setAttribute("class", "card")


    //crear un h1 y ponerle de texto el titulo de la movie
    const h1 = document.createElement("h1")
    h1.textContent = movie.title

    //crear un parrafo y ponerle de texto la descripcion de la movie
    const p = document.createElement("p")
    movie.description = movie.description.substring(0, 300) //limite de 300 caracteres
    p.textContent = `${movie.description}...` //terminar con misterio 

    //nestear las cards al container
    container.appendChild(card)

    //cada card va a contener un h1 y un p
    card.appendChild(h1)
    card.appendChild(p)
    })

} else {
    console.log("error")
 }
}
//enviar pedido
request.send()
