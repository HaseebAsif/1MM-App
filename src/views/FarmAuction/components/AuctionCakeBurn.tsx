import React, { useState, useEffect } from 'react'
import { Text, Flex, Skeleton, Box, Image } from '@pancakeswap/uikit'
import { useFarmAuctionContract } from 'hooks/useContract'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { ethersToBigNumber } from 'utils/bigNumber'
import Balance from 'components/Balance'

const AuctionCakeBurn: React.FC = () => {
  const [burnedCakeAmount, setBurnedCakeAmount] = useState(0)
  const { t } = useTranslation()
  const farmAuctionContract = useFarmAuctionContract()
  const cakePriceBusd = usePriceCakeBusd()

  const burnedAmountAsUSD = cakePriceBusd.times(burnedCakeAmount)

  useEffect(() => {
    const fetchBurnedCakeAmount = async () => {
      try {
        const amount = await farmAuctionContract.totalCollected()
        const amountAsBN = ethersToBigNumber(amount)
        setBurnedCakeAmount(getBalanceNumber(amountAsBN))
      } catch (error) {
        console.error('Failed to fetch burned auction cake', error)
      }
    }
    if (burnedCakeAmount === 0) {
      fetchBurnedCakeAmount()
    }
  }, [burnedCakeAmount, farmAuctionContract])
  return (
    <Flex flexDirection={['column-reverse', null, 'row']}>
      <Flex flexDirection="column" flex="2">
        {burnedCakeAmount !== 0 ? (
          <Balance fontSize="64px" bold value={burnedCakeAmount} decimals={0} unit=" ADEX" />
        ) : (
          <Skeleton width="256px" height="64px" />
        )}
        <Text textTransform="uppercase" fontSize="64px" bold color="secondary">
          {t('Burned')}
        </Text>
        <Text fontSize="24px" bold>
          {t('through community auctions so far!')}
        </Text>
        {!burnedAmountAsUSD.isNaN() && !burnedAmountAsUSD.isZero() ? (
          <Text color="textSubtle">
            ~${burnedAmountAsUSD.toNumber().toLocaleString('en', { maximumFractionDigits: 0 })}
          </Text>
        ) : (
          <Skeleton width="128px" />
        )}
      </Flex>
      <Flex flex="1" alignSelf="center">
        <Box width="350px">
          <Image width={350} height={320} src="/images/burnt-cake.png" alt={t('Burnt 1MM')} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default AuctionCakeBurn
