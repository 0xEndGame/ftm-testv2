import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text , Button} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: left;
  border-radius: 8px;
  padding-bottom: 25px;
  background-color: rgba(52, 60, 76, 0.4);
  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;
`
const HeadingBold = styled(Heading)`
  font-size: 1.75rem;
  color: #98bec3;
  font-weight: 400px;
  margin-bottom: 6px;
  margin-top: 20px;
  margin-left: 25px;
`
const Flex = styled.div`
  display: flex;
  flex: 1;
`
const NewButton = styled.div`
  width: fit-content;
  background-color: #000000;
  color: #FFFFFF;
  line-height: "16px";
  box-shadow:-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF;
  margin-left: 25px;
  margin-top: 20px;
  border-radius: 8px;

`
const HeadingShadow = styled(Heading)`
  font-size: 3rem;
  color: #FFFFFF;
  font-weight: 400px;
  margin-top: 9px;
  margin-left: 25px;
`
const SubHeading = styled(Heading)`
  font-size: 1rem;
  color: #FFFFFF;
  margin-top: 9px;
  margin-left: 5px;
`
const LinkText = styled(Heading)`
  font-size: 1rem;
  color: #FFFFFF;
  padding: 10px 10px;
`

const Referral = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
        <HeadingBold >
          Referral Commission
        </HeadingBold>
        <SubHeading style={{marginLeft:"25px"}}>Refer your friends and earn up to </SubHeading>
        <Flex>
        <HeadingShadow>5%</HeadingShadow>
        <SubHeading style = {{color:"#98bec3"}}>of your friend rewards</SubHeading>
        </Flex>
        <NewButton><LinkText><a href="/">Get your Referral Code</a></LinkText></NewButton>


    </StyledTotalValueLockedCard>
  )
}

export default Referral
