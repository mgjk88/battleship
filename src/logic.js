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
    this.miss = [];
  }

  static #inGrid(x, y) {
    return x >= 0 && x < 10 && y >= 0 && y < 10;
  }

  place(x1, y1, x2, y2) {
    const isValid = (x1, y1, x2, y2) => {
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

    isValid(x1, y1, x2, y2);
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
    const isValid = (x, y) => {
      return typeof(x) === 'number' && typeof(y) === 'number' && Gameboard.#inGrid(x, y)
    };
    if(!isValid(x,y)) throw new Error("Invalid Coordinates!");
    if(this.grid[y][x] === null) {
      this.miss.push([x,y])
      return;
    };
    this.ships[this.grid[y][x]].hit();
  }

  allSunk(){
    for(let ship of this.ships){
      if(ship.isSunk() === false) return false;
    }
    return true;
  }
}

class Player{
  constructor(type){
    this.type = type;
    this.board = new Gameboard();
  }
}

export { Ship, Gameboard, Player };
