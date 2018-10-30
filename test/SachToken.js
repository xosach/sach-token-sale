var SachToken = artifacts.require("../contracts/SachToken.sol");

contract('SachToken', function(accounts) {

  it('sets the total supply upon deployment', function(){
    return SachToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'set the total supply to 1,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance){
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial balance to the admin account');
    });
    });

    it('allocates the inital supply to the admin account', function(){
      return SachToken.deployed().then(function(instance) {
        tokenInstance = instance;
        return tokenInstance.balanceOf(accounts[0]);
      }).then(function(adminBalance){
        assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial balance to the admin account');
      });
      });
  });
