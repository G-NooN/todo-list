import React, { useState } from "react";
import Header from "components/Header";
import InputForm from "components/InputForm";
import "App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      content: "생각보다 쉽지만 그래도 어려워요ㅠㅠ",
      isDone: false,
    },
    { id: 2, title: "휴식하기", content: "그런건 없음ㅠㅠ", isDone: true },
  ]);

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const checkTodoDone = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="layout">
      {/* 헤더 */}
      <Header />

      {/* 입력 Component */}
      <InputForm todoList={todoList} setTodoList={setTodoList} />

      {/* 출력 */}
      <div className="todo-list">
        <div className="list-container">
          <h2>Working..</h2>
          <div className="working-list">
            {todoList
              .filter((todo) => !todo.isDone)
              .map((todo) => {
                return (
                  <div key={todo.id} className="todo-item">
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <button className="removeBtn" onClick={() => deleteTodo(todo.id)}>
                      삭제
                    </button>
                    <button className="checkDoneBtn" onClick={() => checkTodoDone(todo.id)}>
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="list-container">
          <h2>Done!!</h2>
          <div className="done-list">
            {todoList
              .filter((todo) => todo.isDone)
              .map((todo) => {
                return (
                  <div key={todo.id} className="todo-item">
                    <h3>{todo.title}</h3>
                    <p>{todo.content}</p>
                    <button className="removeBtn" onClick={() => deleteTodo(todo.id)}>
                      삭제
                    </button>
                    <button className="checkDoneBtn" onClick={() => checkTodoDone(todo.id)}>
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
