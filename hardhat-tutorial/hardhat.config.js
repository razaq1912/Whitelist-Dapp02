require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = "https://eth-rinkeby.alchemyapi.io/v2/jNMcVmv3pmcfReV853Xsh9tZzYdrfWzs";

const RINKEBY_PRIVATE_KEY = "726369ab4dacea7264478038d919c36ba178fe326142282e72604fe0788f4afa";

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
}