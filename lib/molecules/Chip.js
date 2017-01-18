import React, { PropTypes } from 'react'
import styled from 'styled-components'


const ChipWrapper = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
  border-radius: 32rem;
  height: 32rem;
  padding-left: 4rem;
  padding-right: 12rem;
`

const Content = styled.div`
  display: flex;
  padding-left: 8rem;
  padding-right: 4rem;
  line-height: 13rem;
  font-size: 13rem;
`
const Avatar = styled.div`
  display: flex;
  height: 32rem;
  width: 32rem;
  margin-left: -4rem;
  border-radius: 50%;
`

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -8rem;
  margin-right: 4rem;
`


const Chip = ({ avatar = null, removable = false, onClick = undefined, onRemove = undefined, content }) => (
  <ChipWrapper onClick={onClick}>
    {avatar && <Avatar>{avatar}</Avatar>}
    <Content>{content}</Content>
    {removable && <CloseButton onClick={onRemove} />}
  </ChipWrapper>
)

Chip.propTypes = {
  /**
   * Avatar image or text block
   */
  avatar: PropTypes.node,

  /**
   * Show close button
   */
  removable: PropTypes.bool,

  /**
   * Content of the chip
   */
  content: PropTypes.node.isRequired,

  /**
   * Click handler
   */
  onClick: PropTypes.func,

  /**
   * Remove button click handler
   */
  onRemove: PropType.func,
}

export default Chip
