import styled from 'styled-components';

const Container = styled.div`
  padding: 0;
  margin: 0;
  border: 1px solid #e7e7e7;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 75vh;
  box-shadow: 0 2px 30px rgba(102, 102, 102,.09);
  transition: width .1s, height .1s ease;
  @media (max-width: 991px) {
    flex-direction: column;
    width: 80vw;
  	height: 85vh;
  }
  @media (max-width: 560px) {
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0;
  }
`;

export default Container;