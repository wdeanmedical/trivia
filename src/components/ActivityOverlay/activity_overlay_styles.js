import styled from 'styled-components/native/dist/styled-components.native.esm'
import { Colors } from '../../constants/colors'

const ActivityOverlayStyled = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  background-color: ${Colors.mediumGray};
  justify-content: center;
  opacity: 0.7;
`

export default ActivityOverlayStyled
