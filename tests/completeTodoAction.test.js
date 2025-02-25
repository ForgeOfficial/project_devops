const {completeTodoAction} = require('../logic');

test('completeTodoAction', () => {
    // Act
    const id = "fake-id";
    const action = completeTodoAction(id);

    // Expect
    expect(action).toEqual({
        type: "COMPLETE_TODO",
        payload: { id },
    });
});