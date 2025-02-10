import { Ship, Gameboard} from "../src/logic.js";

describe("class ship", () => {
  test(".hit() incr ship.hits", () => {
    let ship = new Ship(1);
    expect(ship.hits).toBe(0);
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  test(".isSunk() is true when ship.hits >= ship.length ", ()=>{
    let ship = new Ship(1);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});

describe.only("class Gameboard", () => {
    let board = new Gameboard();
    test(".place(x1,y1,x2,y2) record ship placement",()=>{
        board.place(0,0,0,0);
        expect(board.ships.length).toBe(1);
    });

    test(".place(x1,y1,x2,y2) record ship correct ship length",()=>{
        expect(board.ships[0].length).toBe(1);
    });

    test(".place(x1,y1,x2,y2) detects invalid ship orientation", () => {
      expect(() => board.place(1,2,3,4)).toThrow("Invalid Orientation!");
    })

    test(".place(x1,y1,x2,y2) detects ship overlap",()=>{
      board.place(1,2,1,6);
      expect(() => board.place(0,0,5,0)).toThrow("Coordinates conflict with existing ship!");
    })

    test(".receiveAttack(x, y) records miss",()=>{
      board.receiveAttack(1,1);
      expect(board.misses[0]).toEqual([1,1]);
    });

    test(".receiveAttack(x, y) records hit",()=>{
      board.receiveAttack(0,0);
      expect(board.ships[board.grid[0][0]].isSunk()).toBeTruthy();
      expect(board.hits[0]).toEqual([0,0]);
    });

    test(".allSunk detects not all ships are sunk", () => {
      board = new Gameboard();
      board.place(0,0,0,1);
      expect(board.allSunk()).toBeFalsy();
    });

    test(".allSunk detects all ships are sunk", () => {
      board.receiveAttack(0,0);
      board.receiveAttack(0,1);
      expect(board.allSunk()).toBeTruthy();
    });
});
