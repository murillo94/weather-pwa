import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  background-color: white;
  flex: 0.6;
  overflow-y: auto;
  border-radius: 9px;
  -webkit-overflow-scrolling: touch;
  @media (max-width: 991px) {
    flex: 0.4;
  }
`;

export default Wrapper;
