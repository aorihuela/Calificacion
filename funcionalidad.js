var nota;
var resultado;
var mensaje
var calificacion;
var evaluar;

function init() {
    nota = document.getElementById("nota");
    mensaje = document.getElementById("resultado");
    evaluar = document.getElementById("evaluar");
    resultado = "";
    var color = '';

    evaluar.onclick = function() {
        switch (parseInt(nota.value)) {
            case 0:
            case 1:
            case 2:
                resultado = "Muy deficiente";
                color = 'red';
                break;
            case 3:
            case 4:
            case 5:
                resultado = "Insuficiente";
                color = 'red';
                break;
            case 6:
                resultado = "Suficiente";
                color = 'orange';
                break;
            case 7:
                resultado = "Bien";
                color = 'green';
                break;
            case 8:
            case 9:
                resultado = "Notable";
                color = 'green';
                break;
            case 10:
                resultado = "Sobresaliente";
                color = 'blue';
                break;
            default:
                resultado = '';
                color = '';
                break;
        }
        mensaje.textContent = resultado;
        /*if (color != '') {
            mensaje.setattribute = color;
        }*/
    }
}