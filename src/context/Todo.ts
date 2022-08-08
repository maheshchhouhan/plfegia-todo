import { createContext } from 'react';
import { ITodoContext } from '../interfaces/Todo';

const TodoContext = createContext<ITodoContext | null>(null);

export default TodoContext;