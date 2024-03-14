import { useState, useEffect, useRef } from "react";
import {subscribe} from '../firebase/helpers/unsubscribe';
import generateId from '../firebase/helpers/generateId'
import {msgModel} from '../firebase/model/msgModel'
import {setDocWithId} from '../firebase/crud/setDoc';
import SignOut from "./SignOut";
import ChatMessage from "./ChatMessage";
import {currentUser} from '../firebase/auth/users';
import { useNavigate } from "react-router-dom";

export default function ChatRoom() {
  const navigateToChat = useNavigate();
useEffect(()=> {currentUser()})
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [isSignOut , setIsSignOut] = useState(false);
  const [id , setId] = useState(null);

  const dummy = useRef();

  useEffect(()=> {
    const cb = (sn)=> { 
      let data = sn.docs.map(doc=>  {
        const data = doc.data();
        const id = doc.id;
        data.id = id;
        return data;
      });
      data.sort((a, b) => a.id - b.id);
      const size = sn.size;
      console.log("arr : "+JSON.stringify(data));
      setId(size);
      setMessages(data);
    }
    const unsubscribe = subscribe(cb);
    const setGenerateId = async () => {
      const id = await generateId();
      setId(id);
    }
    setGenerateId();
    return () => unsubscribe();
  }, [])

  const onChangeInput = (e) => {
    setFormValue(e.target.value)
  }

  const handleSubmit = async (e, uid) => {
    e.preventDefault();
    setDocWithId(id+"", msgModel(uid, formValue));
    setFormValue("")
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  const sectionRef = useRef(null);

  const scrollToBottom = () => {
    // Access the section element using the ref
    const sectionElement = sectionRef?.current;
    // Scroll to the bottom by setting scrollTop to the maximum value
    if(sectionElement) sectionElement.scrollTop = sectionElement?.scrollHeight;
  };

  // Scroll to the bottom when the component re-renders
  useEffect(() => {
    scrollToBottom();
  });
  return (<>
  <div className="App">
  <header>
       <button onClick={()=> navigateToChat('/chatList')}>Back</button>
    <SignOut setIsSignOut={setIsSignOut} />
     </header>

     <section>

    {!isSignOut && <main onScroll={()=> console.log(sectionRef.current.scrollTop)} ref={sectionRef} >

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>}

    <form onSubmit={handleSubmit} >

      <input value={formValue} placeholder="say something nice" onChange={onChangeInput}/>

      {/* <button type="submit">🕊️</button> */}

      <button type="submit" value="1" onClick={(e)=>handleSubmit(e,1)}>
        <img alt="hello" src='/profileImg/1.jfif' value="1"/>
      </button>
      
      <button value="2" type="submit" onClick={(e)=>handleSubmit(e,2)}>
        <img alt='hello' src='/profileImg/2.png' value="2" />
      </button>

    </form>
    </section>
    </div>
  </>)
}