import React from 'react'
import MessageInput from './MessageInput'
import { Box, Container, Grid, GridItem } from '@chakra-ui/react'
import { useChat } from '../context/ChatContext'
import ScroolableFeed from "react-scrollable-feed"


function MessagesList() {


    const {messages} = useChat()

  return (
    <>
    <div className='messagesListBox'>
  <ScroolableFeed forceScroll={true}>


    {messages.map((item,i)=> (
      <div key={i} className={`messageItem ${item.fromMe ? 'right' : ''}`}>{item.message}</div>
    ))}


  </ScroolableFeed>
  </div>
   

  
<Container minWidth="50%"><MessageInput/></Container>
    </>
  )
}

export default MessagesList