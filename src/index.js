//import "./style.css";
import { Player } from "./logic.js";

//object containing ships and their sizes
let ships = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

let human = new Player("human");
let computer = new Player("computer");

const randShips = (ships, board) => {
    const randOneToNine = () => Math.floor(Math.random() * 10);
    const randZeroOne = () => Math.floor(Math.random() * 2);
    for(let name of Object.keys(ships)){
        while(true){
            try{
                let x2 = randOneToNine();
                let y2 = randOneToNine();
                let x1 = null;
                let y1 = null;
                if(randZeroOne()){
                    x1 = x2 - ships[name] + 1;
                    y1 = y2;
                } else{
                    x1 = x2;
                    y1 = y2 - ships[name] + 1;
                }
                board.place(x1,y1,x2,y2);
                break;
            } catch {
                continue;
            }
        }
    }
};

//random placement
randShips(ships, human.board);
randShips(ships, computer.board);