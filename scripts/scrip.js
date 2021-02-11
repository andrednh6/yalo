/* const contenedor = document.getElementById('test'); */

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

 /* {
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