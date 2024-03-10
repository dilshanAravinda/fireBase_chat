import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Error({ errorMessage, redirectPath }) {
  const navigate = useNavigate();

  const redirectToPath = () => {
    navigate(redirectPath);
  };

  return (
    <div>
      <h2>Error</h2>
      <p>{errorMessage}</p>
      <Button variant="primary" onClick={redirectToPath}>Go Back</Button>
    </div>
  );
}

export default Error;
