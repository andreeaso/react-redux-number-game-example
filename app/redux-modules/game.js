import {handleActions} from 'redux-actions';

const SELECT_NUMBER = 'SELECT_NUMBER';
const UNSELECT_NUMBER = 'UNSELECT_NUMBER';
const CHECK_ANSWER = 'CHECK_ANSWER';
const REDRAW = 'REDRAW';

export const selectNumber = (number) => ({
    type: SELECT_NUMBER,
    payload: number
});

export const unselectNumber = (number) => ({
    type: UNSELECT_NUMBER,
    payload: number
});

export const checkAnswer = () => ({
    type: CHECK_ANSWER
});

export const redraw = () => ({
    type: REDRAW
});

export const numbersActionsHandler = handleActions({
    [SELECT_NUMBER]: (state, action) => ({...state, selectedNumbers: [...state.selectedNumbers, action.payload]}),
    [UNSELECT_NUMBER]: (state, action) => ({
        ...state, selectedNumbers: state.selectedNumbers.filter(element =>  element !== action.payload)
    }),
    [CHECK_ANSWER]: (state, action) => {
        if ((state.stars === sumOfSelectedNumbers(state.selectedNumbers))) {
            const usedNumbers = state.usedNumbers.concat(state.selectedNumbers);
            return {
                ...state,
                selectedNumbers: [],
                usedNumbers,
                stars: getStars(),
                gameWon: (usedNumbers.length === 9)
            };
        }
        return {...state, correct: false}
    },
    [REDRAW]: (state, action) => ({...state, stars: getStars(), selectedNumbers: [], redraws: state.redraws -1})
}, {
    selectedNumbers: [],
    usedNumbers: [],
    stars: Math.floor((Math.random() * 9) + 1),
    redraws: 5,
    correct: false
});

const sumOfSelectedNumbers = (selectedItems) => {
    return selectedItems.reduce((p, n) => {
        return p + n
    }, 0);
};

const getStars = () => {
    return Math.floor((Math.random() * 9) + 1);
};
