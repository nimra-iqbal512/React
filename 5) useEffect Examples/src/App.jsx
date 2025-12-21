import { useState, useEffect } from "react"
import { createConnection } from "./chat"

function ChatRoom({roomId}){
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(()=>{
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return ()=>{
      connection.disconnect();
    }
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:{' '}
        <input 
          type="text" 
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  )
}

function App() {
  const [roomId, setRoomId] = useState('gener');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose te chatroom:{" "}
        <select 
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <br />
      
      <button onClick={()=> setShow(!show) }>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  )
}

export default App
