import { createConnection } from "./chat";
import { useEffect } from "react";

export function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    console.log(serverUrl);
    console.log(roomId);
    
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    }
  }, [roomId, serverUrl]);
}