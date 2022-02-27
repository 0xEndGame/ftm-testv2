import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://spookyswap.finance/swap?outputCurrency=0x308f5CcF878d8BaA778f2d1f227E3B58E6052B37',
      },
      {
        label: 'Liquidity',
        href: 'https://spookyswap.finance/pool',
      },
    ],
  },
  {
    label: 'LP Staking',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Single Staking',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Referral Network',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Mineral Mines',
    icon: 'BondsIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Listing',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Farmscan',
        href: '/',
      },
      {
        label: 'CoinGecko',
        href: '/',
      },
      {
        label: 'CoinMarketCap',
        href: '/',
      },
      {
        label: 'vFat Tools',
        href: '/',
      },
    ],
  },
  {
    label: 'Socials',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/TheCoalFarm',
      },
      {
        label: 'Docs',
        href: 'https://coal-farm.gitbook.io/coal-farm/',
      },
    ],
  },

  {
    label: 'KYC/Doxxed',
    icon: 'AuditIcon',
    href: '/',
  },

]

export default config
