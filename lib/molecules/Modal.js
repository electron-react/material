import React, { PropTypes } from 'react'
import styled from 'styled-components'
import R from 'ramda'

import Paper from 'atoms/Paper'
import Heading from 'atoms/Heading'
import Text from 'atoms/Text'
import Backdrop from 'atoms/Backdrop'
import { Column, Row } from 'atoms/Layout'
import { Elevation } from 'styles/vars'


const Modal = ({ heading = null, content = null, elevation = Elevation.Modal, actions }) => (
  <Backdrop alignItems="center" justifyContent="center">
    <Paper elevation={elevation}>
      <Column marginBetween="M">
        {heading && <Heading>{heading}</Heading>}
        {content && <Text size={1}>{content}</Text>}
        <Row justifyContent="flexEnd">
          {actions}
        </Row>
      </Column>
    </Paper>
  </Backdrop>
)

Modal.propTypes = {
  /**
   * Title of modal
   */
  heading: PropTypes.node,

  /**
   * Text description
   */
  content: PropTypes.node,

  /**
   * Elevation level
   */
  elevation: PropTypes.oneOf(R.values(Elevation)),

  /**
   * Action buttons
   */
  action: PropTypes.node.isRequired,
}

export default Modal
