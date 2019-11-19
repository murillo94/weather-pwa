import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 15px 20px 45px;
  overflow-x: hidden;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Description = styled.div`
  color: #fff;
  font-size: 23px;
  font-weight: bold;
  margin: 0 0 15px;

  &:first-letter {
    text-transform: capitalize;
  }
`;

const City = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 20px;
`;

const Temperature = styled.div`
  color: #fff;
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export { Wrapper, Description, City, Temperature };
