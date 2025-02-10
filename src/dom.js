import { Player } from "./logic.js";

const render = (player, shipVis) => {
  let playerDiv = document.querySelector(`#${player.id}`);
  let playerName = document.querySelector(`#${player.id}-name`);
  let gridData = player.board.grid;
  let grid = document.querySelector(`#${player.id}-grid`);

  const progressGame = (event) => {
    let cell = event.target;
    let [x, y] = [parseInt(cell.dataset.col), parseInt(cell.dataset.row)];
    if (player.enemy.moves.has(`${x}${y}`)) return;
    player.board.receiveAttack(x, y);
    player.enemy.moves.add(`${x}${y}`);
    updateGrid(player);
    if (player.board.allSunk()) endGame(player.enemy);
    player.computerAttack(player.enemy);
    updateGrid(player.enemy);
    if (player.enemy.board.allSunk()) endGame(player);
  };

  const updateGrid = (player) => {
    let hits = player.board.hits;
    let misses = player.board.misses;

    for (let hit of hits) {
      let [x, y] = hit;
      let coord = document.querySelector(
        `#${player.id} button[data-row='${y}'][data-col='${x}']`,
      );
      if (coord === null) throw new Error("wrong selector");
      coord.classList.add("hit");
    }

    for (let miss of misses) {
      let [x, y] = miss;
      let coord = document.querySelector(
        `#${player.id} button[data-row='${y}'][data-col='${x}']`,
      );
      if (coord === null) throw new Error("wrong selector");
      coord.classList.add("miss");
    }
  };

  const genGrid = (data, vis) => {
    let grid = document.createElement("div");
    if (!vis) grid.addEventListener("click", progressGame);
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    for (let i = 0; i < 11; i += 1) {
      let label = document.createElement("p");
      if (i !== 0) label.textContent = letters[i - 1];
      grid.appendChild(label);
    }

    for (let row = 0; row < 10; row += 1) {
      let label = document.createElement("p");
      label.textContent = row + 1;
      grid.appendChild(label);
      for (let col = 0; col < 10; col += 1) {
        let status = data[row][col];
        let cell = document.createElement("button");
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.classList.add("cell");
        if (status !== null && vis) cell.classList.add("ship");
        grid.appendChild(cell);
      }
    }
    grid.classList.add("grid");
    return grid;
  };

  if (playerName === null) {
    let name = document.createElement("h2");
    name.textContent = player.type;
    playerDiv.appendChild(name);
  }

  if (grid === null) {
    grid = genGrid(gridData, shipVis);
    grid.id = `#${player.id}-grid`;
    playerDiv.appendChild(grid);
  }
};

const startGame = () => {
  let dialog = document.querySelector("dialog");
  let btn = document.createElement("button");
  btn.textContent = "start";

  dialog.innerHTML = "";

  let msg = document.createElement("h1");
  msg.textContent = "BATTLESHIP!";
  dialog.append(msg, btn);

  const dialogClose = () => {
    let playerCntr = document.querySelectorAll('.player-cntr');
    for(let node of playerCntr) node.innerHTML = '';
    let ships = {
      carrier: 5,
      battleship: 4,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    };

    let human = new Player("human", "player-one");
    let computer = new Player("computer", "player-two");

    human.enemy = computer;
    computer.enemy = human;

    //random placement
    Player.randShips(ships, human.board);
    Player.randShips(ships, computer.board);
    render(human, true);
    render(computer, false);
    dialog.close();
  };
  btn.addEventListener("click", dialogClose);
  dialog.show();
};

const endGame = (winner) => {
  let dialog = document.querySelector("dialog");
  let btn = document.createElement("button");

  dialog.innerHTML = "";

  btn.textContent = "play again?";

  let msg = document.createElement("h1");
  if (winner !== null) msg.textContent = `${winner.type} wins!`;
  else msg.textContent = "play again soon!";
  dialog.append(msg, btn);

  const dialogClose = () => {
    startGame();
  };
  btn.addEventListener("click", dialogClose);
  dialog.show();
};

export { startGame };
