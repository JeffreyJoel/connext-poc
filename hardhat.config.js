require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks:{
    sepolia:{
      url: `${process.env.SEPOLIA_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    optimism_sepolia:{
      url: `${process.env.OP_SEPOLIA_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: `${process.env.ETHERSCAN_API_KEY}`,
      optimism_sepolia: `${process.env.OPSCAN_API_KEY}`,
    }
  },
  customChains: [
    {
      network: "optimism_sepolia",
      chainId: 11155420,
      urls: {
        apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
        browserURL: "https://sepolia-optimism.etherscan.io"
      }
    }
  ],

  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};