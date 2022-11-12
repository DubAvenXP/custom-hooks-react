import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodo = () => {
    const initialState = [];

    /**
     * @returns array with todos
     */
    const initializeTodos = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    };

    const [todos, dispatch] = useReducer(
        todoReducer,
        initialState,
        initializeTodos
    );

    // every time the todos change, the useEffect will be called
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    /**
     * @description function to add a new todo
     */
    const handleNewTodo = (newTodo) => {
        const action = {
            type: "add",
            payload: newTodo,
        };

        dispatch(action);
    };

    /**
     * @param {*} todoId that is going to be deleted
     * @description function to delete a todo
     */
    const handleDeleteTodo = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId,
        };
        dispatch(action);
    };

    /**
     * @param {*} todoId that is going to be toggled
     * @description function to toggle a todo as done or undone
     */
    const handleToggleTodo = (todoId) => {
        const action = {
            type: "toggle",
            payload: todoId,
        };
        dispatch(action);
    };

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        pendingTodosCount: todos.reduce(
            (acc, todo) => (todo.done ? acc : acc + 1),
            0
        ),
        todosCount: todos.length,
    };
};
