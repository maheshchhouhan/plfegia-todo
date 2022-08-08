import { useReducer } from 'react';
import { Todo } from '../interfaces/Todo';

type Action = { type: 'ADD', payload: string } | { type: 'UPDATE_STATUS', payload: number } | { type: 'REMOVE', payload: number };

const TodoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload,
        }
      ];
    case 'UPDATE_STATUS':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone
          }
        } else {
          return todo;
        }
      });
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload);  
    default:
      return state;  
  }
}

const useTodo = (initialState: Todo[]) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleAddTodo = (text: string) => {
    dispatch({
      type: 'ADD',
      payload: text,
    })
  }

  const updateStatus = (id: number) => {
    dispatch({
      type: 'UPDATE_STATUS',
      payload: id
    })
  }

  const removeTodo = (id: number) => {
    dispatch({
      type: 'REMOVE',
      payload: id,
    })
  }

  return {
    todos: state,
    handleAddTodo,
    updateStatus,
    removeTodo,
  }

}

export default useTodo;