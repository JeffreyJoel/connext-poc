const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SourceGreeterModule", (m) => {
  const connext = m.getParameter("connext", "0x445fbf9cCbaf7d557fd771d56937E94397f43965");
  const token = m.getParameter("token", "0xd26e3540A0A368845B234736A0700E0a5A821bBA");

  const sourceGreeterContract = m.contract("SourceGreeter", [connext, token]);

  return { sourceGreeterContract };
});