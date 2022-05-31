const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');
const TOKEN_ADDRESS = '0xaB63AB70d6F7aF905c488a7D7093f1de51Af255C';

const main = async () => {
  const token = await hre.ethers.getContractAt('GaiaToken', TOKEN_ADDRESS);
  console.log('connected to token contract');
  const success = await token.transfer(
    '0x76BF514548E039Eac241E4697001A6717d9C04d8',
    BigNumber.from(40).mul(BigNumber.from(10).pow(18))
  );
  await success.wait();

  console.log(success ? 'Transfer successful' : 'Something went wrong', success);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
