const cds = require("@sap/cds");
const LOG = cds.log("catalog-service");
const eventQueue = require("@cap-js-community/event-queue");

module.exports = (srv) => {
    srv.on('mockWebSocket', async (req) => {
        const value = new Date().toISOString();
        LOG.info(
            `Processing value: ${value}`
        );
        const startAfterDate = new Date();
        startAfterDate.setMinutes(startAfterDate.getMinutes() + 1);
        await eventQueue.publishEvent(cds.tx(req), {
            type: "MOCK_EVENT",
            subType: "Single",
            payload: JSON.stringify({ value }),
            startAfter: startAfterDate
        });
        return true;
    })
};