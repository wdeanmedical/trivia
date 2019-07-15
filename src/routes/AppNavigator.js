import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import * as Constants from '../constants/constants'
import HomeScreen from '../screens/home/HomeScreen'
import QuizScreen from '../screens/quiz/QuizScreen'
import ResultsScreen from '../screens/results/ResultsScreen'

const AppNavigator = createStackNavigator(
  {
    home: HomeScreen,
    quiz: QuizScreen,
    results: ResultsScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: Constants.HOME_SCREEN,
  }
)

export default createAppContainer(AppNavigator)
