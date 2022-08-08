import React, { FC, useContext, useEffect, useRef } from 'react';
import TodoContext from '../../../context/Todo';
import { ITodoContext } from '../../../interfaces/Todo';

const TodoForm: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addTodo } = useContext(TodoContext) as ITodoContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current!.value) {
      alert('Please fill the text');
      inputRef.current?.focus();
      return;
    }
    addTodo(inputRef.current!.value);
    inputRef.current!.value = '';
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type='submit'>ADD</button>
    </form>
  );
};

export default TodoForm;
