const main = async () => {
    const destinationGreeterContract = await hre.ethers.deployContract(
      "DestinationGreeter",
      [
        "0x7Fa13D6CB44164ea09dF8BCc673A8849092D435b" // TEST on Optimism-Sepolia
      ]
    );
    await destinationGreeterContract.waitForDeployment();
    console.log("Contract deployed to:", await destinationGreeterContract.getAddress());
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

  //0x994095eBc2d3fb60bFf11555026CFdb9922E93d2 on OP-sepolia