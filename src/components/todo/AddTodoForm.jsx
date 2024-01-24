import { useState } from "react";
import { v4 as idv4 } from "uuid";

const AddTodoForm = ({ todoList, setTodoList }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const titleChangeHandler = (event) => {
    setTodoTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setTodoContent(event.target.value);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (!todoTitle || !todoContent) {
      alert("빈 값이 존재합니다. 값을 입력해주세요.");
      return;
    }

    const newTodo = {
      id: idv4(),
      title: todoTitle,
      content: todoContent,
      isDone: false,
    };

    setTodoList([...todoList, newTodo]);
    alert("추가되었습니다.");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div className="todo-info">
        <label className="form-title">제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          name="todo-title"
          value={todoTitle}
          onChange={titleChangeHandler}
        />
        <label className="form-title">내용</label>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          name="todo-content"
          value={todoContent}
          onChange={contentChangeHandler}
        />
      </div>
      <button type="submit" className="addTodoBtn controlTodoBtn">
        추가하기
      </button>
    </form>
  );
};

export default AddTodoForm;
