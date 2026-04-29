using {sap.eventqueue.Event as Event} from '@cap-js-community/event-queue';

@protocol: [
    'websocket',
    'odata'
]
service CatalogService {

    entity Events as projection on Event;

    event MOCK_WEBSOCKET_EVENT {
        type  : String;
        value : String;
    }

    function mockWebSocket() returns Boolean;
}
