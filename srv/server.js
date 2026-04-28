const cds = require("@sap/cds");

cds.on("bootstrap", async (app) => {
    console.log("[cap-ws] Bootstrapping...");
});

cds.on("listening", ({ server }) => {
    console.log("[cap-ws] Listening...");
});

cds.on("shutdown", () => {
    console.log("[cap-ws] Shuting down...");
});

// handle and override options
module.exports = (options) => {
    // delegate to default server.js
    return cds.server(options);
};
