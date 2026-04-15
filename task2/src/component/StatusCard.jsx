import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 16px;
  border-radius: 8px;
  margin: 10px;
  background-color: ${props => 
    props.type === 'success' ? 'green' : 
    props.type === 'error' ? 'red' : 
    'gray'
  }; 
  color: white;
`;

const StatusCard = ({ type}) => {
    const message = 
    type === 'success' ? 'Task completed successfully!' : 
    type === 'error' ? 'An error has occurred.' : 
    'Status unknown';
  return (
    <StyledCard type={type}>
      {message}
    </StyledCard>
  );
};

export default StatusCard
