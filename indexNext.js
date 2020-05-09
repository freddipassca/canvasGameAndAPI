var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

var canvasDummy = document.createElement("canvas");
canvasDummy.id = "savedCanvas";
canvasDummy.width = 500;
canvasDummy.heigth = 500;
var savedCanvas = canvasDummy.getContext("2d");

var fondo = {
    url: "./images/tile.png",
    cargaOK: false
}

var vaca = {
    url: "./images/vaca.png",
    cargaOK: false
}

var cerdo =  {
    url: "./images/cerdo.png",
    cargaOk: false
}

var pollo = {
    url: "./images/pollo.png",
    cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca); 

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
document.addEventListener("keydown", cargarPollo);

function cargarFondo () {
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca () {
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo () {
    cerdo.cargaOK = true;
    dibujar();
}
var xpollo = 250;
var ypollo = 250;
var movimiento = 5;
function cargarPollo (evento) {
    pollo.cargaOK = true;
    // dibujar();
    papel.drawImage(pollo.imagen, xpollo, ypollo);
    switch (evento.keyCode) {
        case teclas.UP:
            papel.drawImage(canvasDummy, 0, 0);
            papel.drawImage(pollo.imagen, xpollo, ypollo-movimiento);
            ypollo = ypollo - movimiento;
        break;
        case teclas.DOWN:
            papel.drawImage(canvasDummy, 0, 0);
            papel.drawImage(pollo.imagen, xpollo, ypollo + movimiento);
            ypollo = ypollo + movimiento;
        break;
        case teclas.LEFT:
            papel.drawImage(canvasDummy, 0, 0);
            papel.drawImage(pollo.imagen, xpollo - movimiento, ypollo);
            xpollo = xpollo - movimiento;
        break;
        case teclas.RIGHT:
            papel.drawImage(canvasDummy, 0, 0);
            papel.drawImage(pollo.imagen, xpollo + movimiento, ypollo);
            xpollo = xpollo + movimiento;
        break;
    }

}

var cantidad = aleatorio(5, 25);

function dibujar(){
    if(fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0 , 0);
    }
    if(vaca.cargaOK) {
        for(i=0; i < cantidad; i++) {
            var x = aleatorio(0, 7); 
            var y = aleatorio(0, 7); 
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x , y);
        }
    }
    if(cerdo.cargaOK) {
        for(i=0; i < cantidad; i++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    // if(pollo.cargaOK) {
    //     for(i=0; i < cantidad; i++) {
    //         var x = aleatorio(0, 7);
    //         var y = aleatorio(0, 7);
    //         var x = x * 60;
    //         var y = y * 60;
    //         papel.drawImage(pollo.imagen, x, y);
    //     }
    // }
}

function aleatorio (min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}