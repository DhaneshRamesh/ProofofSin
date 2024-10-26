// Import necessary modules from Hardhat
const { ethers, upgrades } = require("hardhat");

async function main() {
    // Get the contract factory for your ERC721 contract
    const Contract = await ethers.getContractFactory("TestingContract");
    
    // Deploy the contract
    const contract = await Contract.deploy();

    // Wait for the deployment to finish
    await contract.deployed();

    // Log the contract address to the console
    console.log("Contract deployed to:", contract.address);
}

// Handle errors and exit the process
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

