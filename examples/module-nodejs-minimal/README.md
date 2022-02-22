## Minimal nodejs module

A minimal nodejs module that sends a ping to its server and logs the response

What you'll need:

* A websocket url to a pubsub server, e.g.:
  * Local server: run `nst agent start`, and then `ws://localhost:8080` will be your websocket url
  * A vm launched from your nstrumenta web console. Check the console to find the `wss://` address
  * (advanced) Another node app you've made that starts an `NstrumentaServer`. The url will depend on your setup

In a terminal. go to the [examples](../) folder of this project and run:

```shell
nstrumenta module run --local
```

Follow the prompts to select the nodejs module
