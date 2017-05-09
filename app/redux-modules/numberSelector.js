import {handleActions} from 'redux-actions';

const SELECT_NUMBER = 'SELECT_NUMBER';

export const selectNumber = (number) => ({
   type: SELECT_NUMBER,
   payload: number
});

export const numbersActionsHandler = handleActions({
    [SELECT_NUMBER]: (state, action) => ({...state, selectedNumbers: state.selectedNumbers.concat(action.payload)})
}, {
    selectedNumbers: [1,2]
});