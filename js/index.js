class Game {
  name;
  description;
  url;

  constructor(name, description, url) {
    this.name = name;
    this.description = description;
    this.url = url;
  }
}

let i = 10;
let games = [
  new Game(
    'Tic Tac Toe',
    'The classic Tic Tac Toe game. One player plays as 0 and the other plays as X. Play now with your friends or by yourself.',
    '../tictactoe.html'
  ),
  new Game(
    'Adventure classic',
    `A text based adventure game to pass the time for a while. You wake up in a strange place with a jar of blue slime next to you. What will this andventure lead to? Let's find out together.`,

    '../adventure.html'
  ),
  new Game(
    'Snake Xenzia',
    'The classic snake in a box game. Make the snake eat apples and you can see how your tiny snake grows into a gigantic one. But be careful not to bite yourself!',
    '../snake.html'
  ),
  new Game(
    'Tetris',
    "The classic game of Tetris. Arrange the blocks and clear the screen. Let's see how far you can go.",
    '../tetris.html'
  ),
];

let ul = document.getElementsByClassName('game-list')[0];
for (let game of games) {
  let game_link = document.createElement('a');
  game_link.href = game.url;
  game_link.setAttribute('target', '_blank');
  let name = document.createTextNode(game.name);
  game_link.appendChild(name);
  let li = document.createElement('li');

  game_link.addEventListener('mouseover', () => {
    document.getElementsByClassName('game-description')[0].innerHTML =
      game.description;
  });

  li.appendChild(game_link);
  ul.appendChild(li);
}
