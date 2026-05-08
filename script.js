const preguntas = [
  {
    pregunta: "¿Cuándo empezó nuestra historia?",
    opciones: [
      "9-10 de mayo",
      "7-8 de mayo",
      "11-12 de mayo",
      "14-15 de mayo"
    ],
    correcta: 0,
    mensajeCorrecto: `Exacto, Carla 💗
Para mí fue 9 de mayo, para ti fue 10 de mayo…
y para nosotros fue el inicio de esta historia tan bonita.`,
    mensajeIncorrecto: `Mmm no, mi amor…
nuestra historia empezó entre dos días especiales: uno para mí y otro para ti 💕
Inténtalo otra vez.`,
    recuerdo: "Nuestro primer hola, aunque estuvimos separados por horas y kilómetros, fue el comienzo de todo."
  },
  {
    pregunta: "¿Qué fue lo primero que sentí cuando empezamos a hablar?",
    opciones: [
      "Curiosidad",
      "Nervios",
      "Alegría",
      "Todo lo anterior"
    ],
    correcta: 3,
    mensajeCorrecto: `Sí, Carla 💗
Desde el inicio sentí curiosidad por conocerte, nervios por hablar contigo
y alegría cada vez que aparecía un mensaje tuyo.`,
    mensajeIncorrecto: `Casi, mi amor…
pero la verdad es que sentí muchas cosas bonitas al mismo tiempo 💕
Inténtalo otra vez.`,
    recuerdo: "El inicio de nuestras conversaciones."
  },
  {
    pregunta: "¿Qué hizo que Carla se volviera tan especial para mí?",
    opciones: [
      "Su forma de ser",
      "Su manera de tratarme",
      "Su sonrisa y sus detalles",
      "Todo de ella"
    ],
    correcta: 3,
    mensajeCorrecto: `Exacto, Carla 💗
No fue solo una cosa… fue todo de ti.
Tu forma de ser, cómo me tratas, tus detalles y esa manera tan bonita que tienes de hacerme sentir especial.`,
    mensajeIncorrecto: `Casi, mi amor…
pero no puedo elegir solo una cosa de ti, porque todo en ti se volvió especial para mí 💕
Inténtalo otra vez.`,
    recuerdo: "El momento en que dejaste de ser una persona más y empezaste a ser alguien muy especial para mí."
  },
  {
    pregunta: "¿Qué es lo que más me gusta de estar contigo, Carla?",
    opciones: [
      "Que puedo ser yo mismo contigo",
      "Que me haces sentir amado",
      "Que hasta los días normales se sienten especiales",
      "Todas las anteriores"
    ],
    correcta: 3,
    mensajeCorrecto: `Exacto, Carla 💗
Contigo puedo ser yo mismo, me haces sentir amado
y hasta los días más simples se vuelven especiales si estás tú.`,
    mensajeIncorrecto: `Casi, Carla…
pero la verdad es que contigo no es solo una cosa.
Todo se siente más bonito cuando estás en mi vida 💕
Inténtalo otra vez.`,
    recuerdo: "Cada momento contigo, incluso los más simples, se volvió parte de mi felicidad."
  },
  {
    pregunta: "¿Qué deseo para nosotros después de este primer año?",
    opciones: [
      "Seguir creando recuerdos juntos",
      "Cuidarnos y apoyarnos siempre",
      "Cumplir sueños juntos poco a poco",
      "Todo eso y mucho más"
    ],
    correcta: 3,
    mensajeCorrecto: `Exacto, Carla 💗
Después de este primer año, deseo que sigamos creciendo juntos,
creando recuerdos, cuidándonos, apoyándonos y cumpliendo sueños poquito a poquito.`,
    mensajeIncorrecto: `Casi, mi amor…
pero lo que deseo para nosotros es mucho más grande que una sola opción 💕
Inténtalo otra vez.`,
    recuerdo: "Este primer año no es el final de una etapa… es el comienzo de muchos momentos más contigo."
  },
  {
    pregunta: "¿Qué serie vimos juntos aunque estábamos lejos?",
    opciones: [
      "Stranger Things",
      "Bridgerton",
      "La Casa de Papel",
      "Merlina"
    ],
    correcta: 1,
    mensajeCorrecto: `Exacto, Carla 💗
Vimos Bridgerton juntos, aunque estábamos lejos,
cada uno desde su pantalla, pero sintiéndonos cerquita al verla al mismo tiempo por Netflix.

Además, siento que tienes un poquito de Eloise, Daphne y Francesca:
la fuerza y autenticidad de Eloise, la dulzura de Daphne
y esa calma especial de Francesca 💜`,
    mensajeIncorrecto: `Casi, mi princsesa…
pero esta serie era muy especial porque era tu favorita
y la vimos juntos aunque la distancia estuviera entre nosotros 💕
Inténtalo otra vez.`,
    recuerdo: "Aunque estábamos lejos, encontramos la forma de compartir algo bonito: ver tu serie favorita juntos, al mismo tiempo, como si la distancia no existiera."
  },
  {
    pregunta: "¿Qué momento especial vivimos por primera vez al cerrar el año?",
    opciones: [
      "Nuestro primer San Valentín",
      "Nuestro primer fin de año juntos",
      "Nuestro primer cumpleaños",
      "Nuestro primer viaje"
    ],
    correcta: 1,
    mensajeCorrecto: `Exacto, Carla 🥹🩷
Fue nuestro primer fin de año juntos, aunque la distancia estuviera presente.
Ese día quise recordarte lo especial que te volviste para mí y lo feliz que me hacía cerrar el año conociéndote.`,
    mensajeIncorrecto: `Casi, mi princsesa…
este recuerdo fue de una noche especial, cuando terminaba un año
y yo solo quería desearte amor, paz, felicidad y un nuevo comienzo bonito 💕
Inténtalo otra vez.`,
    recuerdo: "Nuestro primer fin de año fue especial porque, aunque no estábamos juntos físicamente, pude decirte lo agradecido que estaba de haberte conocido y lo mucho que deseaba poder verte pronto."
  }
];

