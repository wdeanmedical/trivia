import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Dash from 'react-native-dash'
import StepIconStyled from './step_icon_styles'

const StepIcon = props => (
  <StepIconStyled>
    <StepIconStyled.circle {...props}>
      <StepIconStyled.circleText>
        <StepIconStyled.stepNum {...props}>
          {props.stepNum}
        </StepIconStyled.stepNum>
      </StepIconStyled.circleText>
    </StepIconStyled.circle>
    <StepIconStyled.label {...props}>{props.label}</StepIconStyled.label>
    {!props.isLastStep && (
      <StepIconStyled.bar {...props}>
        <Dash
          dashGap={0}
          dashThickness={1}
          dashColor={props.isCompletedStep ? '#379DAB' : '#797979'}
        />
      </StepIconStyled.bar>
    )}
  </StepIconStyled>
)

export default StepIcon
