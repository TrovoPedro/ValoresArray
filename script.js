valores = [];

valores[0] = document.getElementById('caixa').value;
valores[1] = document.getElementById('input2').value;
valores[2] = document.getElementById('input3').value;
valores[3] = document.getElementById('input4').value;
valores[4] = document.getElementById('input5').value;

function exibir() {

    document.getElementById('resultado').innerText = valores[0];
    document.getElementById('resultado').innerText = valores[1];
    document.getElementById('resultado').innerText = valores[2];
    document.getElementById('resultado').innerText = valores[3];
    document.getElementById('resultado').innerText = valores[4];


    valores[0] = document.getElementById('caixa').value
    document.getElementById('resultado').innerText = valores[0]

    valores[1] = document.getElementById('input2').value
    document.getElementById('resultado1').innerText = valores[1]

    valores[2] = document.getElementById('input3').value
    document.getElementById('resultado2').innerText = valores[2]

    valores[3] = document.getElementById('input4').value
    document.getElementById('resultado3').innerText = valores[3]

    valores[4] = document.getElementById('input5').value
    document.getElementById('resultado4').innerText = valores[4]

}
