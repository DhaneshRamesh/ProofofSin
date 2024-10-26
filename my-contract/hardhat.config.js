/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/0r2xBdPf618IPwRVGDjtL-O-i7f29yFp", 
      accounts: ["e3c4bff756619ef5e39bb46aab9351341d51222950849f4981ff12fe18fb6ba5"] 
    }
  }
};
