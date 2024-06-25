import React, { useState } from 'react'
import {Box, Button, Input} from "@chakra-ui/react"

function MessageInput() {


  const [message,setMessage] = useState("")

  const handleClickSend = () => {

  }

  return (
    <Box mt="20px">
       <Box display="flex">
       <Input value={message} onChange={(e)=> setMessage(e.target.value) } backgroundColor="white" border="2px solid #ddd" placeholder='Enter a message...'/>
       <Button onClick={handleClickSend} colorScheme='blue' ml="10px">Send</Button>
       </Box>
    </Box>
  )
}

export default MessageInput