import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useCountUp } from 'react-countup'
import { Text } from '@pancakeswap-libs/uikit'

interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  prefix?: string
}
const HeadingBold = styled(Text)`
  font-size: 1.75rem;
  color: #98bec3;
  font-weight: 400px;
`
const CardValue: React.FC<CardValueProps> = ({ value, decimals, fontSize = '40px', prefix }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <HeadingBold>
      {prefix}{countUp}
    </HeadingBold>
  )
}

export default CardValue
