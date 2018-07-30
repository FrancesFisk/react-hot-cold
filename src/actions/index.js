export const ADD_GUESSES = 'ADD_GUESSES';
export const addGuesses = guess => ({
  type: ADD_GUESSES,
  guesses
});

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const SET_AURAL_STATUS = 'SET_AURAL_STATUS';
export const setAuralStatus = status => ({
  type: SET_AURAL_STATUS,
  auralStatus
});

export const SET_CORRECT_ANSWER = 'SET_CORRECT_ANSWER';
export const setCorrectAnswer = answer => ({
  type: SET_CORRECT_ANSWER,
  correctAnswer
});