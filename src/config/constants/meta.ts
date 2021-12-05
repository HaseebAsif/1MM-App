import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: '1MM Swap',
  description:
    'The most popular AMM on BSC by user count! Earn 1MM through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by 1MM Swap), NFTs, and more, on a platform you can trust.',
  image: 'https://alpinedex.finance/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('1MM Swap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('1MM Swap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('1MM Swap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('1MM Swap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('1MM Swap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('1MM Swap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('1MM Swap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('1MM Swap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('1MM Swap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('1MM Swap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('1MM Swap')}`,
      }
    default:
      return null
  }
}
