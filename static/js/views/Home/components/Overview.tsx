import React from 'react'
import { Card, CardBody, Heading, Text, Button } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd, useTotalValue } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  background-color: rgba(52, 60, 76, 0.4);
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  margin-bottom: 50px;
  margin-top: 5px;
  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;

  ${({ theme }) => theme.mediaQueries.sm} {
    & #include {
      grid-column:  span 3;
    }
  }
  ${({ theme }) => theme.mediaQueries.xs} {
    & #include {
      grid-column:  span 3;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & #include {
      grid-column: span 1;
    }
  }
`
const HeadingBold = styled(Heading)`
  font-size: 1.75rem;
  color: #98bec3;
  font-weight: 400px;
  margin-bottom: 6px;
`
const HeadingShadow = styled(Heading)`
  font-size: 1rem;
  color: #FFFFFF;
  font-weight: 400px;
  margin-top: 9px;
`
const SubHeading = styled(Heading)`
  font-size: 0.75rem;
  color: #FFFFFF;
  margin-top: 9px;
`

const Column = styled.div`
  width: 100%; 
  text-align: center;
  font-size: 14px;
  margin-bottom: 8px;
  padding: 20px

`

const Overview = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);
  const totalValue = useTotalValue();

  let eggPerBlock = 0;
  if(farms && farms[0] && farms[0].eggPerBlock){
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
        <Column id="include" >
        <HeadingBold fontSize="20px">${getBalanceNumber(marketCap).toLocaleString('en-US', {maximumFractionDigits:0})}</HeadingBold>
        <HeadingShadow fontSize="18px">Market Cap</HeadingShadow>
        <SubHeading fontSize="10px">(Total Supply X Price)</SubHeading>
        </Column>
        <Column id="include">
        <HeadingBold fontSize="20px">{getBalanceNumber(circSupply).toLocaleString('en-US', {maximumFractionDigits:0})}</HeadingBold>

        <HeadingShadow fontSize="18px">Circulating Supply</HeadingShadow>
        <SubHeading fontSize="10px">(Total - Burnt)</SubHeading>


        </Column>
        <Column id="include">
          <HeadingBold fontSize="20px">${totalValue.toNumber().toLocaleString('en-US', {maximumFractionDigits:0})}</HeadingBold>
          <HeadingShadow fontSize="18px">Total Locked Value</HeadingShadow>
          <SubHeading fontSize="10px">(Across All Pools and Farms)</SubHeading>

        </Column>
        <Column id="include">
        <HeadingBold fontSize="20px">${eggPrice.toNumber().toLocaleString('en-US', {maximumFractionDigits:3})}</HeadingBold>

        <HeadingShadow fontSize="18px">COAL Price</HeadingShadow>
        </Column>
        <Column id="include">
        <HeadingBold fontSize="20px">{eggPerBlock}/second</HeadingBold>
        <HeadingShadow fontSize="18px">Emission Rate</HeadingShadow>

        </Column>
        <Column id="include">
        <HeadingBold fontSize="20px">{getBalanceNumber(burnedBalance).toLocaleString('en-US', {maximumFractionDigits:0})} COAL</HeadingBold>
        <HeadingShadow fontSize="18px">Burnt</HeadingShadow>
        
        </Column>
    </StyledCakeStats>
  )
}

export default Overview
