import React, { PropType } from 'react'
import styled from 'styled-components'
import { prop, pipe } from 'ramda'

import { makeShadow, Elevation } from 'styles/elevation'


const Paper = styled.div`
  display: flex;
  z-index: ${props => props.elevation * 100};
  box-shadow: ${pipe(pick('elevation'), makeShadow)};
  background: white;
  border-radius: 2px;
`

Paper.propTypes = {
  /**
   * Paper position, make shadow
   */
  elevation: PropTypes.number,
}

Paper.defaultProps = {
  elevation: Elevation.Card,
}

export default Paper
