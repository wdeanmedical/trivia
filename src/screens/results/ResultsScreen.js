import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { AllHtmlEntities } from 'html-entities'
import Images from '@local/assets'
import { Text, TouchableOpacity, View } from 'react-native'
import { appInit } from '../../state/actions'
import * as Constants from '../../constants/constants'
import ResultsScreenStyled from './results_screen_styles'
import QuizScreenStyled from '../quiz/quiz_screen_styles'

class ResultsScreen extends Component {
  state = {
    title: '',
    totalCorrect: 0,
  }

  componentDidMount() {
    const { questions } = this.props
    const { totalCorrect } = this.calculateResults()
    this.setState({ title: `You Scored ${totalCorrect}/${questions.length}` })
  }

  calculateResults = () => {
    const { questions, answers } = this.props
    let totalCorrect = 0
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct_answer === answers[i]) {
        totalCorrect++
      }
    }
    return { totalCorrect }
  }

  enterQuizScreen = () => {
    const { appInit: dispatchAppInit } = this.props
    dispatchAppInit()
    this.props.navigation.navigate(Constants.QUIZ_SCREEN)
  }

  renderResults = () => {
    const { questions, answers } = this.props
    return questions.map((question, i = 0) => {
      return (
        <ResultsScreenStyled.result key={i++}>
          <ResultsScreenStyled.question>
            {i}. {AllHtmlEntities.decode(question.question)}
          </ResultsScreenStyled.question>
          <ResultsScreenStyled.answerGroup>
            <View>
              <Text>Answer: {question.correct_answer}</Text>
              <Text>You Answered: {answers[i - 1]}</Text>
            </View>
            <ResultsScreenStyled.answer
              source={
                question.correct_answer === answers[i - 1]
                  ? Images.checkMark
                  : Images.redX
              }
              accessibilityLabel="correct"
            />
          </ResultsScreenStyled.answerGroup>
        </ResultsScreenStyled.result>
      )
    })
  }

  render() {
    const { pendingScreen } = this.props
    const { title } = this.state
    return (
      <ResultsScreenStyled>
        <ResultsScreenStyled.title>{title}</ResultsScreenStyled.title>
        {this.renderResults()}
        <ResultsScreenStyled.button
          onPress={this.enterQuizScreen}
          accessibilityLabel="Play Again"
        >
          <ResultsScreenStyled.buttonText>
            Play Again
          </ResultsScreenStyled.buttonText>
        </ResultsScreenStyled.button>
      </ResultsScreenStyled>
    )
  }
}

const mapStateToProps = state => {
  const { pendingScreen, questions, answers } = state.app
  return { pendingScreen, questions, answers }
}

const mapDispatchToProps = dispatch => ({
  appInit: () => dispatch(appInit()),
})

ResultsScreen.propTypes = {
  appInit: PropTypes.func,
}

ResultsScreen.defaultProps = {
  appInit: undefined,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsScreen)
