"use strict";

const eventQueue = require("@cap-js-community/event-queue");
const LOG = cds.log("event-queue");

class EventQueue extends eventQueue.EventQueueProcessorBase {
  constructor(context, eventType, eventSubType, config) {
    super(context, eventType, eventSubType, config);
  }

  async processEvent(processContext, key, queueEntries, payload) {
    LOG.info("Adding payload to queue...", payload);
    const catalogService = await cds.connect.to("CatalogService");
    await catalogService.emit("MOCK_WEBSOCKET_EVENT", {
        type: "newValue",
        value: payload.value
    });
    LOG.info(`Emitted 'MOCK_WEBSOCKET_EVENT' at ${new Date().toISOString()}...`)

    return queueEntries.map((queueEntry) => [
      queueEntry.ID,
      eventQueue.EventProcessingStatus.Done,
    ]);
  }
}

module.exports = EventQueue;