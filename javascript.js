var palabras=prompt("Ingresar palabra");

var arrayP=palabras.split("");

var numPalabras=palabras.length;

var boton=document.getElementById("btnveri");

var letraO=new Array();

var posLetraO=new Array();

var bandera=0;

if (palabras=== 0) {
  window.alert('No ingresaste una palabra');
} 

for(i=0;i<numPalabras;i++){

  var caja= document.createElement("INPUT");

  caja.setAttribute("type","text");

  caja.setAttribute("id","d"+i);

  caja.setAttribute("name","d");

  caja.setAttribute("size","2");

  document.body.appendChild(caja);

}

for(i=0;i<numPalabras;i++){

  if(i%2!=0){

  document.getElementById("d"+i).value=arrayP[i];

  }else{

   letraO[bandera]=arrayP[i];

   posLetraO[bandera]=i;

   bandera++;

   }

}

var numCaja=letraO.length;

var cont=1;

var intentos=8;

function verificar(){

  var letra=document.getElementById("veri").value;

  for(i=0;i<letraO.length;i++){

    if(letra===letraO[i]){

      document.getElementById("d"+posLetraO[i]).value=letra;

      document.getElementById("veri").value="";

      cont++;

      numCaja--;

    }

  }
  

if(cont!=1){

  cont=1;

  }else {

        document.getElementById("veri").value="";

        intentos--;

  }

if(numCaja==0){

  document.getElementById("gana").innerHTML = "Felicidades Ganaste!";

  boton.disabled=true;

}

switch (intentos){

  case 7:

    const canva7 = document.getElementById('micanvas');

    const ctx7 = canva7.getContext('2d');

    ctx7.lineWidth = 5;// grosor

    ctx7.strokeStyle = "#564326";

    //palo

    ctx7.beginPath();

    ctx7.moveTo(20, 5);//punto inicio x=100, y=50

    ctx7.lineTo(20, 130);//punto final x=100, y=100

    ctx7.moveTo(20, 5);//punto inicio x=100, y=50

    ctx7.lineTo(100, 5);//punto final x=100, y=100

    ctx7.moveTo(40, 5);//punto inicio x=100, y=50

    ctx7.lineTo(20, 20);//punto final x=100, y=100

    ctx7.stroke();

  break;

  case 6:

    const canva6 = document.getElementById('micanvas');

    const ctx6 = canva6.getContext('2d');

    ctx6.lineWidth = 3;// grosor

    ctx6.strokeStyle = "black";

    //cara

    ctx6.beginPath();

    ctx6.arc(100,28,20,0,Math.PI*2,true); // Círculo externo

    ctx6.moveTo(110,30);

    ctx6.arc(100,30,10,0,Math.PI,false);   // Boca (contra reloj)

    ctx6.moveTo(90,24);

    ctx6.arc(89,24,3,0,Math.PI*2,true);  // Ojo izquierdo

    ctx6.moveTo(111,24);

    ctx6.arc(110,24,3,0,Math.PI*2,true);  // Ojo derecho

    ctx6.stroke();

    break;

  case 5:

    // cuerpo

    const canva5 = document.getElementById('micanvas');

    const ctx5 = canva5.getContext('2d');

    ctx5.lineWidth = 3;// grosor

    ctx5.beginPath();

    ctx5.moveTo(100, 50);//punto inicio x=100, y=50

    ctx5.lineTo(100, 100);//punto final x=100, y=100

    ctx5.stroke();

  break;

  case 4:

    const canva4 = document.getElementById('micanvas');

    const ctx4 = canva4.getContext('2d');

    ctx4.lineWidth = 3;// grosor

    ctx4.beginPath();

    //mano izquierda

    ctx4.moveTo(100, 70);//punto inicio x=100, y=50

    ctx4.lineTo(130, 50);//punto final x=100, y=100

    ctx4.stroke();

    break;

  case 3:

    const canva3 = document.getElementById('micanvas');

    const ctx3 = canva3.getContext('2d');

    ctx3.lineWidth = 3;// grosor

    ctx3.beginPath();

    //mano derech

    ctx3.moveTo(100, 70);//punto inicio x=100, y=50

    ctx3.lineTo(70, 50);//punto final x=100, y=100

    ctx3.stroke();

    break;

  case 2:

    const canva2 = document.getElementById('micanvas');

    const ctx2 = canva2.getContext('2d');

    ctx2.lineWidth = 3;// grosor

    ctx2.beginPath()

    //pie izquierdo

    ctx2.moveTo(100, 100);//punto inicio x=100, y=50

    ctx2.lineTo(70, 130);//punto final x=100, y=100

    ctx2.stroke();

    break;

  case 1:

    const canva1 = document.getElementById('micanvas');

    const ctx1 = canva1.getContext('2d');

    ctx1.lineWidth = 3;// grosor

    ctx1.beginPath()

    //pie derecho

    ctx1.moveTo(100, 100);//punto inicio x=100, y=50

    ctx1.lineTo(130, 130);//punto final x=100, y=100

    ctx1.stroke();

    alert("!PERDISTE! ");

    for(i=0;i<numPalabras;i++){//al terminar juego ponemos la palabra en caja

      document.getElementById("d"+i).value=arrayP[i];

    }

    document.getElementById("gana").innerHTML = "!PERDISTE! Ahorcado ";

    boton.disabled=true;

  break;

  }

}