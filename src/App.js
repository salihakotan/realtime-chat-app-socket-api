import Header from './components/Header';
import Messages from './components/Messages';
import Footer from './components/Footer';
import {useChat} from "./context/ChatContext"
import { useEffect } from 'react';
import { init, subscribeChat, subscribeInitialMessages } from './socketApi';

function App() {


  const {setMessages} = useChat()


  useEffect(()=> {
    init()
    subscribeInitialMessages((messages)=> {
      setMessages(messages)
    })
    subscribeChat((message)=> {
      setMessages((prev)=> [...prev,{message}])
    })
  },[setMessages])


 

  return (
    <div className="App">
        <Header/>
        <div className='pageContent'>
        <Messages/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
