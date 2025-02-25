const {deleteTodoAction} = require('../logic');

test('deleteTodoAction', () => {
    // Act
    const id = "fake-id";
    const action = deleteTodoAction(id);

    // Expect
    expect(action).toEqual({
        type: "DELETE_TODO",
        payload: { id },
    });
});