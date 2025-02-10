class Ship {
  constructor(length = 1) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    if (this.hits < this.length) {
      this.hits += 1;
    }
  }

  isSunk() {
    return this.hits >= this.length;
  }
}

class Gameboard {
  constructor() {
    this.ships = [];
    this.grid = new Array(10).fill(null).map(() => new Array(10).fill(null));
    this.hits = [];
    this.misses = [];
  }

  static #inGrid(x, y) {
    return x >= 0 && x < 10 && y >= 0 && y < 10;
  }

  place(x1, y1, x2, y2) {
    const coordsChkr = (x1, y1, x2, y2) => {
      if (x1 !== x2 && y1 !== y2) throw new Error("Invalid Orientation!");

      for (let arg of arguments) {
        if (
          typeof arg !== "number" ||
          !Gameboard.#inGrid(x1, y1) ||
          !Gameboard.#inGrid(x2, y2)
        )
          throw new Error("Invalid Coordinates!");
      }

      for (let x = x1; x <= x2; x += 1) {
        for (let y = y1; y <= y2; y += 1) {
          if (this.grid[y][x] !== null)
            throw new Error("Coordinates conflict with existing ship!");
        }
      }
    };

    if (x1 > x2) [x1, x2] = [x2, x1];
    if (y1 > y2) [y1, y2] = [y2, y1];

    coordsChkr(x1, y1, x2, y2);
    let constAxis = x1 === x2 ? "x" : "y";
    let len = x2 - x1 + y2 - y1 + 1;
    //at least one pair will cancel themselves out
    this.ships.push(new Ship(len));
    let idx = this.ships.length - 1;

    if (constAxis === "x") {
      for (let y = y1; y <= y2; y += 1) {
        this.grid[y][x1] = idx;
      }
    } else {
      for (let x = x1; x <= x2; x += 1) {
        this.grid[y1][x] = idx;
      }
    }
  }

  receiveAttack(x, y) {
    //hits are recorded as -1 and misses are recorded as -2 in the game grid
    const coordsChkr = (x, y) => {
      if (
        typeof x !== "number" ||
        typeof y !== "number" ||
        !Gameboard.#inGrid(x, y)
      )
        throw new Error("Invalid Coordinates!");
    };

    coordsChkr(x, y);
    if (this.grid[y][x] === null) {
      this.misses.push([x, y]);
      return;
    }
    this.ships[this.grid[y][x]].hit();
    this.hits.push([x, y]);
  }

  allSunk() {
    for (let ship of this.ships) {
      if (ship.isSunk() === false) return false;
    }
    return true;
  }
}

class Player {
  constructor(type, id) {
    this.id = id;
    this.enemy = null;
    this.type = type;
    this.board = new Gameboard();
    this.moves = new Set();
  }

  static randShips(ships, board) {
    const randOneToNine = () => Math.floor(Math.random() * 10);
    const randZeroOne = () => Math.floor(Math.random() * 2);
    for (let name of Object.keys(ships)) {
      while (true) {
        try {
          let x2 = randOneToNine();
          let y2 = randOneToNine();
          let x1 = null;
          let y1 = null;
          if (randZeroOne()) {
            x1 = x2 - ships[name] + 1;
            y1 = y2;
          } else {
            x1 = x2;
            y1 = y2 - ships[name] + 1;
          }
          board.place(x1, y1, x2, y2);
          break;
        } catch {
          continue;
        }
      }
    }
  }

  computerAttack(target) {
    if (this.type === "player")
      throw new Error("Player cannot use computer to pick attack!");

    const randOneToNine = () => Math.floor(Math.random() * 10);
    const tryOneNearHit = (hits) => {
      if (hits.length === 0) return false;
      let dirs = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ];
      for (let coord of hits) {
        let [r, c] = [coord[1], coord[0]];
        for (let dir of dirs) {
          let [dr, dc] = [dir[0], dir[1]];
          let test = [c + dc, r + dr]; //coords in form [x,y]
          if (
            test[0] >= 0 &&
            test[0] < 10 &&
            test[1] >= 0 &&
            test[1] < 10 &&
            !this.moves.has(`${test[0]}${test[1]}`)
          ) {
            target.board.receiveAttack(test[0], test[1]);
            this.moves.add(`${test[0]}${test[1]}`);
            return true;
          }
        }
      }
      return false;
    };

    let hits = target.board.hits;

    if (!tryOneNearHit(hits)) {
      while (true) {
        let [x, y] = [randOneToNine(), randOneToNine()];
        if (!this.moves.has(`${x}${y}`)) {
          target.board.receiveAttack(x, y);
          break;
        }
      }
    }

    return;
  }
}

export { Ship, Gameboard, Player };
