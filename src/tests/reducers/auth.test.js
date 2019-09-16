import authReducer from '../../reducers/auth';


test('Should set uid', () => {
    const action = {
        type:'LOGIN',
        uid: 1234
    }
    const state = authReducer(state,action);
    expect(state.uid).toBe(action.uid)
});

test('Should set state to empty object', () => {
    const action = {
        type:'LOGOUT'
    }
    const state = authReducer({uid:'anything'},action);
    expect(state).toEqual({});
});