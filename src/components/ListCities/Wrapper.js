import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  flex: 0.6;
  overflow-y: auto;
  @media (max-width: 991px) {
    flex: 0.4;
  }
`;

export default Wrapper;
