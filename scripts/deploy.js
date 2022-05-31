const { ethers } = require('hardhat');

const main = async () => {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contract with the account:', deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();

  console.log('Account Balance:', await ethers.utils.formatEther(weiAmount));

  const Token = await ethers.getContractFactory('GaiaToken');
  const token = await Token.deploy();

  console.log('Token address:', token.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
