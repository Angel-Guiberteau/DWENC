
let num = parseInt(prompt("Introduce un número: "));

for (let i = 0; i <= num; i++) {
    document.write(comprobar(i) + '<br>');
}

function comprobar(i) {

    if (i % 3 === 0 && i % 5 === 0) 
        return "FizzBuzz";
    else if (i % 3 === 0) 
        return "Fizz";
    else if (i % 5 === 0) 
        return "Buzz";
    else 
        return i;
    
}
