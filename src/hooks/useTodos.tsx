import { useCallback, useReducer } from "react";

interface Todo {
  task: string;
  checked: boolean;
}

interface TodosState {
  showCompleted: boolean;
  todos: Todo[];
}

type Action =
  | { type: "REMOVE_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: Todo }
  | { type: "CLEAR_COMPLETED" }
  | { type: "TOGGLE_FILTER" };

function todosReducer(state: TodosState, action: Action): TodosState {
  // console.log(state, action);

  switch (action.type) {
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo === action.payload
            ? {
                ...todo,
                checked: !todo.checked,
              }
            : todo
        ),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.checked),
      };
    case "TOGGLE_FILTER":
      return {
        ...state,
        showCompleted: !state.showCompleted,
      };
    default:
      return state;
  }
}

export function useTodos() {
  const [state, dispatch] = useReducer(todosReducer, {
    showCompleted: true,
    todos: [
      {
        task: "Nettoyer la maison",
        checked: false,
      },
      {
        task: "S'occuper du jardin",
        checked: false,
      },
      {
        task: "Sortir les poubelles",
        checked: false,
      },
    ],
  });

  const visibleTodos = state.showCompleted
    ? state.todos
    : state.todos.filter((task) => !task.checked);

  return {
    visibleTodos: visibleTodos,
    showCompleted: state.showCompleted,
    toggleTodo: useCallback(
      (todo: Todo) => dispatch({ type: "TOGGLE_TODO", payload: todo }),
      []
    ),
    removeTodo: useCallback(
      (todo: Todo) => dispatch({ type: "REMOVE_TODO", payload: todo }),
      []
    ),
    clearCompleted: useCallback(
      () => dispatch({ type: "CLEAR_COMPLETED" }),
      []
    ),
    toggleFilter: useCallback(() => dispatch({ type: "TOGGLE_FILTER" }), []),
  };
}
