
/* global ethers task */
require('@nomiclabs/hardhat-waffle')

let secrets = require("./secrets");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    ropsten: {
      url: secrets.deploy_ropsten_url,
      accounts: [secrets.deploy_private_key],
    },
    mainnet: {
      url: secrets.deploy_mainnet_url,
      accounts: [secrets.deploy_private_key],
    },
    matic: {
      url: secrets.deploy_polygon_url,
      accounts: [secrets.deploy_private_key],
    },
    arbitrum: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [secrets.deploy_private_key],
    },
  },
  solidity: '0.8.6',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
