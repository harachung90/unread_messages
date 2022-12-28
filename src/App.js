import './App.css';
import React from 'react';
import MsgList from "./MsgList";
import MsgReminder from "./MsgReminder";

function App() {

    /*const MsgElement = MsgList.map(msg => {
        return <MsgReminder
            txt={msg.txt}
            read={msg.read}
            numUnreadMsg={msg.numUnreadMsg}
            />
    })*/

    //const numUnreadMsg = MsgList.filter(message => message.read === false).length
    //console.log(numUnreadMsg)

    return (
        <div>
            {/*{MsgElement}*/}
            <MsgReminder />
        </div>
    )
}

export default App;
