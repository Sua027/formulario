/*function Main(){
    var num1 = document.getElementById("num1").value;//10
    var num2 = document.getElementById("num2").value;//15
    var suma = parseInt(num1) + parseInt(num2);//25
    
    alert(suma) 
    console.log(suma)
} 

var btn = document.getElementById("btn"); 
btn.addEventListener('click', Main)*/

var btn_m = document.getElementById("btn_m")//boton_multiplicación
var btn_d = document.getElementById("btn_d")//boton_dividir
var btn_r = document.getElementById("btn_r")//boton_resta
var btn_s = document.getElementById("btn_s")//boton_suma

function multiplicacion(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1*num2)
}

function dividir (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1/num2)
}

function resta (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1-num2)
}

function suma (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    alert(num1+num2)
}


btn_m.addEventListener('click', multiplicacion)
btn_d.addEventListener('click', dividir)
btn_r.addEventListener('click', resta)
btn_s.addEventListener('click', suma)


