var noReinas = 8;

function colocarReina(celda) {

  if (window.getComputedStyle(celda).backgroundImage == "none") {

    if (noReinas > 0 && noReinas <= 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      /* Bloqueamos renglon */
      
      var tablero = document.getElementById("tabla");
      //alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
          incrementQueenCount(tablero.rows[renglon].cells[i]);

        }

        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
          incrementQueenCount(tablero.rows[i].cells[columna]);

        }
      }
      /* Recorremos diagonales */

      var r = renglon;
      var c = columna;

      while (r >= 0 && c < 8) {
        incrementQueenCount(tablero.rows[r].cells[c]);
        tablero.rows[r].cells[c].onclick = null;
        r--;
        c++;
      }

      r = renglon + 1;
      c = columna - 1;

      while (c >= 0 && r < 8) {
        incrementQueenCount(tablero.rows[r].cells[c]);
        tablero.rows[r].cells[c].onclick = null;
        r++;
        c--;
      }

      /* Diagonal superior izquierda */

      r = renglon;
      c = columna;

      while (r >= 0 && c >= 0) {
        incrementQueenCount(tablero.rows[r].cells[c]);
        tablero.rows[r].cells[c].onclick = null;
        r--;
        c--;
      }

      /* Diagonal inferior derecha */

      r = renglon;
      c = columna;

      while (r < 8 && c < 8) {
        incrementQueenCount(tablero.rows[r].cells[c]);
        tablero.rows[r].cells[c].onclick = null;
        r++;
        c++;
      }



      noReinas--;
    }

  } else {
    celda.style = "background-image: none";
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    var tablero = document.getElementById("tabla");

    for (let i = 0; i < 8; i++) {
      if (columna != i) {
        decrementQueenCount(tablero.rows[renglon].cells[i]);
      }
      if (renglon != i) {
        decrementQueenCount(tablero.rows[i].cells[columna]);
      }
    }

    // Restaura las diagonales
    var r = renglon;
    var c = columna;

    while (r >= 0 && c < 8) {
      decrementQueenCount(tablero.rows[r].cells[c]);
      r--;
      c++;
    }

    r = renglon + 1;
    c = columna - 1;

    while (c >= 0 && r < 8) {
      decrementQueenCount(tablero.rows[r].cells[c]);
      r++;
      c--;
    }

    r = renglon;
    c = columna;

    while (r >= 0 && c >= 0) {
      decrementQueenCount(tablero.rows[r].cells[c]);
      r--;
      c--;
    }

    r = renglon;
    c = columna;

    while (r < 8 && c < 8) {
      decrementQueenCount(tablero.rows[r].cells[c]);
      r++;
      c++;
    }
    noReinas++;
  }

  document.getElementById("reinasPorColocar").innerHTML = "Reinas por colocar: " + noReinas;
  document.getElementById("reinasColocadas").innerHTML = "Reinas colocadas: " + -(noReinas - 8);

  if (noReinas == 0) {
    alert("Felicidades, has ganado");
  }
}



function soluciones(valor) {
  var celdas = document.getElementById("tabla");
  switch (valor) {
    case "1":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      var noReinas = 0;
      document.getElementById("reinasPorColocar").innerHTML = "Reinas por colocar: " + noReinas;
      document.getElementById("reinasColocadas").innerHTML = "Reinas colocadas: " + -(noReinas - 8);

      break;

    case "2":

      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      var noReinas = 0;
      document.getElementById("reinasPorColocar").innerHTML = "Reinas por colocar: " + noReinas;
      document.getElementById("reinasColocadas").innerHTML = "Reinas colocadas: " + -(noReinas - 8);
      break;

    case "3":

      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      var noReinas = 0;
      document.getElementById("reinasPorColocar").innerHTML = "Reinas por colocar: " + noReinas;
      document.getElementById("reinasColocadas").innerHTML = "Reinas colocadas: " + -(noReinas - 8);
      break;

    case "4":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "5":
      celdas.rows[0].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      var noReinas = 0;
      document.getElementById("reinasPorColocar").innerHTML = "Reinas por colocar: " + noReinas;
      document.getElementById("reinasColocadas").innerHTML = "Reinas colocadas: " + -(noReinas - 8);
      break;

    case "6":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      var noReinas = 0;
      document.getElementById("reinasPorColocar").innerHTML = "Reinas por colocar: " + noReinas;
      document.getElementById("reinasColocadas").innerHTML = "Reinas colocadas: " + -(noReinas - 8);
      break;

    default:
      alert("Solucion no disponible");
      break;
  }
}


function incrementQueenCount(celda) {
  var queenCount = parseInt(celda.getAttribute('data-queen-count') || '0');
  queenCount++;
  celda.setAttribute('data-queen-count', queenCount.toString());
  if (queenCount == 1) {
    celda.style.backgroundColor = "#ff0000";
  }
}

function decrementQueenCount(celda) {
  var queenCount = parseInt(celda.getAttribute('data-queen-count') || '0');
  queenCount--;
  celda.setAttribute('data-queen-count', queenCount.toString());
  if (queenCount == 0) {
    celda.setAttribute("onclick", "colocarReina(this)");
    celda.style.backgroundColor = "";
  }
}

function resetBoard() {
  location.reload(true);
}
document.getElementById('resetButton').addEventListener('click', resetBoard);

