// Reducer is a pure function that takes the previous state and an action, and returns the next state.

export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case "add":
            return [action.payload, ...initialState];
        case "delete":
            return initialState.filter((todo) => todo.id !== action.payload);
        case "toggle":
            return initialState.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return initialState;
    }
};