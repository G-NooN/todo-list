import React, { useState } from "react";

function InputForm({ todoList, setTodoList }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: todoList.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="add-todo">
      <div className="todo-info">
        <label className="form-title">제목</label>
        <input
          className="form-content"
          name="todo-title"
          value={title}
          onChange={titleChangeHandler}
        />
        <label className="form-title">내용</label>
        <input
          className="form-content"
          name="todo-content"
          value={content}
          onChange={contentChangeHandler}
        />
      </div>
      <button className="addBtn" onClick={addTodo}>
        추가하기
      </button>
    </div>
  );
}

export default InputForm;
