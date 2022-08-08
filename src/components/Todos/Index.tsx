import { FC } from 'react';
import TodoContext from '../../context/Todo';
import useTodo from '../../hooks/useTodo';
import TodoForm from './TodoForm/Index';
import TodoList from './TodoList/Index';

const Todos: FC = () => {
  const { handleAddTodo, todos, updateStatus, removeTodo } = useTodo([]);
  return (
    <>
      <TodoContext.Provider
        value={{
          addTodo: handleAddTodo,
          todos,
          handleStatus: updateStatus,
          removeTodo,
        }}
      >
        <h1>Todos</h1>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
};

export default Todos;
