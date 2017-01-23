import React, { PropTypes } from 'react'
import styled from 'styled-components'
import R from 'ramda'

import colors from 'styles/palette'
import { theme } from 'styles/mixins'


const availableColors = R.omit(['Black', 'White'], colors)
const listOfNames = R.keys(availableColors)

const LineWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid ${theme('divider')};
  height: ${props => props.height}rem;
  align-items: stretch;
`

LineWrapper.defaultProps = {
  theme: {
    divider: '#9E9E9E',
  },
}

Chunk = styled.div`
  display: inline-block;
`

const PercentsLine = ({ chunks, height = 16 }) => {
  const total = chunks.reduce((prev, curr) => prev + curr, 0)
  
  return (
    <LineWrapper height={height}>
      {chunks.map((size, index) =>
        <Chunk key={index} style={{
          width: `${100 / (total / size)}px`,
          backgroundColor: availableColors[listOfNames[index]],
        }} />
      )}
    </LineWrapper>
  )
}

PercentsLine.propTypes = {
  chunks: PropTypes.arrayOf(PropTypes.number),
  height: PropTypes.number,
}

export default PercentsLine
