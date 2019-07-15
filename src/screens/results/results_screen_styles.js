import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'
import QuizScreenStyled from '../quiz/quiz_screen_styles'

const ResultsScreenStyled = styled.ScrollView``

ResultsScreenStyled.result = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px 20px 10px 20px;
  background-color: ${Colors.white}
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.gray};
  padding: 20px;
`

ResultsScreenStyled.title = styled.Text`
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: ${Colors.black};
  margin-top: 20px;
  margin-bottom: 20px;
`

ResultsScreenStyled.subtitle = styled.Text`
  font-size: 14px;
  color: ${Colors.battleshipGrey};
  margin-bottom: 10px;
`

ResultsScreenStyled.question = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${Colors.black};
`

ResultsScreenStyled.button = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.azure};
  background-color: ${Colors.azure};
  width: 140px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

ResultsScreenStyled.buttonText = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
  align-self: center;
  text-align: center;
  padding: 10px;
`

ResultsScreenStyled.answerGroup = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 10px;
  background-color: ${Colors.white}
  padding: 10px;
`

ResultsScreenStyled.answer = styled.Image`
  width: 20px;
  height: 20px;
  align-self: center;
  margin-left: 15px;
`

export default ResultsScreenStyled
