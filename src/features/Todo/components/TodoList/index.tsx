type TodoListProps = {
    todoList: {
        id: number,
        title: string,
    }[]
}

const TodoList = (props: TodoListProps) => {
    return (
        <ul>
            {props.todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;