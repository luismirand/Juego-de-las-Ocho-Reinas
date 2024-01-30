var noReinas = 8;

function colocarReina(celda) {
  /*alert("Le dieron click a la celda"+celda);*/

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
          
          incrementQueenCount(tablero.rows[renglon].cells[i]);
        }
        
        if (renglon != i) {
          incrementQueenCount(tablero.rows[i].cells[columna]);
        }
      }
      /* Recorremos diagonales */

      var r = renglon;
      var c = columna;

      while (r >= 0 && c < 8) {
        incrementQueenCount(tablero.rows[r].cells[c]);

        r--;
        c++;
      }

      r = renglon + 1;
      c = columna - 1;

      while (c >= 0 && r < 8) {
        incrementQueenCount(tablero.rows[r].cells[c]);
        r++;
        c--;
      }

      /* Diagonal superior izquierda */

      r = renglon;
      c = columna;

      while (r >= 0 && c >= 0) {
        incrementQueenCount(tablero.rows[r].cells[c]);
        r--;
        c--;
      }

      /* Diagonal inferior derecha */

      r = renglon;
      c = columna;

      while (r < 8 && c < 8) {
        incrementQueenCount(tablero.rows[r].cells[c]);
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

}


function soluciones(value) {
  var celdas = document.getElementsByTagName("tabla");
  celda.rows[0].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";

}

function incrementQueenCount(celda) {
  var queenCount = parseInt(celda.getAttribute('data-queen-count') || '0');
  queenCount++;
  celda.setAttribute('data-queen-count', queenCount.toString());
  if (queenCount == 1) {
    //celda.removeAttribute("onclick");
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
