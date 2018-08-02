import * as actions from '../actions';
import { ADD_GUESSES, SET_FEEDBACK, SET_AURAL_STATUS, SET_CORRECT_ANSWER } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

// Make a reducer
function gameReducer(state=initialState, action) {
  if(action.type === ADD_GUESSES) {
    return Object.assign({}, state, {guesses: [...state.guesses, action.guess]})
  } else if(action.type === SET_FEEDBACK) {
    return Object.assign({}, state, {feedback: action.feedback})
  } else if(action.type === SET_AURAL_STATUS) {
    return Object.assign({}, state, {auralStatus: action.auralStatus})
  } else if(action.type === SET_CORRECT_ANSWER) {
    return Object.assign({}, state, {correctAnswer: action.correctAnswer})
  }
  return state;
};