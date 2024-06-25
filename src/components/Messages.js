import React from 'react'
import MessageInput from './MessageInput'
import { Box, Container, Grid, GridItem } from '@chakra-ui/react'

function MessagesList() {
  return (
    <Container mt="60px" className='messagesContainer'>

    <Box className='messagesListBox'>
      <Grid>
        <GridItem className='messageItem'>xxxxx</GridItem>
        <GridItem className='messageItem'>xxxxx</GridItem>
        <GridItem className='messageItem'>xxxxx</GridItem>
      </Grid>
    </Box>


      <MessageInput/>
    </Container>
  )
}

export default MessagesList