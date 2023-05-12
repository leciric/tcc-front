// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//  import "hardhat/console.sol";

contract DocumentAuthentication {
    mapping(bytes32 => string) private hashToOwner;
    mapping(string => bytes32) private ownerToHash;
    mapping(string => bytes32[]) private ownerToHashList;

    function storeHash(bytes32 hash, string memory owner) public {
        require(bytes(hashToOwner[hash]).length == 0, "Hash already stored");

        bytes32 oldHash = ownerToHash[owner];
        if (oldHash != 0) {
            ownerToHashList[owner].push(hash);
        } else {
            bytes32[] memory hashList = new bytes32[](1);
            hashList[0] = hash;
            ownerToHashList[owner] = hashList;
        }
        hashToOwner[hash] = owner;
        ownerToHash[owner] = hash;
    }

    function verifyHash(bytes32 hash) public view returns (string memory) {
        return hashToOwner[hash];
    }

    function getHashes(string memory owner) public view returns (bytes32[] memory) {
        return ownerToHashList[owner];
    }

    function changeOwner(bytes32 hash, string memory newOwner) public {
        require(bytes(hashToOwner[hash]).length > 0, "Hash not found");
        bytes32 oldHash = ownerToHash[newOwner];
        if (oldHash != 0) {
            ownerToHashList[newOwner].push(hash);
        } else {
            bytes32[] memory hashList = new bytes32[](1);
            hashList[0] = hash;
            ownerToHashList[newOwner] = hashList;
        }
        hashToOwner[hash] = newOwner;
        ownerToHash[newOwner] = hash;
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
