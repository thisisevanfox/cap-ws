const cds = require("@sap/cds");
const LOG = cds.log("catalog-service");

module.exports = (srv) => {
    srv.on('mockWebSocket', async (req) => {
        const value = new Date().toISOString();
        LOG.info(
            `Processing value: ${value}`
        );
        const catalogService = await cds.connect.to("CatalogService");
        srv.emit("MOCK_WEBSOCKET_EVENT", {
            type: "newValue",
            value: new Date().toISOString()
        });
        return true;
    })
};