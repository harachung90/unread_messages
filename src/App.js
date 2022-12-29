import './App.css';
import React from 'react';

function App() {

    const [messages, setMessages] = React.useState(["Msg 1", "Msg 2"])


    return (
        <div>
            {/*{MsgElement}*/}
            {/*<MsgReminder />*/}

            <div>
                { messages.length === 0 ?
                    <h1>You're all caught up!</h1>
                    : <h1>You have {messages.length} unread
                        { messages.length > 1 ? " messages" : " message"}!</h1>}
            </div>
        </div>
    )
}

export default App;
