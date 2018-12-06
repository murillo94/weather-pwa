import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5em;
  @media (max-width: 560px) {
    height: 6.5em;
  }
`;

export default Wrapper;
