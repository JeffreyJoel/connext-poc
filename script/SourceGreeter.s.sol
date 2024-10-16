// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "forge-std/console.sol";
import {Script} from "forge-std/Script.sol";
import {SourceGreeter} from "../src/SourceGreeter.sol";

contract DeploySourceGreeter is Script {
    function run() external {
        //Connext address on Sepolia
        address connextOnSepolia = 0x445fbf9cCbaf7d557fd771d56937E94397f43965;

        //TEST token address on Sepolia
        address testOnSepolia = 0xd26e3540A0A368845B234736A0700E0a5A821bBA;

        vm.startBroadcast();

        SourceGreeter sourceGreeterContract = new SourceGreeter(connextOnSepolia, testOnSepolia);

        console.log("Contract deployed to:", address(sourceGreeterContract));

        vm.stopBroadcast();
    }
}
