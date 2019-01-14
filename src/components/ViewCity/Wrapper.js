import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: linear-gradient(
    135deg,
    ${({ backgroundColor }) => backgroundColor} 25%,
    ${({ backgroundImage }) => backgroundImage} 100%
  );
  flex: 0.4;
  padding: 20px 0;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border-right: 1px solid #eee;
  overflow-y: auto;
  @media (max-width: 991px) {
    flex: 0.6;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border-bottom-left-radius: 0;
    border-bottom: 1px solid #eee;
  }
  @media (max-width: 560px) {
    border-radius: 0;
  }
`;

Wrapper.defaultProps = {
  backgroundColor: '#fff',
  backgroundImage: '#fff',
  margin: 13
};

export default Wrapper;
