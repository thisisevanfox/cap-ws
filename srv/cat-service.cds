@protocol: [
    'websocket',
    'odata'
]
service CatalogService {

    event MOCK_WEBSOCKET_EVENT {
        type  : String;
        value : String;
    }

    function mockWebSocket() returns Boolean;
}
