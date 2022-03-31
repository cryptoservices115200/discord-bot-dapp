import {BigNumber} from 'ethers';

export const DECIMALS_18 = BigNumber.from(25).mul(1e13);

export const BOND_REDEEM_PRICE = 1.01;
export const BOND_REDEEM_PRICE_BN = DECIMALS_18.mul(101).div(100);
