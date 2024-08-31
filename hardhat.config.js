require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    fantom: {
      url: process.env.FANTOM_TESTNET_URL || "",
      gasPrice: 35000000000,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    holesky: {
      url: process.env.HOLESKY_TESTNET_URL || "",
      gasPrice: 35000000000,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },

};
