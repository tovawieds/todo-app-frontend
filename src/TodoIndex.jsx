export function TodoIndex({ todos }) {
  return (
    <div>
      <h1>({todos.length}) Todos</h1>

      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h3>{todo.deadline}</h3>
          <p>{todo.description}</p>
          <p>Completed: {todo.completed}</p>
        </div>
      ))}
    </div>
  );
}