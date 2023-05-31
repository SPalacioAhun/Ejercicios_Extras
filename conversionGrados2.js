//Ya sabemos, gracias al ejercicio 3, convertir de Fahrenheit a Celsius. 
//¿Cómo hacemos la conversión de Celsius a Fahrenheit?  Fahrenheit = Celsius × 9/5 + 32

let celsius = 10
let fahrenheit = (celsius * 9/5) + 32
console.log(fahrenheit)

//Continuando con lo anterior, tenemos una tabla de las temperaturas medias por mes de los doce meses 
//en grados Fahrenheit; cómo hacemos para calcular el promedio anual en Celsius? 
//celsius = (fahrenheit - 32) * 5/9

let tempF = [68, 72, 65, 70, 75, 62, 79, 71, 66, 73, 67, 74]

let tempCel = 0;
for (let i = 0; i < tempF.length; i++) {
    
let cel = (tempF[i] - 32) * 5/9;
tempCel += cel;

}

const promedioCelsius = tempCel / tempF.length
console.log(promedioCelsius)

    

//argentinaPrograma2023
