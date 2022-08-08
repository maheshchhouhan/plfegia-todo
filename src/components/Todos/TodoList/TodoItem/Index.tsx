import { FC } from 'react';
import { Todo } from '../../../../interfaces/Todo';

type TodoItemProps = {
  todo: Todo;
  removeTodo: (id: number) => void;
  handleStatus: (id: number) => void;
};

const TodoItem: FC<TodoItemProps> = ({ todo, removeTodo, handleStatus }) => (
  <li
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
    }}
  >
    <input
      type='checkbox'
      onClick={() => handleStatus(todo.id)}
      value={todo.isDone ? 1 : 0}
    />
    <div
      style={{
        textDecoration: todo.isDone ? 'line-through' : '',
      }}
    >
      {todo.text}
    </div>
    <button onClick={() => removeTodo(todo.id)}>Remove</button>
  </li>
);

export default TodoItem;
