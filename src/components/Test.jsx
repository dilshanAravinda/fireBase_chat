import React from 'react';
import {sentNewMsg} from '../db/queries/newMsg'

function Test() {
 const onclickHandle = () => {
  sentNewMsg('complaints-chats', 'user-01', 'chat', 
  {
    attachmentUrl: 'url',
    receiverID: "1", 
    senderID: "2", 
    type: "text" 
  }
)
 }
  return (
    <>
      <button onClick={onclickHandle}>
        click
      </button>
    </>
  )
}

export default Test