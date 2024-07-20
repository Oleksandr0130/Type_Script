import styled from '@emotion/styled';

export const AppContainer = styled.div`
  padding: 20px;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: blue;
  color: white;
`;

export const DataBlock = styled.div`
  margin-top: 20px;
  max-height: 700px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
`;

export const DataItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
`;
export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
