@protocol: [
    'websocket',
    'odata'
]
service CatalogService {

    event wsTest {
        type  : String;
        value : String;
    }

    event valueUpdated {
        type  : String;
        value : String;
    }

    function mockFunction() returns Boolean;
}
