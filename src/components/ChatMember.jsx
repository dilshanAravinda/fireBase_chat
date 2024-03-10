export default function ChatMember(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = 'received';
    const imgPath = uid ===1 ? "/profileImg/1.jfif": "/profileImg/2.png"
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img alt="hello" src={imgPath}/>
        <p>{text}</p>
      </div>
    </>)
  }
  