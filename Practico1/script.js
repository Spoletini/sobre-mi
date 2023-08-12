function calculadora() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    let result;

    // Validar que los operandos sean números válidos y no estén vacíos
    if (isNaN(num1) || isNaN(num2) || document.getElementById("num1").value === '' || document.getElementById("num2").value === '') {
        alert("Error: Ingrese valores numéricos válidos en ambos campos.");
        return;
    }
// elige la opcion de la operacion
    switch (operation) {
        case "suma":
            result = num1 + num2;
            break;
        case "resta":
            result = num1 - num2;
            break;
        case "multiplicacion":
            result = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {// alerta en caso que se quiera dividir por cero
                alert("Error: No se puede dividir por cero. Elija un número diferente.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Operación no válida";
    }
    
    // Validar el resultado si es demadiado grande  9999999999999
    if (result > 9999999999999 || result<9999999999999) {
        alert("Error: El resultado es demasiado grande. Intente con valores más pequeños.");
        return;
    }

   

    document.getElementById("result").textContent = result;
}
function limpiarCampos() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
}
