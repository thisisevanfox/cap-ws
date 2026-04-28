# Getting Started

- Run `npm i`
- Run `npm run dev`
- Open the [UI5 Web Socket sample application](http://localhost:8080/launchpad#WebSocket-display)
- If prompted, use `alice` to login
- The UI5 applications successfully receives values from the web socket ✅
- Copy the content from the `.cdsrc.json-with-multitenancy` file to `.cdsrc.json` (the difference is the addition of `"multitenancy": true` and `"cds.xt.SaasProvisioningService": true`)
- Run `npm run dev`
- Open the [UI5 Web Socket sample application](http://localhost:8080/launchpad#WebSocket-display)
- The UI5 applications no longer receives values from the web socket ❌