const progresoPorPregunta = [14, 28, 42, 57, 71, 85, 100];

let preguntaActual = 0;
let respondioCorrectamente = false;

const pantallaInicio = document.getElementById("pantallaInicio");
const pantallaJuego = document.getElementById("pantallaJuego");
const pantallaFinal = document.getElementById("pantallaFinal");

const textoProgreso = document.getElementById("textoProgreso");
const contadorPregunta = document.getElementById("contadorPregunta");
const barraRelleno = document.getElementById("barraRelleno");

const numeroPregunta = document.getElementById("numeroPregunta");
const tituloPregunta = document.getElementById("tituloPregunta");
const contenedorOpciones = document.getElementById("contenedorOpciones");

const cajaMensaje = document.getElementById("cajaMensaje");
const mensajeRespuesta = document.getElementById("mensajeRespuesta");
const textoRecuerdo = document.getElementById("textoRecuerdo");

const btnEmpezar = document.getElementById("btnEmpezar");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnGuardar = document.getElementById("btnGuardar");
const btnReiniciar = document.getElementById("btnReiniciar");

btnEmpezar.addEventListener("click", empezarJuego);
btnSiguiente.addEventListener("click", siguientePregunta);
btnGuardar.addEventListener("click", guardarRecuerdo);
btnReiniciar.addEventListener("click", reiniciarJuego);

function empezarJuego() {
  cambiarPantalla(pantallaInicio, pantallaJuego);
  mostrarPregunta();
}

function mostrarPregunta() {
  respondioCorrectamente = false;

  const pregunta = preguntas[preguntaActual];

  numeroPregunta.textContent = `Pregunta ${preguntaActual + 1}`;
  tituloPregunta.textContent = pregunta.pregunta;
  contadorPregunta.textContent = `${preguntaActual + 1} de ${preguntas.length}`;

  contenedorOpciones.innerHTML = "";
  cajaMensaje.classList.remove("mostrar");
  mensajeRespuesta.textContent = "";
  textoRecuerdo.textContent = "";

  pregunta.opciones.forEach((opcion, indice) => {
    const boton = document.createElement("button");

    boton.classList.add("boton-opcion");
    boton.textContent = `${String.fromCharCode(65 + indice)}) ${opcion}`;

    boton.addEventListener("click", () => revisarRespuesta(indice, boton));

    contenedorOpciones.appendChild(boton);
  });
}

