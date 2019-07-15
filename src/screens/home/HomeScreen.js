import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { appInit } from '../../state/actions'
import * as Constants from '../../constants/constants'
import HomeScreenStyled from './home_screen_styles'

class HomeScreen extends Component {
  state = {
    title: 'Welcome to the Trivia Challenge!',
    message: 'You will be presented with 10 True or False questions.',
    challenge: 'Can you score 100%?',
  }

  componentDidMount() {
    const { appInit: dispatchAppInit } = this.props
    dispatchAppInit()
  }

  enterQuizScreen = () => {
    this.props.navigation.navigate(Constants.QUIZ_SCREEN)
  }

  render() {
    const { pendingScreen, fetchError } = this.props
    const { title, message, challenge } = this.state
    return (
      <HomeScreenStyled>
        <HomeScreenStyled.title>{title}</HomeScreenStyled.title>
        <HomeScreenStyled.subtitle>{message}</HomeScreenStyled.subtitle>
        <HomeScreenStyled.subtitle>{challenge}</HomeScreenStyled.subtitle>
        {!fetchError && (
          <HomeScreenStyled.button
            onPress={this.enterQuizScreen}
            accessibilityLabel="Begin"
          >
            <HomeScreenStyled.buttonText>Begin</HomeScreenStyled.buttonText>
          </HomeScreenStyled.button>
        )}
      </HomeScreenStyled>
    )
  }
}

const mapStateToProps = state => {
  const { pendingScreen, fetchError } = state.app
  return { pendingScreen, fetchError }
}

const mapDispatchToProps = dispatch => ({
  appInit: () => dispatch(appInit()),
})

HomeScreen.propTypes = {
  appInit: PropTypes.func,
}

HomeScreen.defaultProps = {
  appInit: undefined,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
