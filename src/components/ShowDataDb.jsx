// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { getChatsByClientId } from '../db/quaries';


// const ShowDataDb = () => {
//   const [searchData, setSearchData] = useState({
//     clientId: '',
//     serviceProviderId: '',
//     complaintId: ''
//   });

//   const [searchResults, setSearchResults] = useState(null);
//   console.log("search results"+searchResults);
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setSearchData({
//       ...searchData,
//       [name]: value
//     });
//   };

//   const handleSearch = async () => {
//     try {
//       console.log('Searching with data:', searchData);
//       const clientID = searchData.clientId;
//       const chatArr = await getChatsByClientId(clientID);
//       setSearchResults(chatArr);
//       console.log("chat arr", chatArr);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  


//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col xs={12} md={6}>
//           <Form>
//             <Form.Group controlId="clientId">
//               <Form.Label>Client ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="clientId"
//                 value={searchData.clientId}
//                 onChange={handleChange}
//                 placeholder="Enter Client ID"
//               />
//             </Form.Group>

//             <Form.Group controlId="serviceProviderId">
//               <Form.Label>Service Provider ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="serviceProviderId"
//                 value={searchData.serviceProviderId}
//                 onChange={handleChange}
//                 placeholder="Enter Service Provider ID"
//               />
//             </Form.Group>

//             <Form.Group controlId="complaintId">
//               <Form.Label>Complaint ID</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="complaintId"
//                 value={searchData.complaintId}
//                 onChange={handleChange}
//                 placeholder="Enter Complaint ID"
//               />
//             </Form.Group>

//             <Button variant="primary" onClick={handleSearch}>
//               Search
//             </Button>
//           </Form>
//         </Col>
//       </Row>

//       {searchResults && <Row className="mt-4 justify-content-center">
//         {searchResults.map((result, index) => (
//           <Col key={index} xs={12} md={6}>
//             <Card className="mb-3">
//               <Card.Body>
//                 <Card.Title>Complaint ID: {result.meta.complaintId}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">Service Provider: {result.meta.spId}</Card.Subtitle>
//                 <Card.Text>Client ID: {result.meta.clientId}</Card.Text>
//                 <Card.Text>Messages:</Card.Text>
//                 <ul>
//                   {result.data.map((message, idx) => (
//                     <li key={idx}>{message.msg}</li>
//                   ))}
//                 </ul>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>}
//     </Container>
//   );
// };

// export default ShowDataDb;


// //ShowDataDb


import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { getChatsByClientId, getChatsByServiceProviderId, getChatsByComplaintId } from '../db/quaries';

const ShowDataDb = () => {
  const [searchData, setSearchData] = useState({
    clientId: '',
    serviceProviderId: '',
    complaintId: ''
  });

  const [searchResults, setSearchResults] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchData({
      ...searchData,
      [name]: value
    });
  };

  const handleSearch = async () => {
    try {
      console.log('Searching with data:', searchData);

      if (searchData.clientId) {
        const chatArr = await getChatsByClientId(searchData.clientId);
        setSearchResults(chatArr);
      } else if (searchData.serviceProviderId) {
        const chatArr = await getChatsByServiceProviderId(searchData.serviceProviderId);
        setSearchResults(chatArr);
      } else if (searchData.complaintId) {
        const chatArr = await getChatsByComplaintId(searchData.complaintId);
        setSearchResults(chatArr);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="clientId">
              <Form.Label>Client ID</Form.Label>
              <Form.Control
                type="text"
                name="clientId"
                value={searchData.clientId}
                onChange={handleChange}
                placeholder="Enter Client ID"
              />
            </Form.Group>

            <Form.Group controlId="serviceProviderId">
              <Form.Label>Service Provider ID</Form.Label>
              <Form.Control
                type="text"
                name="serviceProviderId"
                value={searchData.serviceProviderId}
                onChange={handleChange}
                placeholder="Enter Service Provider ID"
              />
            </Form.Group>

            <Form.Group controlId="complaintId">
              <Form.Label>Complaint ID</Form.Label>
              <Form.Control
                type="text"
                name="complaintId"
                value={searchData.complaintId}
                onChange={handleChange}
                placeholder="Enter Complaint ID"
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      {searchResults && (
        <Row className="mt-4 justify-content-center">
          {searchResults.map((result, index) => (
            <Col key={index} xs={12} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Complaint ID: {result.meta.complaintId}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Service Provider: {result.meta.spId}</Card.Subtitle>
                  <Card.Text>Client ID: {result.meta.clientId}</Card.Text>
                  <Card.Text>Messages:</Card.Text>
                  <ul>
                    {result.data.map((message, idx) => (
                      <li key={idx}>{message.msg}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ShowDataDb;
