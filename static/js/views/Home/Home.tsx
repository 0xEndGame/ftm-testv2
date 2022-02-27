import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import { Heading, Text, BaseLayout, Card } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { useQueryParam, StringParam } from 'use-query-params';
import { isAddress } from '../../utils/web3'
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import Overview from './components/Overview'
import YapToken from './components/YapToken'
import Referral from './components/Referral'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;
`
const Mining = styled.div`
  background-image: url('/images/egg/mining.png');
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  margin: auto;
  padding-top: 32px;
  text-align: center;
  height: 300px;
`
const Grd3x3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 8px;
  align-items: center;
  padding-bottom: 25px;

  ${({ theme }) => theme.mediaQueries.xs} {
    & #include {
      grid-column:  span 3;

    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & #include {
      grid-column:  span 1;
    }
  }


  ${({ theme }) => theme.mediaQueries.lg} {
    & #include {
      grid-column: span 1;
    }
  }
  `
  const HeadingBold = styled(Heading)`
  font-size: 1.25rem;
  color: #98bec3;
  font-weight: 400px;
  margin-bottom: 15px;
  margin-top: 20px;
  padding:  0px 25px;
  text-align: center;
`
const HeadingShadow = styled(Heading)`
  font-size: 1.5rem;
  color: #FFFFFF;
  font-weight: 400px;

`
const SubHeading = styled(Text)`
  font-size: 1rem;
  color: #FFFFFF;
  margin-top: 9px;
  text-align: center;
  padding:  0px 25px;
  font-weight: 50px;
  line-height: 20px;
`
const LinkText = styled(Heading)`
  font-size: 1rem;
  color: #FFFFFF;
  padding: 10px 10px;
`
  const SquareCard = styled(Card)`
  border-radius: 8px;
  align-items: center;
  background-color: rgba(52, 60, 76, 0.4);
  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;
  padding-bottom: 25px;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
  min-height: 200px;
  `
const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  const cookies = new Cookies();
  const [ref, setNum] = useQueryParam('ref', StringParam);

  if(ref) {
    if(isAddress(rot13(ref))) {
      cookies.set("ref", ref)
    }
  }

  return (
    <Page>
                <FarmStakingCard />
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          The Coal Farm
        </Heading>
        <HeadingShadow>The Coal Farm Tokenomics Explained</HeadingShadow>
        <HeadingShadow style={{marginTop: " 10px", fontSize: "1.25rem", textDecoration:"underline"}}>DeFi First Liquidity Oriented Liquidity Pooling Farm</HeadingShadow>
      </Hero>
      <Grd3x3>  
        <SquareCard id="include">
          <HeadingBold>Dividends Pools</HeadingBold>
          <SubHeading>Deflationary Mechanism for Locking COAL from Harvest to earn Stables</SubHeading>
        </SquareCard>
        <SquareCard id="include">
        <HeadingBold>TVL-Based APR</HeadingBold>
        <SubHeading>APR Boost at TVL Milestones. Enabling Profitable APR Throughout </SubHeading>
        </SquareCard>
        <SquareCard id="include">
        <HeadingBold>Automatic LP</HeadingBold>
        <SubHeading>5% of all Purchases and Sells are Taxed for Automatic LP</SubHeading>
        </SquareCard>
      </Grd3x3>
      <Overview />

      <div>
        <Cards>
          <YapToken />
          <Referral />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
