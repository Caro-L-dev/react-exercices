import Board from "../TicTacToe/Board/Board";

export default function FirstModule() {
  return (
    <>
      <div className="text-center p-2 max-w-fit p-4 shadow-md rounded-md">
        <h2 className="font-bold text-lg">Module n°1</h2>
        <p className="font-bold">Les bases</p>
        <p>Tic Tac Toe</p>
        <Board />
      </div>
    </>
  );
}
