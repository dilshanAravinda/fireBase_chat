export default function ChatMessage(props) {
    const { text, uid } = props.message;
  
    const messageClass = uid === 1 ? 'sent' : 'received';
    const imgPath = uid ===1 ? "/profileImg/1.jfif": "/profileImg/2.png"
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img alt="hello" src={imgPath}/>
        <p>{text}</p>
      </div>
    </>)
  }
  