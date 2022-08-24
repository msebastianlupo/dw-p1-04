"use strict";

//SE CONSIDERA EN ESTE EJERCICIO QUE HOMBRES DE EDAD = 21 YA SON MAYORES DE EDAD

let edadGeneral = 0;
let mujeres = 0;
let hombres = 0;
let edadesM = 0;
let edadesH = 0;
let menor21M = 0;
let mayorIngresadaM = -1;
let mayor21H = 0;
let menorIngresadaH = 111;

//plus ciudades
let ciudades = [];


do{
    let ciudad = prompt("Ingrese una ciudad");
    if(ciudad){
        ciudad = ciudad.trim();
        ciudad = ciudad.toLowerCase();
        if(!ciudades.includes(ciudad)){
            ciudades.push(ciudad);
        }
        let edad = parseInt(prompt("Ingrese edad"));
        if(edad < 0 || edad > 110 || isNaN(edad) || edad === null){
            alert("La edad es inválida. Los datos no se guardarán");
        }else{
            let sexo = prompt("Ingrese sexo: M o H");
                if(sexo){
                    sexo = sexo.toLowerCase();
                }
                if(sexo === "m" || sexo === "h"){
                    edadGeneral+= edad;
                    switch(sexo){
                        case "m":
                            mujeres++;
                            edadesM += edad;
                            if(edad < 21){
                                menor21M++;
                            }
                            if(edad > mayorIngresadaM){
                                mayorIngresadaM = edad;
                            }
                            break;
                        case "h":
                            hombres++;
                            edadesH += edad;
                            if(edad >= 21){
                                mayor21H++;
                            }
                            if(edad < menorIngresadaH){
                                menorIngresadaH = edad;
                            }
                            break;
                    }
                }else{
                    alert("el sexo es inválido: M o N son las únicas opciones. Los datos no se guardarán");
                }
        }
    }else{
        alert("La ciudad debe contener al menos un caracter. Los datos no se guardarán");
    }
}while(confirm("¿Continuar con la encuesta?"));

if(edadGeneral){
    let cuerpo = document.getElementsByTagName("BODY")[0];
    cuerpo.innerHTML = `<p><strong>Ciudades introducidas:</strong></p>`;
    for(let ciudad of ciudades){
        cuerpo.innerHTML += ` <span>${ciudad}</span>`;
    }

    let promedioEdad = Number((edadGeneral / (mujeres + hombres)).toFixed());
    let promedioEdadM = 0;
    let porcentajeMenor21M = 0;
    let promedioEdadH = 0;
    let porcentajeMayor21H = 0;

    if(mujeres){
        promedioEdadM = Number((edadesM / mujeres).toFixed());
        porcentajeMenor21M = Number((menor21M * 100 / mujeres).toFixed(1));
    }else{
        mayorIngresadaM = 0;
    }
    if(hombres){
        promedioEdadH = Number((edadesH / hombres).toFixed());
        porcentajeMayor21H = Number((mayor21H * 100 / hombres).toFixed(1));
    }else{
        menorIngresadaH = 0;
    }
    
    cuerpo.innerHTML += `
                            <p><strong>---ESTADÍSTICAS PARA ${hombres + mujeres} PERSONA/S---</strong></p>
                            <p><strong>promedio edad general: ${promedioEdad} años</strong></p>
                            <p><strong>promedio edad mujeres: ${promedioEdadM} años</strong></p>
                            <p><strong>promedio edad hombres: ${promedioEdadH} años</strong></p>
                            <p><strong>porcentaje mujeres menores 21 años: ${porcentajeMenor21M}%</strong></p>
                            <p><strong>porcentaje hombres mayores 21 años: ${porcentajeMayor21H}%</strong></p>
                            <p><strong>mayor edad ingresada de mujeres: ${mayorIngresadaM} años</strong></p>
                            <p><strong>menor edad ingresada de hombres: ${menorIngresadaH} años</strong></p>
                        `;
}