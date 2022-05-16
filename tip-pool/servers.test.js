describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

describe("Servers Info test", function() {

    it('should add a new server to allServers on submitServerInfo()', function () {

      submitServerInfo();

      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should not add an empty name', function () {
        serverNameInput.value = '';
      submitServerInfo();

      expect(allServers.length).toEqual(undefined);

      serverNameInput.value = '    ';
    submitServerInfo();

    expect(allServers.length).toEqual(undefined);
    });

});


  describe("Servers Table test", function() {

    it('should make a table', function () {

    submitServerInfo();


    expect(serverTbody.innerHTML).not.toEqual('');
    });

    it('should clear table if allServers is empty', function () {
    allServers = {};
    updateServerTable();

    expect(serverTbody.innerHTML).toEqual('');
    });


  });


  afterEach(function() {
serverNameInput.value = '';
serverId =0;
  allServers = {};
  updateServerTable();
    // teardown logic
  });


});
