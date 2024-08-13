const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

const contractOnAmoy = "0xE4E9aE0Ea1Dfc216867594fb55428C2726b607a1";

async function main() {
  const MetaNFT = await hre.ethers.getContractFactory("MetaNFT");
  const nftContractOnAmoy = await MetaNFT.attach(contractOnAmoy);

  const balance = await nftContractOnAmoy.balanceOf(ACCOUNT_ADDRESS);

  const [signer] =   await hre.ethers.getSigners();

  console.log(`
    Your MetaNFT Balance on
    ${contractOnAmoy}
    is: ${balance.toString()}
    `);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});