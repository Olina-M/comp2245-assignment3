document.addEventListener('DOMContentLoaded', function() {
  let squares = document.querySelectorAll('#board > div');
  let Xturn = true;
  let gameState = new Array(9).fill(null);

  let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6] ];

  function winner(player, index) {
    for (let combination of winningCombinations) {
      let [a, b, c] = combination;
      if (gameState[a] === player && gameState[b] === player && gameState[c] === player) {
        return true;
      }
    }
    return false;
  }
  
  squares.forEach(function (square, index) {
    square.className = 'square';
    square.addEventListener('mouseover', function (square) {
      square.target.classList.add('hover');
    })

    square.addEventListener('mouseout', function(square) {
      square.target.classList.remove('hover');
    })

    square.addEventListener('click', function() {

      if (!gameState[index]) {
        let player = Xturn ? 'X' : 'O';
        gameState[index] = player;
        square.textContent = player;
        square.classList.add(player);
        Xturn = !Xturn;

        if (winner(player, index)) {
          let message = `Congratulations! ${player} is the Winner!`;
          let status = document.getElementById('status');
          status.textContent = message;
          status.classList.add('you-won');
        }
      }
    });
  });

  const newGame = document.querySelector('.controls button.btn');
  newGame.addEventListener('click', resetGame);

  function resetGame() {
    squares.forEach(function (square) {
      square.textContent = '';
      square.className = 'square';
    });

    gameState.fill(null);
    let status = document.getElementById('status');
    status.textContent = "Move your mouse over a square and click to play an X or an O.";
    status.classList.remove('you-won');
    Xturn = true;
  }
});













