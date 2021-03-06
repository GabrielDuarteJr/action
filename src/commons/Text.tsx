import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.Text<Props>`
  color: ${(p) => (p.color ? p.color : p.theme.inactiveTintColor)};
  font-size: ${(p) => p.size}px;
  font-weight: ${(p) => (p.bold ? 'bold' : 'normal')};
  text-align: ${(p) => (p.align ? p.align : 'left')};
`

interface Props {
  children?: any
  color?: string
  size?: number
  bold?: boolean
  align?: 'center' | 'left' | 'right'
  numberOfLines?: number
}

const Text = ({ children, color, size, bold, align, numberOfLines }: Props) => (
  <Wrapper
    numberOfLines={numberOfLines}
    align={align}
    bold={bold}
    size={size}
    color={color}>
    {children}
  </Wrapper>
)

Text.defaultProps = {
  size: 12,
  numberOfLines: 1,
}

export default Text
