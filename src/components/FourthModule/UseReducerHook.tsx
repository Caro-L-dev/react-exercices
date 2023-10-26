import { useTodos } from "../../hooks/useTodos";

export default function UseReducerHook() {
  const {
    visibleTodos,
    showCompleted,
    toggleTodo,
    removeTodo,
    clearCompleted,
    toggleFilter,
  } = useTodos();

  return (
    <div className="flex flex-col border-l-2 pl-4">
      <h2 className="text-gray-500">- useReducer -</h2>
      <ul className="mb-2">
        {visibleTodos.map((todo) => (
          <li key={todo.task} className="flex justify-between">
            <input
              type="checkbox"
              onChange={() => toggleTodo(todo)}
              checked={todo.checked}
            />
            {todo.task}
            <button
              onClick={() => removeTodo(todo)}
              className="font-bold text-red-500 px-2 rounded-md"
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div className="flex bg-slate-200 text-gray-500 p-2 rounded-md mb-2">
        <p className="mr-2">Afficher les tâches accomplies</p>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={toggleFilter}
        />
      </div>
      <button
        onClick={clearCompleted}
        className="bg-slate-400 text-white p-2 rounded-md"
      >
        Supprimer les tâches accomplies
      </button>
    </div>
  );
}
