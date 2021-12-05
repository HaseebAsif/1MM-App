import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: '1MM Aggregator protocol will soon be enabled.',
  bodyText: 'Trade tokens at the best prices on Ethereum blockchain, Binance blockchain, Polygon blockchain and, Avalanche blockchain. Using our DEX aggregator, tap into liquidity on 35+ decentralized exchanges, such as 0x, Uniswap, 1inch, pancakeswap, and Kyber, to execute your trade with the best return and lowest transaction fees.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },

  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: '1MM Swap makes it simple to make your crypto work for you!.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
 
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: '1MM is the governance token of 1MM Swap.',
  bodyText:
    '1MM token is at the core of the 1MM Swap ecosystem. Buy, trade,  farm, stake, earn, and vote with ADEX.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x284Cf18ed54e9cbB5cdc6157203a35D9ef7b984A',
    text: 'Buy 1MM',
    external: false,
  },


  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'coin', alt: '1MM token' }
    ],
  },
}
