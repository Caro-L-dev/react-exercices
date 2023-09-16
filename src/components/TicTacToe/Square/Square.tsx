interface SquareProps {
  value: string | null; 
  onSquareClick: () => void;
};

export default function Square({value, onSquareClick}: SquareProps) {

    return (
      <button 
          className="w-10 h-10 border-2 border-slate-500"
          onClick={onSquareClick}
        >
          {value}
        </button>
    );
};