// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "forge-std/console.sol";
import {Script} from "forge-std/Script.sol";
import {DestinationGreeter} from "../src/DestinationGreeter.sol";

contract DeployDestinationGreeter is Script {
    function run() external {

        //TEST token address on OP_Sepolia
        address testOnOPSepolia = 0x7Fa13D6CB44164ea09dF8BCc673A8849092D435b;

        vm.startBroadcast();

        DestinationGreeter destinationGreeterContract = new DestinationGreeter(testOnOPSepolia);

        console.log("Contract deployed to:", address(destinationGreeterContract));

        vm.stopBroadcast();
    }
}