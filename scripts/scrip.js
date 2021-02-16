/* const contenedor = document.getElementById('test'); */
//Una vez que mande el siguiente se debe activar el siguiente form y asi dos veces mas,
//recien al enviar deberiamos poder ver el resultado general



function verificarRespuestas() {
  const total = 40;
  let puntosTelescopica = 0;
  let puntosGranAngular = 0;

  let puntosDependiente = 0;
  let puntosColaborador = 0;
  let puntosAutonomo = 0;

  let puntosVisual = 0;
  let puntosAuditiva = 0;
  let puntosCinestetica = 0;

  let puntosGlobal = 0;
  let puntosAnalitica = 0;
  
  const myForm = document.forms["quizForm"];
  //prestar atencion
  const telescopica = ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]
  const granAngular = ["b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b"]
  //traducir
  const dependiente = ["c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c"]
  const colaborador = ["d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d","d"]
  const autonomo =    ["e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e","e"]
  //relacionar
  const visual =      ["f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f"]
  const auditiva =    ["g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g"]
  const cinestetica = ["h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h"]
  //comprender
  const global =      ["i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i","i"]
  const analitica =   ["j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j","j"]
 
  for(let i = 1; i <= total; i++){
    if (myForm["p"+ i].value === null || myForm["p" + i].value === "") {
      alert("Por favor responde la pregunta " + i);
      return false;
    } else {
      switch (myForm["p"+ i].value) {
         case telescopica[i - 1]:
           puntosTelescopica++;
           break;
         case granAngular[i - 1]:
           puntosGranAngular++;
           break;
         case dependiente[i - 1]:
           puntosDependiente++;
           break;
         case colaborador[i - 1]:
           puntosColaborador++;
           break;
         case autonomo[i - 1]:
           puntosAutonomo++;
           break;
         case visual[i - 1]:
           puntosVisual++;
           break;
         case auditiva[i - 1]:
           puntosAuditiva++;
           break; 
         case cinestetica[i - 1]:
           puntosCinestetica++;
           break; 
         case global[i - 1]:
           puntosGlobal++;
           break;
        case analitica[i - 1]:
           puntosAnalitica++;
      }
    }
  }

       // if(myForm["p" + i].value === telescopica[i - 1]){
       //   puntosTelescopica++;
       // } else {
       //   if(myForm["p" + i].value === granAngular[i - 1]){
       //     puntosGranAngular++;
       //   }
       // }
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = '<h3>Podemos representar el aprendizaje y comprensión en 4 procesos secuenciales:  <br/> <span> 1. Cómo presta atención a la nueva información o aprendizaje.<br/> 2. Cómo traduce lo que ve, oye y siente, y le encuentra sentido.<br/> 3. Cómo relaciona lo presentado con lo que ya sabe.<br/> 4. Cómo comprende o sintetiza la información, y la extrapola para utilizarla de inmediato o en el futuro.<br/><br/>Prestar atención (motivación para aprender)<br/>' + puntosTelescopica + '/8 --> Telescopica<br/>' + puntosGranAngular + '/8 --> Gran angular <br/><br/>Traducir (Dependencia - independencia en el aprendizaje)<br/>' + puntosDependiente + '/8 --> Dependiente <br/>' + puntosColaborador + '/8 --> Colaborador <br/>' + puntosAutonomo + '/8 --> Autonomo <br/><br/>Relacionar (Percepción de los datos)<br/>' + puntosVisual + '/8 --> Visual <br/>' + puntosAuditiva + '/8 --> Auditiva <br/>' + puntosCinestetica + '/8 --> Cinestética <br/><br/>Comprender (Síntesis de la información)<br/>' + puntosGlobal + '/8 --> Global <br/>' + puntosAnalitica + '/8 --> Analítica </h3>';
  return false
}
  
 


/*

const preguntas = [
  "1 Prestar Atención",
  "2 Prestar Atención",
  "3 Prestar Atención"
  ];
  const respuestas = [
    ["No me gusta participar en seminarios o cursos de formación, a menos que el tema realmente me interese.","Con frecuencia, me ditraigo cuando el entrenador está hablando."],
    ["Por lo general, puedo concentrarme siempre que quiero.","Por lo general, un entonrno ruidoso me molesta y me desconcentra."],
    ["Me gusta saber qué es lo que voy a conseguir antes de prestar toda mi atención.","Si estoy en grupo, no suelo hacer preguntas incluso aunque no comprenda."]

  ];

  const indiceAleatorio = Math.floor(Math.random()*preguntas.length);

  document.getElementById('test').innerHTML = preguntas[indiceAleatorio];

  {
    pregunta: "1 Prestar Atención",
    respuestas: {
      b:"No me gusta participar en seminarios o cursos de formación, a menos que el tema realmente me interese.",
      a:"Con frecuencia, me ditraigo cuando el entrenador está hablando."
    },
    respuestaTelescopica: "b"
  },
  {
    pregunta: "2 Prestar Atención",
    respuestas: {
      b:"Por lo general, puedo concentrarme siempre que quiero.",
      a:"Por lo general, un entonrno ruidoso me molesta y me desconcentra."
    },
    respuestaTelescopica: "b"
  },
   {
    pregunta: "3 Prestar Atención",
    respuestas: {
      b:"Me gusta saber qué es lo que voy a conseguir antes de prestar toda mi atención.",
      a:"Si estoy en grupo, no suelo hacer preguntas incluso aunque no comprenda."
    },
    respuestaTelescopica: "b"
  },
  {
    pregunta: "4 Prestar Atención",
    respuestas: {
      b:"Con frecuencia, me dedico a hacer garabator o a dibujar.",
      a:"Siempre que lo estimo oportuno, hago preguntas para clarificar la información."
    },
    respuestaTelescopica: "a"
  },
  {
    pregunta: "5 Prestar Atención",
    respuestas: {
      b:"En mi opinión, los diagramas y los modelos son útiles en la formación.",
      a:"Con frecuencia, las personas no se están quietas en el aula."
    },
    respuestaTelescopica: "b"
  },
  {
    pregunta: "6 Prestar Atención",
    respuestas: {
      b:"Me gusta empezar y terminar a tiempo, y trabajar duro durante la sesión.",
      a:"Con frecuencia, pienso en cosas distintas a las que se están discutiendo en el aula o seminario."
    },
    respuestaTelescopica: "b"
  },
  {
    pregunta: "7 Prestar Atención",
    respuestas: {
      b:"Algunas veces, necesito que me repitan las instrucciones para las actividades.",
      a:"Me molestan mucho los participantes que hablan mucho y no prestan atención."
    },
    respuestaTelescopica: "a"
  },
  {
    pregunta: "8 Prestar Atención",
    respuestas: {
      b:"Muchos presentadores no consiguen captar mi atención.",
      a:"Intento identificar la relevancia del material que me presentan."
    },
    respuestaTelescopica: "a"
  } 
];

function showTest(){
  const preguntasYrespuestas = [];
  
  preguntas.forEach((preguntaActual, numeroDePregunta) =>{
    const respuestas = [];
    for(letraRespuesta in preguntaActual.respuestaTelescopica){
      respuestas.push(
        `<label>
            <input type ="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
            ${letraRespuesta} : ${preguntaActual.respuestaTelescopica[letraRespuesta]}
        </label>`
      );
      }
      preguntasYrespuestas.push(
        `<div class="question"> ${preguntaActual.pregunta} </div>
        <div class="respuestas"> ${respuestas.join('')}</div>
        `
      );
  });

  contenedor.innerHTML = preguntasYrespuestas.join('');
}

showTest(); */