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
let games = [];

while (i--) {
  games.push(
    new Game(
      'game' + i,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam vero facere corrupti minus voluptatibus aspernatur temporibus rem eaque, id rerum dignissimos repellendus? Corporis numquam molestiae repellendus rem error aut culpa quae itaque, aliquam, facilis qui labore dolores, voluptas consequatur.' +
        i,
      'https://www.google.com'
    )
  );
}

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
