import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import R from 'ramda'

import { disabled, propPath } from 'styles/mixins'


const CheckboxWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;

  ${disabled(css`
    opacity: 4px;
  `)}
`

const Icon = styled.div`
  display: flex;
  border-radius: 2px;
  height: 16rem;
  width: 16rem;
  background: ${props => props.checked ? props.theme.accent : 'transparent'};
  border: 1px solid;
  border-color: ${R.ifElse(
    R.has('checked'),
      propPath('theme', 'accent'),
      propPath('theme', 'divider'))};
`

const Label = styled.label`
  display: flex;
  flex-flow: row nowrap;
  font-size: 13rem;
  color: ${propPath('theme', 'text')}
  margin-left: 8rem;
`

const GhostInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`


const Checkbox = ({ checked = false, disabled = false, onChange = undefined, title, }) => (
  <CheckboxWrapper disabled={disabled}>
    <Icon checked={checked} />
    {title && <Label>{title}</Label>}
    <GhostInput type="checkbox" onChange={disabled || onChange} />
  </CheckboxWrapper>
)


Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func,
}

export default Checkbox
