import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'

const HomeScreenStyled = styled.View`
  display: flex;
  flex-direction: column;
  height: 95%;
  margin: 20px 20px 20px 20px;
  background-color: ${Colors.white}
  justify-content: space-between;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${Colors.gray};
  padding: 50px 50px 50px 50px;
`

HomeScreenStyled.title = styled.Text`
  font-family: Arial;
  font-size: 30px;
  color: ${Colors.black};
  text-align: center;
`

HomeScreenStyled.subtitle = styled.Text`
  font-size: 24px;
  color: ${Colors.battleshipGrey};
  text-align: center;
`

HomeScreenStyled.button = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.azure};
  background-color: ${Colors.azure};
  width: 140px;
  align-self: center;
`

HomeScreenStyled.buttonText = styled.Text`
  font-size: 16px;
  color: ${Colors.white};
  align-self: center;
  text-align: center;
  padding: 10px;
`

export default HomeScreenStyled
