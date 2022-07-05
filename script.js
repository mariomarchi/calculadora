function insertNum(num) {
    var numero = document.querySelector("#screen").innerHTML;
    document.querySelector("#screen").innerHTML = numero + num;
}

function clearResult()
{
    document.querySelector("#screen").innerHTML = "";
}

function backSpace()
{
    var resultado = document.querySelector("#screen").innerHTML
    document.querySelector("#screen").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcularOperacao()
{
    var resultado = document.querySelector("#screen").innerHTML;
    if(resultado)
    {
        document.querySelector("#screen").innerHTML = eval(resultado);
        return
    }
    else(resultado)
    {
    var resultado = document.querySelector("#screen").innerHTML = "";
    alert("Nada para calcular, digite sua operação matemática")
    }
}