const canvas = document.getElementById('Flor');
const ctx = canvas.getContext('2d');

function DibujarPetalo(x, y, RadioX, scala, Rotacion, color, pasos) {
    const Numero = scala;
    const AnguloIncrement = (Math.PI / pasos) * 2;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Rotacion);
    ctx.scale(1, Numero);

    for (let i = 0; i <= pasos; i++) {
        const AnguloActual = i * AnguloIncrement;
        const currentRadius = Math.sin(AnguloActual) * RadioX;
        const PuntoY = Math.sin(AnguloActual) * currentRadius;
        const PuntoX = Math.cos(AnguloActual) * currentRadius;

        // Cambia el diseño del pétalo, por ejemplo:
        ctx.beginPath();
        ctx.ellipse(PuntoX, PuntoY, 20, 40, 0, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }

    ctx.restore();
}

function DibujarFlor(x, y, NumeroPetalos, RadioXPetalo, RadioYPetalo, AltoTrazo) {
    // Tallo
    const PasosTallo = 50;
    const AltoTallo = AltoTrazo / PasosTallo;
    let NuevaY = y;

    const DibujarTallo = () => {
        if (NuevaY < y + AltoTrazo) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, NuevaY);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'black';
            ctx.stroke();
            NuevaY += AltoTallo;
            setTimeout(DibujarTallo, 100);
        } else {
            // Dibuja los pétalos en el tallo
            const Pasos = 50;
            let CuantosPasos = 0;
            function DibujarPetalosTallo() {
                if (CuantosPasos <= Pasos) {
                    const PetaloY = y + 250 - RadioYPetalo;
                    const PetaloY2 = y + 200 - RadioYPetalo;
                    DibujarPetalo(500, PetaloY, 15, 2, 300, 'red', CuantosPasos);
                    DibujarPetalo(470, PetaloY2, 15, 2, 300, 'red', CuantosPasos);
                    CuantosPasos++;
                    setTimeout(DibujarPetalosTallo, 100);
                }
            }
            DibujarPetalosTallo();
        }
    };
    DibujarTallo();

    const AnguloIncrement = (Math.PI * 2) / NumeroPetalos;
  
    let contadorPetalos = 0;
    function dibujarSiguientePetalo() {
        if (contadorPetalos <= NumeroPetalos) {
            const Angulo = contadorPetalos * AnguloIncrement;
            DibujarPetalo(x, y, RadioXPetalo, 2, Angulo, 'red', 100);
            contadorPetalos++;
            setTimeout(dibujarSiguientePetalo, 1000); 
        }
        // Dibuja el centro de la flor con un diseño personalizado
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
    dibujarSiguientePetalo();
}

DibujarFlor(500, 100, 6, 30, 100, 200);
