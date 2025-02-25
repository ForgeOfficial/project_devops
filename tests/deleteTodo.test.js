const {deleteTodo} = require("../logic");

test.each([
    {id: 1, name: "fake-name", completed: false},
    {id: 2, name: "fake-name2", completed: false}
])('should deleteTodo with one data', (todo) => {
    const state = { todos: [todo] };
    const newState = deleteTodo(state, todo.id);
    expect(newState).toEqual({
        todos: [],
    });
})

test('should deleteTodo with two data', () => {
    const todos = [
        {
            id: 1, name: "fake-name", completed: false
        },
        {
            id: 2, name: "fake-name2", completed: false
        }
    ]
    const state = { todos };
    const newState = deleteTodo(state, todos[0].id);
    expect(newState).toEqual({
        todos: [todos[1]],
    });
})