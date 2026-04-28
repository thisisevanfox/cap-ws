sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("cap-ws.controller.View", {
        onInit() {
            let sWebSocketUrl = '';
            const sWebSocketEndpoint = '/ws/catalog'
            if (document.location.protocol === 'https:') {
                sWebSocketUrl = 'wss://' + document.location.host + sWebSocketEndpoint;
            } else {
                sWebSocketUrl = 'ws://' + document.location.host + sWebSocketEndpoint;
            }

            // mock auth for alice
            document.cookie = "X-Authorization=Basic YWxpY2U6YWxpY2U; path=/";
            const oWebSocket = new WebSocket(sWebSocketUrl);

            oWebSocket.onmessage = (oEvent) => {
                // debugger;
                const oMessage = JSON.parse(oEvent.data);
                const sMessageType = oMessage.event;
                const oMessageData = oMessage.data;

                if (sMessageType === 'MOCK_WEBSOCKET_EVENT') {
                    this.getView().byId("textfield").setText(`Value from web socket: ${oMessageData.value}`)
                }
            };

            oWebSocket.onopen = () => {
                console.log(
                    `WebSocket connection open, subscribing to updates`
                );
            };

            oWebSocket.onclose = () => {
                console.log('WebSocket connection closed');
            };

            // Keep reference so we can clean it up on exit
            this._oWebSocket = oWebSocket;
        },

        onExit() {
            if (this._oWebSocket) {
                this._oWebSocket.close();
            }
        }
    });
});