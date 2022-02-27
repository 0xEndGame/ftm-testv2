import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'COAL-USDT',
    lpAddresses: {
      250: '0x69f51BD5e2BFAd9d353858958664263D9ab48d8D',
      97: '',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      250: '0x9373da7861c2d71062c68de3b503c63d3995283f',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'COAL-WFTM',
    lpAddresses: {
      250: '0xE3F716070Bec6b4f07118f975Db3b15c0F8d41DE',
      97: '',
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      250: '0x9373da7861c2d71062c68de3b503c63d3995283f',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'WFTM-USDC',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
      97: '',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'WFTM-USDT',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 4,
    risk: 3,
    lpSymbol: 'WFTM-DAI',
    lpAddresses: {
      250: '0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428',
      97: '',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },

  {
    pid: 5,
    risk: 2,
    lpSymbol: 'BOO-WFTM',
    lpAddresses: {
      250: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
      97: '',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'WETH-WFTM',
    lpAddresses: {
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
      97: '',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 7,
    risk: 4,
    lpSymbol: 'WBTC-WFTM',
    lpAddresses: {
      250: '0xFdb9Ab8B9513Ad9E419Cf19530feE49d412C3Ee3',
      97: '',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'COAL',
    lpAddresses: {
      250: '0x69f51bd5e2bfad9d353858958664263d9ab48d8d',
      97: '', // COAL-USDT LP
    },
    tokenSymbol: 'COAL',
    tokenAddresses: {
      250: '0x9373da7861C2D71062C68DE3b503C63D3995283F',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WFTM',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '', // FTM-USDT
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
      97: '', // FTM-USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '', // FTM-USDC LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      250: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'MIM',
    lpAddresses: {
      250: '0x6f86e65b255c9111109d2D2325ca2dFc82456efc',
      97: '', // MIM-FTM LP
    },
    tokenSymbol: 'MIM',
    tokenAddresses: {
      250: '0x82f0B8B456c1A451378467398982d4834b6829c1',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 13,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      250: '0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428',
      97: '', // FTM-WBTC LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 14,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    lpAddresses: {
      250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
      97: '', // FTM-WBTC LP
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 15,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    lpAddresses: {
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
      97: '', // FTM-WETH LP
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
]

export default farms
