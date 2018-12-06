import styled from 'styled-components';

const Loading = styled.div`
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 3px solid #fff;
  width: 15px;
  height: 15px;
  margin: 2px 8px 0 10px;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
