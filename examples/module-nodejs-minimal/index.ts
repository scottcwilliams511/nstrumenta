import { ClientStatus, NstrumentaClient } from '../../src/lib/client';
import ws from 'ws';
import { URL } from 'url';

const nstClient = new NstrumentaClient();

setInterval(() => {
  if (nstClient.connection.status === ClientStatus.CONNECTED) {
    nstClient.send('time', { timestamp: Date.now() });
  }
}, 3000);

// listen for 'open' event
nstClient.addListener('open', () => {
  console.log('open');

  // now that the connection to the pub/sub server is open, subscribe to a message channel
  nstClient.addSubscription('time', (message) => {
    console.log(message);
  });
});

// connect to the client after we've set up the listeners
nstClient.connect({
  nodeWebSocket: ws as any,
  wsUrl: new URL('ws://localhost:8088'),
});
