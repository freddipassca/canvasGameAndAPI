var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
var fondo = {
    url: "images/tile.png",
    cargaOK: false
};

var vaca = {
    url: "images/vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "images/cerdo.png",
    cargaOK: false,
    nuevaPosicionX: 0,
    nuevaPosicionY: 0
};

var pollo = {
    url: "images/pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(1, 30);
var movimiento = 5;
var posicionActualX = 200;
var posicionActualY = 200;


var pantallazo = document.createElement("canvas");
pantallazo.id = "guardar";
pantallazo.width = 500;
pantallazo.height = 500;
var guardar = pantallazo.getContext("2d");

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo)

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}


function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (pollo.cargaOK) {
        dibujarAleatorio(pollo.imagen);
    }
    if (vaca.cargaOK) {
        dibujarAleatorio(vaca.imagen);
        guardar.drawImage(vp, 0, 0)
    }
    if (cerdo.cargaOK) {
        papel.drawImage(cerdo.imagen, 200, 200);
        document.addEventListener("keydown", moverCerdito);
    }

}

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}

function dibujarAleatorio(imagen) {
    for (var v = 0; v < cantidad; v++) {
        var x = aleatorio(0, 10);
        var y = aleatorio(0, 10);
        var x = x * 40;
        var y = y * 40;
        papel.drawImage(imagen, x, y);
    }
}

function dibujarCerdito(imagen, x, y) {
    papel.drawImage(imagen, x, y);

}

function moverCerdito(evento) {
    switch (evento.keyCode) {
        case teclas.UP:
            papel.drawImage(pantallazo, 0, 0);
            cerdo.nuevaPosicionX = posicionActualX;
            cerdo.nuevaPosicionY = posicionActualY - movimiento;
            papel.drawImage(cerdo.imagen, cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            actualizarPosiciones(cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            break;

        case teclas.DOWN:
            papel.drawImage(pantallazo, 0, 0);
            cerdo.nuevaPosicionX = posicionActualX;
            cerdo.nuevaPosicionY = posicionActualY + movimiento;
            papel.drawImage(cerdo.imagen, cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            actualizarPosiciones(cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            break;

        case teclas.LEFT:
            papel.drawImage(pantallazo, 0, 0);
            cerdo.nuevaPosicionX = posicionActualX - movimiento;
            cerdo.nuevaPosicionY = posicionActualY;
            papel.drawImage(cerdo.imagen, cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            actualizarPosiciones(cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            break;

        case teclas.RIGHT:
            papel.drawImage(pantallazo, 0, 0);
            cerdo.nuevaPosicionX = posicionActualX + movimiento;
            cerdo.nuevaPosicionY = posicionActualY;
            papel.drawImage(cerdo.imagen, cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            actualizarPosiciones(cerdo.nuevaPosicionX, cerdo.nuevaPosicionY);
            break;

        default:
            console.log(evento.keyCode);

    }

}

function actualizarPosiciones(x, y) {
    posicionActualX = x;
    posicionActualY = y;
}   
//----------------------------------------------------------------------
document.addEventListener("keyup", shot);

function shot(event) {
    if(event.keyCode == 32) {
        guardar.drawImage(vp, 0, 0)
        console.log("a ver a ver")
    }
}