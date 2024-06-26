import React, { useState } from 'react'
import {Box, Button, Input} from "@chakra-ui/react"
import { useChat } from '../context/ChatContext'
import { sendMessage } from '../socketApi'

function MessageInput() {


  const [message,setMessage] = useState("")

  const {setMessages} = useChat()

  const handleClickSend = () => {
    setMessages((prev)=> [...prev,{message,fromMe:true}])
    sendMessage(message)
    setMessage('')
  }

  return (
    <Box mt="20px">
       <Box display="flex">
       <Input onKeyDown={(e)=> e.key ==="Enter" ? handleClickSend(): ""} value={message} onChange={(e)=> setMessage(e.target.value) } backgroundColor="white" border="2px solid #ddd" placeholder='Enter a message...'/>
       <Button onClick={handleClickSend} colorScheme='blue' ml="10px">Send</Button>
       </Box>
    </Box>
  )
}

export default MessageInput