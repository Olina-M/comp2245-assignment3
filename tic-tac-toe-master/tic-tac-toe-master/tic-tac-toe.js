document.addEventListener('DOMContentLoaded', function() {
  let squares = document.querySelectorAll('#board > div');
  let Xturn = true;
  let gameState = new Array(9).fill(null);
  
  squares.forEach(function (square, index) {
    square.className = 'square';
    square.addEventListener('click', function() {

      if (!gameState[index]) {
        gameState[index] = Xturn ? 'X' : 'O';
        square.textContent = gameState[index];
        square.classList.add(Xturn ? 'X' : 'O');
        Xturn = !Xturn;
      }
    })
  })
})


