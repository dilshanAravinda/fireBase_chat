import React, { useState } from 'react';
import { ListGroup, Image, Container, Form } from 'react-bootstrap';

function ChatList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', lastMessage: 'I\'m doing great, thanks!', image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Alice Johnson', lastMessage: 'What are you up to today?', image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Bob Williams', lastMessage: 'Let\'s catch up later.', image: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Emily Brown', lastMessage: 'Sure thing!', image: 'https://via.placeholder.com/50' },
  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container style={{ maxWidth: '500px', marginTop: '20px' }}>
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      <ListGroup className="shadow">
        {filteredChats.map(chat => (
          <ListGroup.Item key={chat.id} action>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image src={chat.image} roundedCircle className="mx-3" />
                <div>{chat.name}</div>
              </div>
              <div className="text-muted">{chat.lastMessage}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ChatList;
