let numeros[1,2,3,4,5,6];
//Ejercicio 1 Recorrer los valores con un for
for (let i=0; i <numeros.length; i++){
    console.log(numeros[i]);
}

//*Recorrer los valores con un for ..of
for (let numeos of numeros){
    console.log(numero);
}

//Ejercicio 2 Escribe un programa que amacene los nombres de tres colores en un array y los muestre por pantalla mediante un bucle for..of
let colores = ["amarillo","azul","rojo"];
for (let color of colores){
    console.log(color);
}

//Ejercicio 3 Escribe un programa con un array que amacene los nombres de tres colores.A continuación,crea otro array vacío e inserta en él todos los elementos del primer array mediante un for.. of y el método push.

let colores3 = [];
for (let color of colores){
    color = colores.push(color);
}

//Ejercicio 4 Escribe un programa que dado dos arrays,devuelva el número de elementos que son iguales.

let elementos1 = ["mar","cielo","rio","sol"]
let elementos2 = ["oceano","rio","cielo"];
let contador;0
for (let element1 of elementos1) {
    for (let element2 of elementos2) {
    if (element1==element2) {
        contador++; //contador = contador +1
        repetidos.push(element1);{

        }
    }
}
console.log (El número de repetidos es $(contador))
console.log("Hay" + contador + "Elementos iguales entre los dos array.Estos don:"+ repetidos);

//Ejercicio 5: escribe un programa que amacene os objetos creados en el ejercicio anterior del proyecto dentro del array (un array por cada modelo de datos).A continuación, recorre cada uno de los arrays y muestra todas sus propiedades.












