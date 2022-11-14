import React, { LegacyRef, useRef, useState } from 'react';
import { TodoItem } from './models/todoItem';
import { addNewTodoItem, getAllTodoItems } from './services/todo.service';

function App() {
  const [text, setText] = useState<string>();
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const addToList = (todoItem: TodoItem) => {
    const newTodos = [...(todos as TodoItem[]), todoItem];
    setTodos(newTodos);
  };

  const addToDatabase = async (item: string) => {
    const resetTextInputValue = () => {
      setText('');
      formRef.current?.reset();
    };

    if (item === null || item === '') {
      alert('Text cannot be empty');
      return;
    }
    var response = await addNewTodoItem({ text: item as string });
    addToList({ id: response.id, text: item as string });
    resetTextInputValue();
  };

  const handleSubmitButtonClick = async (evt: React.FormEvent<HTMLButtonElement>) => {
    await addToDatabase(text as string);
  };

  const handleEnterKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      addToDatabase(evt.currentTarget.value);
    }
  };

  React.useEffect(() => {
    async function getItems() {
      var items = await getAllTodoItems();
      setTodos(items);
    }
    getItems();
  }, []);

  return (
    <div className="App">
      <form ref={formRef} onSubmit={(evt) => evt.preventDefault()}>
        <input
          ref={inputRef}
          type="text"
          onChange={(evt) => setText(evt.target.value)}
          onKeyDown={handleEnterKeyDown}></input>
        <button onClick={handleSubmitButtonClick} type="submit">
          Submit
        </button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
