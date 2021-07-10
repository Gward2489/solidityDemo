const Naner = artifacts.require("BananaToken")
const FarmToken = artifacts.require("FarmToken")



module.exports = async function (deployer, network, accounts) {
  // Deploy MyToken
  await deployer.deploy(Naner)
  const myToken = await Naner.deployed()

  // Deploy Farm Token
  await deployer.deploy(FarmToken, myToken.address)
  const farmToken = await FarmToken.deployed()

}
