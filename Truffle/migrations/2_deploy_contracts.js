const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const CrowdPoolDodo = artifacts.require("CrowdPoolDodo");

module.exports = function(deployer) {
  deployer.deploy(CrowdPoolDodo);
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin, CrowdPoolDodo);
  deployer.deploy(MetaCoin);
};
