
/*------------Ingreso de datos para acceder al programa--------------*/
let usuario = "clm@gmail.com"
let password = "clm1234"

let usuarioIngreso = ""
let passwordIngreso = ""
let intentos = 3

/*------------Se corrobora los datos y se cuenta la cantidad de intentos de ingreso --------------*/
do {
    usuarioIngreso = prompt("Ingrese Su Usuario")
    passwordIngreso = prompt("ingrese Su clave")
    intentos--

} while (usuarioIngreso != usuario && passwordIngreso != password && intentos > 0)

if (usuario === usuarioIngreso && password === passwordIngreso) {
    alert("Bienvenido al Programa para calcular el área de poligonos")

    let numberEntrada = Number(prompt("Coloque un numero para designar el área a calcular\n Área de un cuadraro #1 \n Área de un Rectángulo  #2 \n Área de un paralelogramo #3 \n Área de un  Triángulo  #4 \n Área de un Circulo #5"))

    /*------------ se produce la elección de un numero para elegir el Poligono a cálcular --------------*/
    switch (numberEntrada) {

        case 1:
            alert("calularemos el área de Cuadrado");
            let lado1 = Number(prompt("ingrese lado de lado 1"));
            let lado2 = Number(prompt("ingrese lado de lado 2"));

            if (lado1 == 0 || lado2 == 0) {
                alert("Los valores no deben ser Cero")
            } else {
                let areaCuadrado = lado1 * lado2;
                alert("El Àrea del cuadrado es " + areaCuadrado)

            }
            break;

        case 2:
            alert("calularemos el área de Rectangulo");
            let alturaRectangle = Number(prompt("ingrese lado de Altura"));
            let baseRectangle = Number(prompt("Ingrese Lado de Base"));
            if (alturaRectangle == 0 || baseRectangle == 0) {
                alert("Los valores no deben ser Cero")
            } else {
                let areaCuadrado = alturaRectangle * baseRectangle;
                alert("El Àrea del Rectangulo es " + areaCuadrado)

            }
            break;

        case 3:
            alert("calularemos el área de Paralelogramo");
            let alturaParalelo = Number(prompt("ingrese lado de Altura"));
            let baseParalelo = Number(prompt("Ingrese Lado de Base"));
            if (alturaParalelo == 0 || baseParalelo == 0) {
                alert("Los valores no deben ser Cero")
            } else {
                let areaParalelo = alturaParalelo * baseParalelo;
                alert("El Àrea del Paralelogramo es " + areaParalelo)

            }
            break;

        case 4:
            alert("calularemos el área de Triangulo");
            let alturTriangulo = Number(prompt("ingrese lado de Altura del triangulo"));
            let baseTriangulo = Number(prompt("Ingrese Lado de Base de triango"));

            if (alturTriangulo == 0 || baseTriangulo == 0) {
                alert("Los valores no deben ser Cero")
            } else {
                let areaTriangulo = (alturTriangulo * baseTriangulo) / 2;
                alert("El Àrea del Triangulo es " + areaTriangulo)

            }
            break;

        case 5:
            alert("calularemos el área de Circulo");
            let radio = parseFloat(prompt("ingrese el Radio del Circulo"));

            if (radio == 0) {
                alert("Los valores no deben ser Cero")
            } else {
                let areaTriangulo = (radio * radio) * 3.14;
                alert("El Àrea del Triangulo es " + areaTriangulo)

            }
            break;

        default:
            alert("Esos numeros no estan contemplados")
    }

} else {
    alert("Ya probaste 3 veces, intentá más tarde")
}


