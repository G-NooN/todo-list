const TodoItemButtonController = ({ todoList, setTodoList, todo, checkDone }) => {
  const deleteTodoHandler = () => {
    const checkDeleteTodo = window.confirm("정말로 해당 TODO를 삭제하시겠습니까?");
    if (checkDeleteTodo) {
      const deletedTodoList = todoList.filter((todoItem) => todoItem.id !== todo.id);
      setTodoList(deletedTodoList);
      alert("삭제되었습니다.");
    } else return;
  };

  const editDoneHandler = () => {
    const checkEditDone = window.confirm("해당 TODO의 진행상태를 변경하시겠습니까?");
    if (checkEditDone) {
      const newTodoList = todoList.map((todoItem) => {
        if (todoItem.id === todo.id) {
          return {
            ...todoItem,
            isDone: !todoItem.isDone,
          };
        } else {
          return todoItem;
        }
      });
      setTodoList(newTodoList);
      alert("변경되었습니다.");
    }
  };

  return (
    <>
      <button className="deleteTodoBtn controlTodoBtn" onClick={deleteTodoHandler}>
        삭제하기
      </button>
      <button className="editDoneBtn controlTodoBtn" onClick={editDoneHandler}>
        {!checkDone ? "완료" : "완료취소"}
      </button>
    </>
  );
};

export default TodoItemButtonController;
