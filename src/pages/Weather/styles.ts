import styled from "@emotion/styled";
import WeatherAvatar from "../../assets/WeatherAvatar.jpeg";

export const WeatherPage = styled.div`
 display: flex;
 flex: 1;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 100vh;
 background: url(${WeatherAvatar});
 background-size: cover;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

export const Loader = styled.div`
  margin-top: 20px;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
