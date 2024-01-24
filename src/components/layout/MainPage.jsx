import { useState } from "react";
import { v4 as idv4 } from "uuid";
import AddTodoForm from "components/todo/AddTodoForm";
import ShowTodoList from "components/todo/ShowTodoList";

function MainPage() {
  const initialTodoList = [
    {
      id: idv4(),
      title: "리액트 공부하기",
      content: "넘나 어려운 것ㅠㅠ",
      isDone: false,
    },
    {
      id: idv4(),
      title: "쉬는 시간 가지기",
      content: "쉬는 시간이 뭐죠ㅠㅠ",
      isDone: true,
    },
  ];
  const [todoList, setTodoList] = useState(initialTodoList);
  return (
    <main>
      <AddTodoForm todoList={todoList} setTodoList={setTodoList} />
      <ShowTodoList todoList={todoList} setTodoList={setTodoList} />
    </main>
  );
}

export default MainPage;
