const cds = require("@sap/cds");
let CronJob = require("cron").CronJob;

let job = new CronJob(
    "*/2 * * * * *",
    async function () {
        const catalogService = await cds.connect.to("CatalogService");

        try {
            catalogService.send("mockFunction");
        } catch (error) {
            console.error("Error collecting system metrics:", error);
        }
    },
    null,
    false,
    "Europe/Berlin"
);

cds.on("bootstrap", async (app) => {
    console.log("[cap-ws] Bootstrapping...");
});

cds.on("listening", ({ server }) => {
    console.log("[cap-ws] Listening...");
    job.start();
});

cds.on("shutdown", () => {
    console.log("[cap-ws] Shuting down...");
    job.stop();
});

// handle and override options
module.exports = (options) => {
    // delegate to default server.js
    return cds.server(options);
};
