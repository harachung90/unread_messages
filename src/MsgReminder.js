import React from "react";
import MsgList from "./MsgList";

export default function MsgReminder(props) {
    const [messages, setMessages] = React.useState({
        txt: "",
        read: false
    })

    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */

    const numUnreadMsg = MsgList.filter(message => message.read === false).length

    return (
        <div>
            {numUnreadMsg > 0 && <h1>You have {numUnreadMsg} unread messages!</h1>}
        </div>
    )
}