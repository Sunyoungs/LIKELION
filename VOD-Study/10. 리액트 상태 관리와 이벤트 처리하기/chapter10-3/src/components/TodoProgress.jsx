const TodoProgress = ({ todos }) => {
  const allCount = todos.length;
  const completedTodo = todos.filter((todo) => todo.isCompleted);
  const completedCount = completedTodo.length;
  const progressRatio = (completedCount / allCount) * 100;

  return (
    <div className="todoProgress">
      <div> {completedCount} / {allCount} </div>
      <progress value={progressRatio} max="100" />
      <div>{Math.floor(progressRatio)}%</div>
    </div>
  );
}

export default TodoProgress;