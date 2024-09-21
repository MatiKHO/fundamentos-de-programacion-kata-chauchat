const cargador = Array(7).fill('pium!');

function chauchat(cargador) {
  if (Math.random() <= 0.8) {
    console.log("Illo, me he quedao pillá!");
    return;
  }

  for (let i = 0; i < cargador.length; i++) {
    console.log(cargador[i]);

    if ((i + 1) % 3 === 0) {
      console.log(' ');
    }
  }
}

chauchat(cargador);


document.getElementById('shootButton').addEventListener('click', () => {
    chauchat(cargador);
  });

