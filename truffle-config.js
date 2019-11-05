require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22000, // replace with quorum node port you wish to connect to
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    },
    node3: {
      host: "127.0.0.1",
      port: 22003, // replace with quorum node port you wish to connect to
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    },
    node5: {
      host: "127.0.0.1",
      port: 22004, // replace with quorum node port you wish to connect to
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
