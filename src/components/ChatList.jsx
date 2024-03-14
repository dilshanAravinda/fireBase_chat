import React, { useEffect, useState } from 'react';
import { ListGroup, Image, Container, Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../db/auth';

function ChatList() {
  const [users, setUsers] = useState([]);
  console.log("users"+JSON.stringify(users))

  useEffect(()=> {
    const setAllUsers = async() => {
      const docs = await getAllUsers();
      setUsers(docs)
    };
    setAllUsers();
  }, [])

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredChats = users.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container style={{ maxWidth: '500px', marginTop: '20px' }}>
    <div className="d-flex justify-content-between">
      <Button className="btn btn-light my-3" onClick={() => navigate('/')}>
        SignOut
      </Button>
      <Button className="btn btn-light my-3" onClick={() => navigate('/chat')}>
        Chat History
      </Button>
    </div>
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
