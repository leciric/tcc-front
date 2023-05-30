import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import fs from 'fs';

const privateKey = fs.readFileSync(".secret").toString();

const config: HardhatUserConfig = {
  networks: {
    hardhat:{
      chainId: 1337
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/v1/5254e36f63468fd6e5b434ea8505561b638484a5',
      accounts: [privateKey]
    },
    mainnet: {
      url: 'https://rpc-mainnet.maticvigil.com/v1/5254e36f63468fd6e5b434ea8505561b638484a5',
      accounts: [privateKey]
    },
  },
  solidity: "0.8.18",
};

export default config;
