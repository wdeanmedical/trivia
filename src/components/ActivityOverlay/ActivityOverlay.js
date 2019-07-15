import React from 'react'
import { Colors } from '../../constants/colors'
import { ActivityIndicator } from 'react-native'
import ActivityOverlayStyled from './activity_overlay_styles'

const ActivityOverlay = props =>
  props.visible ? (
    <ActivityOverlayStyled>
      <ActivityIndicator size="large" color={Colors.white} />
    </ActivityOverlayStyled>
  ) : null

export default ActivityOverlay
