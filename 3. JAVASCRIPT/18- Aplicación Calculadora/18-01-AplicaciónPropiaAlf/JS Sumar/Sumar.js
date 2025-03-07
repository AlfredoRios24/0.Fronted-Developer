console.log("comprobar mensaje en consola");

function Sumar(){
    const calculator=document.getElementById('calculator');
    let number1 = calculator['number1'];
    let number2 = calculator['number2'];
    let resultado = parseInt(number1.value) + parseInt(number2.value);

    if (isNaN(resultado)) resultado = 'La operación no incluye Numeros';
    
    document.getElementById('resultado').innerHTML = `El resultado és ${resultado}.`;
    console.log(`Resultado: ${resultado}`);
}