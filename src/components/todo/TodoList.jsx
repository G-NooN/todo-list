import TodoItemButtonController from "./TodoItemButtonController";

const TodoList = ({ todoList, setTodoList, checkDone }) => {
  return (
    <section className={!checkDone ? "working-list lists" : "done-list lists"}>
      <h2 className="list-title">{!checkDone ? "Working..🧑🏻‍💻" : "Done..!!🎉"}</h2>
      <div className="todo-grid-container">
        {todoList
          .filter((todo) => todo.isDone === checkDone)
          .map((todo) => {
            return (
              <div key={todo.id} className="todo-item">
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <TodoItemButtonController
                  todoList={todoList}
                  setTodoList={setTodoList}
                  todo={todo}
                  checkDone={checkDone}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TodoList;
