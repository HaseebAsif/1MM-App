import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: '1MM',
    lpAddresses: {
      96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x284Cf18ed54e9cbB5cdc6157203a35D9ef7b984A',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: '1MM-BNB LP',
    lpAddresses: {
      96: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x6C7e9d0a1F4169727B17a9759aE0181dDa7Dd5E0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x27860b92E7a193d072b4aED10a6e3054fa5759a0',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  
  /**
   * 
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  
  
]

export default farms
