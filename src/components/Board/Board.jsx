import "./Board.scss";
import GreenJeton from "../Jetons/GreenJeton";
import BlackJeton from "../Jetons/BlackJeton";

function Board() {
  return (
    <div id="board">
      <GreenJeton />
      <BlackJeton />
    </div>
  );
}

export default Board;
