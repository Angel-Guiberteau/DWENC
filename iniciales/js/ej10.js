function calculadora(num1, num2, operacion) {
    let resultado;
    
    switch (operacion) {

        case '+':
            return resultado = num1 + num2;

        case '-':
            return resultado = num1 - num2;

        case '*':
            return resultado = num1 * num2;

        case '/':
            if (num2 !== 0) {
                return resultado = num1 / num2;
            } else {
                return "Error: No se puede dividir por cero.";
            }

        default:
            return "Error: Operación no válida.";
    }
}

// Solicitar datos al usuario
let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce la operación que deseas realizar (+, -, *, /):");

// Llamar a la función calculadora
let resultado = calculadora(numero1, numero2, operacion);

// Mostrar el resultado
document.write('El resultado de ' + numero1 + ' ' + operacion + ' ' + numero2 + ' es: ' + resultado);