function revisarRespuesta(indiceSeleccionado, botonSeleccionado) {
  const pregunta = preguntas[preguntaActual];

  if (indiceSeleccionado === pregunta.correcta) {
    respondioCorrectamente = true;

    botonSeleccionado.classList.add("correcta");

    const botones = document.querySelectorAll(".boton-opcion");
    botones.forEach((boton) => {
      boton.disabled = true;
    });

    mensajeRespuesta.textContent = pregunta.mensajeCorrecto;
    textoRecuerdo.textContent = pregunta.recuerdo;
    cajaMensaje.classList.add("mostrar");

    actualizarProgreso(progresoPorPregunta[preguntaActual]);

    if (preguntaActual === preguntas.length - 1) {
      btnSiguiente.textContent = "Ver recuerdo final ✨";
    } else {
      btnSiguiente.textContent = "Siguiente recuerdo 💜";
    }
  } else {
    botonSeleccionado.classList.add("incorrecta");

    mensajeRespuesta.textContent = pregunta.mensajeIncorrecto;
    textoRecuerdo.textContent = "";
    cajaMensaje.classList.add("mostrar");

    setTimeout(() => {
      botonSeleccionado.classList.remove("incorrecta");
    }, 900);
  }
}

function siguientePregunta() {
  if (!respondioCorrectamente) {
    return;
  }

  preguntaActual++;

  if (preguntaActual >= preguntas.length) {
    mostrarFinal();
  } else {
    mostrarPregunta();
  }
}

function actualizarProgreso(valor) {
  textoProgreso.textContent = `Progreso: ${valor}%`;
  barraRelleno.style.width = `${valor}%`;
}

function mostrarFinal() {
  cambiarPantalla(pantallaJuego, pantallaFinal);
  contadorPregunta.textContent = "Final";
  actualizarProgreso(100);
  lanzarConfeti();
}

function reiniciarJuego() {
  preguntaActual = 0;
  respondioCorrectamente = false;

  actualizarProgreso(0);
  contadorPregunta.textContent = "Inicio";

  cambiarPantalla(pantallaFinal, pantallaInicio);
}

function cambiarPantalla(pantallaOcultar, pantallaMostrar) {
  pantallaOcultar.classList.remove("activa");
  pantallaMostrar.classList.add("activa");
}

function guardarRecuerdo() {
  const texto = `Progreso completado: 100%

Recuerdo final desbloqueado:
Un año de conversaciones, distancia, cariño, paciencia y momentos que significaron más de lo que imaginábamos.

Carla, llegaste al final de este pequeño recorrido.

Quise hacerte esto porque se cumplió un año desde que empezamos a hablar, y aunque muchas cosas han pasado a la distancia, cada momento compartido ha tenido un valor muy especial para mí.

No quería hacer algo exagerado ni decir cosas que todavía pertenecen al futuro, porque sé que ahora estamos en una etapa bonita, tranquila, en plan amigos, conociéndonos mejor y viendo qué puede pasar cuando por fin nos veamos en persona.

Gracias por cada conversación, por cada llamada, por cada risa, por cada momento en el que estuvimos ahí aunque fuera desde lejos.

Feliz primer año desde aquel 9-10 de mayo, Carla.
Gracias por ser parte de esta historia.`;

  const archivo = new Blob([texto], {
    type: "text/plain;charset=utf-8"
  });

  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(archivo);
  enlace.download = "recuerdo-para-carla.txt";
  enlace.click();

  URL.revokeObjectURL(enlace.href);
}

function lanzarConfeti() {
  for (let i = 0; i < 35; i++) {
    const confeti = document.createElement("span");

    confeti.textContent = ["💗", "💙", "💜", "✨", "🩷"][Math.floor(Math.random() * 5)];
    confeti.style.position = "fixed";
    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.top = "-30px";
    confeti.style.fontSize = Math.random() * 16 + 18 + "px";
    confeti.style.zIndex = "999";
    confeti.style.pointerEvents = "none";
    confeti.style.animation = `caer ${Math.random() * 2 + 3}s linear forwards`;

    document.body.appendChild(confeti);

    setTimeout(() => {
      confeti.remove();
    }, 5000);
  }
}

const estiloConfeti = document.createElement("style");

estiloConfeti.textContent = `
  @keyframes caer {
    from {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }

    to {
      transform: translateY(110vh) rotate(360deg);
      opacity: 0;
    }
  }
`;

document.head.appendChild(estiloConfeti);