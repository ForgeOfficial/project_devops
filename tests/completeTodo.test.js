const {completeTodo} = require("../logic");

test('completeTodo', () => {
    const todo = {
        id: 1, name: "fake-name", completed: false
    }
    const state = { todos: [todo] };
    const newState = completeTodo(state, todo.id);
    expect(newState).toEqual({
        todos: [{
            id: 1, name: "fake-name", completed: true
        }],
    });
})