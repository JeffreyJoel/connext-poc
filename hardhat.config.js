require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks:{
    sepolia:{
      url: `${process.env.ALCHEMY_SEPOLIA_API_KEY_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    optimism_sepolia:{
      url: `${process.env.ALCHEMY_OP_SEPOLIA_API_KEY_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      // sepolia: `${process.env.ETHER_SCAN_KEY}`,
      optimism_sepolia: `${process.env.OP_SCAN_KEY}`,
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