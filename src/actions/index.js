export const ADD_GUESSES = 'ADD_GUESSES';
export const addGuesses = guess => ({
  type: ADD_GUESSES,
  guess
});

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const SET_AURAL_STATUS = 'SET_AURAL_STATUS';
export const setAuralStatus = auralStatus => ({
  type: SET_AURAL_STATUS,
  auralStatus
});

export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';
export const setCorrectAnswer = correctAnswer => ({
  type: SET_CORRECT_ANSWER,
  correctAnswer: Math.floor(Math.random() * 100) + 1
});