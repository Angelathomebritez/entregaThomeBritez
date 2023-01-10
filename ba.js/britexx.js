
let usuario = prompt("ingrese su usuario")
console.log(usuario)
while (usuario == "") {
    let usuario = prompt("por favor, ingrese su usuario para continuar")

    if (usuario != "") {
        
        let menu = parseInt(prompt(`elija la opcion que desea
            1. buscar producto
            2. salir`))
        if (menu == 2) {
            alert(`${usuario} muchas gracias por visitar nuestra tienda`)
        } else {
            let precioI = parseInt(prompt("ingrese precio aproximado"))

            if (precioI <= 2500) {
                alert(`1. conjunto trina $2000
            2. conjunto nala $2500`)
            } else if (precioI > 2500 && precioI <= 5000) {
                alert(`1. conjunto maia $2800
            2. conjunto kai $3200`)
            } else {
                alert(`lo sentimos, no hay productos a ${precioI}`)
            }
        }
    }
   
}
