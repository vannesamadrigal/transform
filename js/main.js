function suma() {
 var A=0; 
 var B=0;
 var suma=0;
 alert(" Por favor ingrese el primer Valor");
 A=parseInt(prompt(""));
 alert("Por favor ingrese el segundo valor");
 B=parseInt(prompt(""));
 suma= A+B;
 alert("El resultado de la suma es:"+ suma);
}
function opbasicas(){
    var A=0;
    var B=0;
    var suma=0;
    var resta=0;
    var multiplicacion=0;
    var division=0;
    alert("Por favor ingrese el primer valor");
    A=parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor");
    B=parseInt(prompt(""));
    suma=A+B;
    multiplicacion=A*B;
    division=A/B;
    resta=A-B;
    alert("El resultado de la suma es:"+ suma);
    alert("El resultado de la resta es"+ resta);
    alert("El resultado de multiplicacion es"+ multiplicacion);
    alert("El resultado de la division es"+ division);
}
function Promnotas(){
    var nota1=0;
    var nota2=0;
    var nota3=0;
    var nota4=0;
    var nota5=0;
    var nota6=0;
    var nota7=0;
    var promedio=0;
    nota1=parseInt(prompt("Ingrese la primera nota"));
    nota2=parseInt(prompt("Ingrese la segunda nota"));
    nota3=parseInt(prompt("Ingrese la tercera nota"));
    nota4=parseInt(prompt("Ingrese la cuarta nota"));
    nota5=parseInt(prompt("Ingrese la quinta nota"));
    nota6=parseInt(prompt("Ingrese la sexta nota"));
    nota7=parseInt(prompt("Ingrese la septima nota"));
    promedio=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7;
    alert("El promedio de estudiante es"+ promedio);
    if(promedio>6.1){
        alert("aprobó");
    }
    else{
        alert("Reprobó");
    }
}
function Capital(){
    var capital=0;
    var anos=0;
    var ganancia=0;
    var tiempo=0;
    var total=0;
    capital=parseInt(prompt("Ingresee el capital"));
    anos=parseInt(prompt("Ingrese los años"));
    ganancia=(capital*0,204)*anos;
    alert("Las ganancias son:"+ganancia)
    tiempo=parseInt(prompt("Ingrese el tiempo que desea dejar su capital"));
    total=(capital+ganancia);
    alert("Recibira un total de:"+total);
} 
function Mayor(){
    var num1=0;
    var num2=0;
    
    num1=parseInt(prompt("Ingrese el primer número"));
    num2=parseInt(prompt("Ingrese el segundo número"));
    
    
    if (num1>num2) {
        alert (num1 + " es mayor que " + num2);
        
    }
    else{
    
    alert("es mayor" + num2)
    alert("Ingrese valores diferentes");
    } 

    
    
    
}

function menor(){
    var num1=0;
    var num2=0;
    var num3=0;
    var menor=0;
    num1=parseInt(prompt("Ingrese el primer número"));
    num2=parseInt(prompt("Ingrese el segundo número"));
    num1=parseInt(prompt("Ingrese el primer número"));
    num3=parseInt(prompt("Ingrese el tercer número"));

     menor = (num1 < num2 && num1 < num3) ? num1 : (num2 < num3) ? num2 : num3;

    alert("El número menor es: " + menor);
}

function triangulo(){
    var B=0;
    var h=0;
    var A=0;

    B=parseInt(prompt("Ingrese el valor de la Base"));
    h=parseInt(prompt("ingrese el valor de la altura"));

    A=(B*h)/2;
    alert("El valor del área es:" + A);


} 

function nacimiento(){

    var E=0;
    var A=0;
    var an=0;

    E=parseInt(prompt("Ingrese su edad Actual"));
    A=parseInt(prompt("ingrese por favor el año actual"));

    an=(A-E);

    alert("Su año de naciemiento es: " + an);
}
function circulo(){

    var figura=document.getElementById("figura");
    figura.classList.toggle("circulo");

}
function rectangulo(){
    var figura=document.getElementById("figura");
    figura.classList.toggle("rectangulo");


}
function rombo(){
    var figura=document.getElementById("figura");
    figura.classList.toggle("rombo");

}
function gif(){
    var figura=document.getElementById("figura");
    figura.classList.toggle("gif");

}


