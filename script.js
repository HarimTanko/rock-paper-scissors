// const findDiagonal = (a) => {
//   return Math.sqrt(2) * a;
// };

// diag = findDiagonal(9);
// console.log(diag);

// const findArea = (a, b, c) => {
//   let p = (a + b + c) / 2;
//   let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   return area;
// };

// console.log(findArea(5, 6, 7));

// const areaCirc = (r) => {
//   let area = Math.PI * (r * r);

//   let circ = 2 * Math.PI * r;

//   console.log(`the area is ${area} and the circumference is ${circ}`);
// };

// areaCirc(4);

// const largerNum = (a, b) => {
//   a > b ? console.log(a) : console.log(b);
// };

// largerNum(10, 60);

// const evenOdd = (n) => {
//   return n % 2 === 0 ? 'even' : 'odd';
// };

// console.log(evenOdd(19));

const score = {
  player: 0,
  computer: 0,
};

const game = () => {
  const playerSelection = prompt(
    'please select between rock,paper and scissors'
  );
  const computerSelection = computerPlay();

  const message = playRound(playerSelection, computerSelection);

  getWinner(message);
};

const computerPlay = () => {
  let rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
    default:
      break;
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return 'Draw';
  } else if (computerSelection == 'rock') {
    console.log(`Computer selected - ${computerSelection}`);
    return playerSelection == 'paper' ? 'You Win!' : 'You Lose!';
  } else if (computerSelection == 'paper') {
    console.log(`Computer selected - ${computerSelection}`);
    return playerSelection == 'scissors' ? 'You Win!' : 'You Lose!';
  } else if (computerSelection == 'scissors') {
    console.log(`Computer selected - ${computerSelection}`);
    return playerSelection == 'rock' ? 'You Win!' : 'You Lose!';
  }
};

const getWinner = (message) => {
  if (message === 'You Win!') {
    score.player++;
    console.log(
      `You win! score is: Player: ${score.player} - Computer: ${score.computer}`
    );
  } else if (message === 'You Lose!') {
    score.computer++;
    console.log(
      `You lose! score is: Player: ${score.player} -  Computer: ${score.computer}`
    );
  } else if (message === 'Draw') {
    console.log('This round is a draw');
  }

  return score;
};

const declareWInner = () => {
  for (let i = 0; i < 5; i++) {
    game();
  }

  if (score.player > score.computer) {
    console.log(`Player wins ${score.player} to ${score.computer}`);
  } else if (score.computer > score.player) {
    console.log(`Computer wins ${score.computer} to ${score.player}`);
  } else {
    console.log(`Game ends in a draw  ${score.player} - ${score.computer}`);
  }
};

declareWInner();
