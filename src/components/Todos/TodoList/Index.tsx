import { FC, useContext } from 'react';
import TodoContext from '../../../context/Todo';
import { ITodoContext } from '../../../interfaces/Todo';
import TodoItem from './TodoItem/Index';

const TodoList: FC = () => {
  const { todos, removeTodo, handleStatus } = useContext(
    TodoContext
  ) as ITodoContext;
  return (
    <>
      <h2>Todo List</h2>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: '100%',
          gap: 10,
        }}
      >
        {todos
          .sort((a, b) => b.id - a.id)
          .map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              handleStatus={handleStatus}
            />
          ))}
      </ul>
      {!todos.length && <p>No Todo(s)</p>}
    </>
  );
};

export default TodoList;
