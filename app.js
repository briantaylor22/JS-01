// Brian Taylor - COM 1 - TN

// Creador de nombres de bandas aleatorios.
let bandas = [''];
function generadorBandas(array) {
    let palabras = ['Malhumorado', 'Feliz', 'Televisor', 'Robot', 'Videojuego', 'Pepino'];
    let colores = ['Azul', 'Rojo', 'Verde', 'Violeta', 'Negro', 'Amarillo'];
    let animales = ['Koala', 'Panda', 'Perro', 'Gato', 'Ballena', 'Iguana'];
    let primerPalabra = Math.floor(Math.random() * animales.length);
    let segundaPalabra = Math.floor(Math.random() * colores.length);
    let terceraPalabra = Math.floor(Math.random() * palabras.length);
    array.push(`${animales[primerPalabra]} ${colores[segundaPalabra]} ${palabras[terceraPalabra]}`);
};
generadorBandas(bandas);
console.log(bandas);



// Conversor de emociones a emoji
function conversorEmocionesAEmoji(unTexto) {
    let arreglo = unTexto.split(' ');
    let posicion = 0;
    let textoMod = '';
    switch (emocion.toLowerCase()) {
        case 'feliz':
            posicion = arreglo.lastIndexOf(`${emocion}`);
            arreglo.splice(posicion, 1, "😊");
            textoMod = arreglo.join(' ');
            break;
        case 'triste':
            posicion = arreglo.lastIndexOf(`${emocion}`);
            arreglo.splice(posicion, 1, "😔");
            textoMod = arreglo.join(' ');
            break;
        case 'sorprendido':
            posicion = arreglo.lastIndexOf(`${emocion}`);
            arreglo.splice(posicion, 1, "😲");
            textoMod = arreglo.join(' ');
            break;
        case 'enojado':
            posicion = arreglo.lastIndexOf(`${emocion}`);
            arreglo.splice(posicion, 1, "🤬");
            textoMod = arreglo.join(' ');
            break;
    }
    console.log(`Texto modificado: \n${textoMod}`);
};
emocion = 'fEliz';
let texto = `Hola mundo que tal, hoy estoy ${emocion}`;
console.log(`Texto sin modificar: \n${texto}`);
conversorEmocionesAEmoji(texto);




// Generador de historias absurdas
function generadorHistorias(historia) {
    let inicio = ['En una galaxia lejana, ', 'Hace mucho tiempo, ', 'Cerca del shopping, '];
    let elementoInesperado = ['vivian palomas violetas que comian arroz', 'se produjo un enorme estallido en el cielo', 'habia un pulpo que hablaba chino']
    let comienzo = Math.floor(Math.random() * inicio.length);
    let final = Math.floor(Math.random() * elementoInesperado.length);
    historia.push(`${inicio[comienzo]} ${elementoInesperado[final]}`);
}
let historias = [''];
generadorHistorias(historias);
console.log(historias);


// Creador de recetas culinarias del futuro
function crearReceta() {
    let ingredientes = ['20 gr de sal', '4 tentaculos de pulpo espacial', '2kg de carne de dinosaurio', '1 pollo entero', '3 huevos duros', '100 gr de arroz', '2 cangrejos gigantes', '5 huevos de avestruz', '300 gr de harina 000', 'salsa de tomate y ajo']
    let tecnicas = ['Saltear en el wok durante 20 minutos, luego dejar enfriar y servir', 'Gelatinar, meter al horno durante 4 horas y reducirlo con vino blanco, luego servir', 'Poner en el microondas durante 20 segundos, luego servir.']
    let rand1 = Math.floor(Math.random() * ingredientes.length);
    let rand2 = Math.floor(Math.random() * ingredientes.length);
    let rand3 = Math.floor(Math.random() * ingredientes.length);
    let rand4 = Math.floor(Math.random() * ingredientes.length);
    let tecn = Math.floor(Math.random() * tecnicas.length);
    console.log(`Ingredientes a utilizar: \n - ${ingredientes[rand1]} \n - ${ingredientes[rand2]} \n - ${ingredientes[rand3]} \n - ${ingredientes[rand4]}`);
    console.log(`Tecnica de preparacion: \n${tecnicas[tecn]}`);
}
crearReceta();
// Generador de planetas fantasticos 
function crearPlaneta() {
    let elementosQumicos = ['Galio', 'Mercurio', 'Carbono', 'Oxigeno', 'Zinc', 'Silicio', 'Hidrogeno', 'Hierro', 'Magnesio', 'Metano'];
    let colores = ['Azul oscuro', 'Rojo', 'Negro', 'Violeta oscuro', 'Turquesa', 'Verde claro'];
    let fenomenos = ['Lluvia de diamantes', 'Tornados de 1000 km/h', 'Auroras boreales gigantes', 'Orbita alrededor de cinco estrellas', 'Ubicado en el horizonte de sucesos de un super agujero negro'];
    let rand1 = Math.floor(Math.random() * elementosQumicos.length);
    let rand2 = Math.floor(Math.random() * elementosQumicos.length);
    let rand3 = Math.floor(Math.random() * elementosQumicos.length);
    console.log(`Elementos quimicos que predominan: \n- ${elementosQumicos[rand1]} \n- ${elementosQumicos[rand2]} \n- ${elementosQumicos[rand3]}`)
    let rand4 = Math.floor(Math.random() * colores.length);
    console.log(`Color de su atmosfera: \n${colores[rand4]}`);
    let rand5 = Math.floor(Math.random() * fenomenos.length);
    console.log(`Fenomeno destacado del planeta: \n${fenomenos[rand5]}`);
};
crearPlaneta()

// Simulador de viaje en el tiempo musical
let epocaNoventas = ['Vogue – Madonna', 'Lossing my religion – R.E.M.', 'Zombie – The Cranberries', 'Wannabe – Spice Girls'];
let epocaDosMil = ['Torero – Chayanne', 'Livin’ La Vida Loca– Ricky Martin', 'The real slim shady – Eminem', 'All the small things – Blink 182'];
let epocaActual = ['The Weeknd - Blinding Lights', 'Trueno feat. Nicki Nicole - Mamichula', 'Taylor Swift - august', 'Bad Bunny - Yo perreo sola'];
año = 2000;
function recomiendaMusica(epoca) {
    if ((epoca >= 1990) && (epoca < 2000)) {
        console.log('Canciones recomendadas de la decada de los 90')
        for (i = 0; i < epocaNoventas.length; i++) {
            console.log(epocaNoventas[i]);
        };
    } else if ((epoca >= 2000) && (epoca < 2010)) {
        console.log('Canciones recomendadas de la decada de los 2000')
        for (i = 0; i < epocaDosMil.length; i++) {
            console.log(epocaDosMil[i]);
        };
    } else if ((epoca >= 2010) && (epoca < 2025)) {
        console.log('Canciones recomendadas de la actualidad')
        for (i = 0; i < epocaActual.length; i++) {
            console.log(epocaActual[i]);
        };
    }
    else {
        console.log('Canciones sin recomendar para esa decada.')
    };
};
recomiendaMusica(año);