// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCrinacas = document.getElementById("criancas");
let inputtempo = document.getElementById("tempo");

let resultado = document.getElementById("resultado")

function calcular () {
    console.log("Calculando..");

    let adultos = inputAdultos.value;
    let criancas = inputCrinacas.value;
    let tempo = inputtempo.value;


    let qtdTotalCarne = carnePP(tempo) * adultos + ((carnePP(tempo)/2) * criancas);
    let qtdTotalCerveja = cervejaPP(tempo) * adultos ;
    let qtdTotalBebidas = bebidasPP(tempo) * adultos + ((bebidasPP(tempo)/2) * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Bebidas</p>`

}

function carnePP (tempo){
    if(tempo >= 6){ 
        return  650;
    }else{
        return 400;
    }

}

function cervejaPP (tempo){
    if(tempo >= 6){ 
        return  2000;
    }else{
        return 1200;
    }

}

function bebidasPP (tempo){
    if(tempo >= 6){ 
        return  1500;
    }else{
        return 1000;
    }

}
