import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { ComponentSize } from 'styles/size'


const Avatar = styled.figure`
  display: flex;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  ${props => props.size && css`
    height: ${ComponentSize[props.size]}px;
    width: ${ComponentSize[props.size]}px;
  `}
`

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.keys(ComponentSize)),
}

export default Avatar
