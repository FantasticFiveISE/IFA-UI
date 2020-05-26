import React, { useContext } from 'react';
import { AuthContext } from "./authProvider";
import SockJsClient from "react-stomp";

export const NotificationContext = React.createContext();

function NotificationProvider({ children }) {

    const [state, setState] = React.useState({
        topics: [],
        clientConnected: false,
        notifications: [],
        client: null
    })

    const authContext = useContext(AuthContext);

    const onMessageReceive = (msg, topic) => {
        console.log([...state.notifications, msg]);
        setState({ ...state, notifications: [...state.notifications, msg] })
    }

    const initClient = client => {
        console.log("init client: ", client);
        if (!state.clientConnected && client) {
            setState({ ...state, client: client, clientConnected: true });
        }
        return null;
    }

    return (
        <NotificationContext.Provider value={{ state, setState }}>
            {
                children
            }
            <SockJsClient url="http://localhost:8080/notifications" topics={state.topics}
                onMessage={onMessageReceive} ref={(client) => { initClient(client) }}
                onConnect={() => { setState({ ...state, clientConnected: true }) }}
                onDisconnect={() => { setState({ ...state, clientConnected: false }) }}
                debug={false} />
        </NotificationContext.Provider>
    )
}

export default NotificationProvider;
