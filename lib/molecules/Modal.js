import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Paper from 'atoms/Paper'
import Heading from 'atoms/Heading'
import Text from 'atoms/Text'
import Backdrop from 'atoms/Backdrop'
import { Column, Row } from 'atoms/Layout' // or import Column from 'atoms/Layout/Column'
import { Elevation } from 'styles/vars'


const Modal = ({ heading = null, content = null, elevation = Elevation.Modal, actions }) => (
  <Backdrop alignItems="center" justifyContent="center">
    <Paper elevation={elevation}>
      <Column marginBetween="M">
        {heading && <Heading {/* size={0} */}>{heading}</Heading>}
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
  elevation: PropTypes.oneOf(Object.keys(Elevation).map(k => Elevation[k])),

  /**
   * Action buttons
   */
  action: PropTypes.node.isRequired,
}

export default Modal
