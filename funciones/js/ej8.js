
const mes_actual = new Date().getMonth() + 1; //Obtener el mes actual ponemos +1 porque los meses empiezan en 0

document.write("Mes actual: " + mes_actual + "<br>");
document.write(comprobarMes(mes_actual));

function comprobarMes(mes){
    
    if(mes >= 1 && mes <= 4)
        return "Primer cuatrimestre";
    else if(mes >= 5 && mes <= 8)
        return "Segundo cuatrimestre";
    else if(mes >= 9 && mes <= 12)
        return "Tercer cuatrimestre";

}