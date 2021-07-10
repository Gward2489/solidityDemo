pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BananaToken is ERC20 {


    // mints BananaTokens to the accounts that deploys the smart contract
    constructor() public ERC20("BananaToken", "MTKN"){
        _mint(msg.sender, 1000000000000000000000000);
    }


}
