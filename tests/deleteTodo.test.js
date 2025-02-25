const {deleteTodo} = require("../logic");

test('should deleteTodo with good data', () => {
    const todo = {
        id: 1, name: "fake-name", completed: false
    }
    const state = { todos: [todo] };
    const newState = deleteTodo(state, todo.id);
    expect(newState).toEqual({
        todos: [],
    });
})