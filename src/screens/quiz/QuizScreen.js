import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Images from '@local/assets'
import { View, TouchableOpacity } from 'react-native'
import { AllHtmlEntities } from 'html-entities'
import { submitAnswer } from '../../state/actions'
import * as Constants from '../../constants/constants'
import QuizScreenStyled from './quiz_screen_styles'
import StepIcon from '../../components/StepIcon/StepIcon'

class QuizScreen extends Component {
  state = {
    title: 'Quiz',
    message: 'You will be presented with 10 True or False questions.',
    challenge: 'Can you score 100%?',
  }

  componentDidMount() {
    const { questions } = this.props
  }

  componentWillReceiveProps(nextProps) {
    const { quizCompleted } = nextProps
    if (quizCompleted === true) {
      this.props.navigation.navigate(Constants.RESULTS_SCREEN)
    }
  }

  renderStepIcons = () => {
    const { currentQuestion, questions } = this.props
    let steps = []
    _.times(questions.length, i => {
      let step = i + 1
      steps.push(
        <StepIcon
          key={step}
          stepNum={step}
          isFirstStep={step === 1}
          isLastStep={step === questions.length}
          isCompletedStep={step < currentQuestion}
          isActiveStep={step === currentQuestion}
        />
      )
    })
    return steps
  }

  submitAnswer = answer => {
    const { submitAnswer: dispatchSubmitAnswer } = this.props
    dispatchSubmitAnswer(answer)
  }

  render() {
    const { questions, currentQuestion } = this.props
    const { title, message, challenge } = this.state
    return (
      <QuizScreenStyled>
        <QuizScreenStyled.stepIcons>
          {this.renderStepIcons()}
        </QuizScreenStyled.stepIcons>
        <View>
          <QuizScreenStyled.title>
            {questions[currentQuestion - 1].category}
          </QuizScreenStyled.title>
          <QuizScreenStyled.subtitle>
            {AllHtmlEntities.decode(questions[currentQuestion - 1].question)}
          </QuizScreenStyled.subtitle>

          <QuizScreenStyled.controls>
            <TouchableOpacity
              onPress={() => this.submitAnswer(Constants.ANSWER_FALSE)}
              accessibilityLabel="False"
            >
              <QuizScreenStyled.answer
                source={Images.buttonFalse}
                accessibilityLabel="False"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.submitAnswer(Constants.ANSWER_TRUE)}
              accessibilityLabel="True"
            >
              <QuizScreenStyled.answer
                source={Images.buttonTrue}
                accessibilityLabel="True"
              />
            </TouchableOpacity>
          </QuizScreenStyled.controls>
        </View>
      </QuizScreenStyled>
    )
  }
}

const mapStateToProps = state => {
  const { questions, currentQuestion, quizCompleted } = state.app
  return { questions, currentQuestion, quizCompleted }
}

const mapDispatchToProps = dispatch => ({
  submitAnswer: answer => dispatch(submitAnswer(answer)),
})

QuizScreen.propTypes = {
  submitAnswer: PropTypes.func,
}

QuizScreen.defaultProps = {
  submitAnswer: undefined,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)
