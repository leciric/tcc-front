// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//  import "hardhat/console.sol";

contract DocumentAuthentication {
    mapping(bytes32 => bool) private hashes;

    function storeHash(bytes32 hash) public {
        require(!hashes[hash], "Hash already stored");
        hashes[hash] = true;
    }

    function verifyHash(bytes32 hash) public view returns (bool) {
        return hashes[hash];
    }
}

// contract Lock {
//     uint public unlockTime;
//     address payable public owner;

//     event Withdrawal(uint amount, uint when);

//     constructor(uint _unlockTime) payable {
//         require(
//             block.timestamp < _unlockTime,
//             "Unlock time should be in the future"
//         );

//         unlockTime = _unlockTime;
//         owner = payable(msg.sender);
//     }

//     function withdraw() public {
//         // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
//         // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

//         require(block.timestamp >= unlockTime, "You can't withdraw yet");
//         require(msg.sender == owner, "You aren't the owner");

//         emit Withdrawal(address(this).balance, block.timestamp);

//         owner.transfer(address(this).balance);
//     }
// }
