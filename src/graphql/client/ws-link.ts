import { API_WS_HOST } from '../../constants';
import { AsyncStore } from '../../services';
import { WebSocketLink } from './web-socket-link';

let restartRequestedBeforeConnected = false;
let gracefullyRestart = () => {
  restartRequestedBeforeConnected = true;
};

export const wsLink = new WebSocketLink({
  url: API_WS_HOST,
  connectionParams: async () => {
    const token = await AsyncStore.getValue('token');
    return {
      authorization: `Bearer ${token}`,
    };
  },
  on: {
    connected: (socket) => {
      gracefullyRestart = () => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.close(4205, 'Client Restart');
        }
      };

      // just in case you were eager to restart
      if (restartRequestedBeforeConnected) {
        restartRequestedBeforeConnected = false;
        gracefullyRestart();
      }
    },
  },
  shouldRetry: () => {
    return true;
  },
});
