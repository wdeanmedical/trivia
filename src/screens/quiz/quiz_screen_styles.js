import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'

const QuizScreenStyled = styled.View`
  display: flex;
  flex-direction: column;
  height: 95%;
  margin: 20px 20px 20px 20px;
  background-color: ${Colors.white}
  align-items: center;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.gray};
  padding: 20px;
`

QuizScreenStyled.title = styled.Text`
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.black};
  text-align: center;
  min-height: 50px;
  margin-bottom: 10px;
`

QuizScreenStyled.subtitle = styled.Text`
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-bottom: 10px;
  min-height: 70px;
`

QuizScreenStyled.button = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.azure};
  background-color: ${Colors.azure};
  width: 140px;
  align-self: center;
`

QuizScreenStyled.buttonText = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
  align-self: center;
  text-align: center;
  padding: 10px;
`

QuizScreenStyled.controls = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 80px;
  margin-top: 10px;
`

QuizScreenStyled.answer = styled.Image`
  width: 30px;
  height: 30px;
`

QuizScreenStyled.stepIcons = styled.View`
  justify-content: space-evenly;
  align-self: center;
  flex-direction: row;
  margin-bottom: 30px;
  width: 250px;
`

export default QuizScreenStyled
