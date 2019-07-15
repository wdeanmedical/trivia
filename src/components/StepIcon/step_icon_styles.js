import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'

const StepIconStyled = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`

StepIconStyled.circle = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 11px;
  border-width: 1px;
  border-color: ${props =>
    props.isActiveStep || props.isCompletedStep ? '#379dab' : '#979797'};
  background-color: ${props => (props.isCompletedStep ? '#379dab' : 'white')};
`
StepIconStyled.circleText = styled.Text`
  align-self: center;
  top: 2px;
`

StepIconStyled.stepNum = styled.Text`
  color: ${props => (props.isCompletedStep ? 'white' : '#979797')};
  font-weight: ${props => (props.isActiveStep ? 'bold' : 'normal')};
`

StepIconStyled.label = styled.Text`
  color: ${props =>
    props.isActiveStep || props.isCompletedStep ? '#379dab' : '#979797'};
  text-align: center;
  flex-wrap: wrap;
  width: 100px;
  padding-top: 2px;
`

StepIconStyled.bar = styled.View`
  display: ${props => (props.isLastStep ? 'none' : 'flex')};
  position: absolute;
  top: 11px;
  right: 0px;
  left: 62px;
  width: 6px;
`

export default StepIconStyled
