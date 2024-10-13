const main = async () => {
    const sourceGreeterContract = await hre.ethers.deployContract(
      "SourceGreeter",
      [
        "0x445fbf9cCbaf7d557fd771d56937E94397f43965", // Connext on Sepolia
        "0xd26e3540A0A368845B234736A0700E0a5A821bBA" // TEST on Sepolia
      ]
    );
    await sourceGreeterContract.waitForDeployment();
    console.log("Contract deployed to:", await sourceGreeterContract.getAddress());
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

  //0xf1dD1b964784AeAe3D349e6B105ec6A45b3B577b on Eth-sepolia