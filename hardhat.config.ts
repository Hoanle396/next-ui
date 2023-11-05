import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const privateKey = "0ac8b3c67345b4c137f13037c5093793120e76d18c6691f42ada3a2668cc170d";

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    bnbTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      accounts: [privateKey],
    },
  },

  solidity: "0.8.19",
};

export default config;
