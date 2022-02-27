import React from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

const HeadingBold = styled(Text)`
  font-size: 1.75rem;
  color: #98bec3;
  font-weight: 400px;
`
const CakeHarvestBalance = ({earningsSum}) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <HeadingBold  style={{ lineHeight: '60px' }}>
        {TranslateString(298, 'Locked')}
      </HeadingBold>
    )
  }

  return <CardValue value={earningsSum} />
}

export default CakeHarvestBalance
