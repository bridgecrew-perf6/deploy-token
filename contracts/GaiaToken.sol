//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GaiaToken is ERC20 {
    uint256 constant _initial_supply = 753 * (10**18);

    constructor() ERC20("GaiaToken", "GAI") {
        _mint(msg.sender, _initial_supply);
    }
}
