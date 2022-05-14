require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    "optimistic-kovan": {
      url: "https://kovan.optimism.io",
      accounts: [process.env.PRIVKEY],
    },
  },
};
