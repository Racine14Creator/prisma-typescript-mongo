import ChangeTodo from "./ChangeTodo";

export default function Todo({ todo }) {
  const todoStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
  };
  return (
    <div
      className='w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl'
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />
      <span className='text-center font-bold uppercase'>{todo.title}</span>
    </div>
  );
}
