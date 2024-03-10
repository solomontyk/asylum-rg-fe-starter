import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Page Not Found</h1>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">
          <button
            style={{
              marginBottom: '50px',
              padding: '10px 20px',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '50px',
              border: 'none',
            }}
          >
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
