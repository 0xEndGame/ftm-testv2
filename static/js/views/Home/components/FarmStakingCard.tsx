import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  border-radius: 8px;
  align-items: center;
  background-color: rgba(52, 60, 76, 0.4);
  box-shadow: rgb(152, 190, 195, 0.2) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px, rgba(67, 118, 124, 0.35) 0px -2px 6px 0px inset;
  padding-bottom: 25px;

  ${({ theme }) => theme.mediaQueries.xs} {
    & #include {
      grid-column:  span 3;
      align-items: center;
      text-align: center;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & #include {
      grid-column:  span 1;
      align-items: center;
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
  font-size: 1.5rem;
  color: #FFFFFF;
  font-weight: 400px;

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

const Block = styled.div`



  align-items: center;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  align-items: center;
  margin-right: 25px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
        <Block id="include">
        <HeadingBold>
          Your Staking Reward
        </HeadingBold>
        </Block >
        {/* <CardImage src="/images/egg/2.png" alt="COAL logo" width={64} height={64} /> */}
        <Block style = {{textAlign:"center", marginTop: "10px"}}  id="include">
          <SubHeading>{TranslateString(544, 'EGG to Harvest')}</SubHeading>
          <CakeHarvestBalance earningsSum={earningsSum}/>
          <HeadingShadow>${(eggPrice * earningsSum).toFixed(2)}</HeadingShadow>
        </Block>

        <Actions  id="include">
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              style={{boxShadow: "-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF", background:"#000000"}}
            >
              {pendingTx
                ? TranslateString(548, 'Collecting EGG')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton  style={{boxShadow: "-0.16em -0.2em #98bec3, 0.16em 0.2em #FFFFFF", background:"#000000"}}  />
          )}
        </Actions>

    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
