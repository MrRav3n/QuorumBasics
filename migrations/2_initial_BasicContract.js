const BasicContract = artifacts.require("BasicContract");

module.exports = function(deployer) {
    deployer.deploy(BasicContract, "Dawid", 17, {privateFor: ["R56gy4dn24YOjwyesTczYa8m5xhP6hF2uTMCju/1xkY=", "oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8="]});
};
