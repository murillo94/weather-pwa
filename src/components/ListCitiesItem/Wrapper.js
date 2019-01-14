import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5em;
  padding: 0 1em;
  border-top: 1px solid #eee;
  &:first-child {
    border-top: none;
  }
  @media (max-width: 560px) {
    height: 6.5em;
  }
`;

export default Wrapper;
