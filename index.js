let peso = 100.00;
let altura = 1.77;
let result = peso / (altura * altura);

let imc = result.toFixed(2);


if (imc <= 16) {
    console.log('Seu IMC é: ' + imc + ' - Magreza grave')
} else if (imc > 16 && imc <= 16.99) {
    console.log('Seu IMC é: ' + imc + ' - Magreza moderada')
} else if (imc > 17 && imc <= 18.49) {
    console.log('Seu IMC é: ' + imc + ' - Magreza leve')
} else if (imc > 18.5 && imc <= 24.99) {
    console.log('Seu IMC é: ' + imc + ' - Saudável')
} else if (imc > 25 && imc <= 29.99) {
    console.log('Seu IMC é: ' + imc + ' - Sobrepeso')
} else if (imc > 30 && imc <= 34.99) {
    console.log('Seu IMC é: ' + imc + ' - Obesidade grau I')
} else if (imc > 35 && imc <= 39.99) {
    console.log('Seu IMC é: ' + imc + ' - Obesidade grau II')
} else {
    console.log('Seu IMC é: ' + imc + ' - Obesidade grau III')
}
