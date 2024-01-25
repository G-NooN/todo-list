import TodoList from "./TodoList";

const ShowTodoList = ({ todoList, setTodoList }) => {
  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList} checkDone={false} />
      <TodoList todoList={todoList} setTodoList={setTodoList} checkDone={true} />
    </>
  );
};

export default ShowTodoList;
