import React from 'react'
import { Alert } from 'react-native'
import { APP_INIT, SUBMIT_ANSWER, TOGGLE_PENDING_SCREEN } from './action_types'

const INITIAL_STATE = {
  questions: [],
  answers: [],
  currentQuestion: 1,
  pendingScreen: false,
  quizCompleted: false,
  fetchError: false,
}

const errorAlert = () => {
  Alert.alert(
    'Error fetching data',
    '',
    [
      {
        text: 'OK',
        onPress: () => {},
        style: 'cancel',
      },
    ],
    { cancelable: false }
  )
}

const submitAnswer = (state, answer) => {
  state.answers.push(answer)
  if (state.currentQuestion < state.questions.length) {
    state.currentQuestion++
  } else {
    state.quizCompleted = true
  }
  return {
    ...state,
    currentQuestion: state.currentQuestion,
    answers: state.answers,
    quizCompleted: state.quizCompleted,
  }
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case APP_INIT.SUCCESS:
      return {
        ...state,
        questions: action.payload,
        quizCompleted: false,
        currentQuestion: 1,
        answers: [],
      }
    case APP_INIT.ERROR:
      errorAlert()
      return { ...state, fetchError: true }
    case SUBMIT_ANSWER.SUCCESS:
      return submitAnswer(state, action.payload)
    case TOGGLE_PENDING_SCREEN:
      return { ...state, pendingScreen: action.payload }
    default:
      return state
  }
}
