import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 20px;
`;

const InputSearch = styled.input.attrs(({ type, autoComplete }) => {
  type: type;
  autoComplete: autoComplete;
})`
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 22px;
  font-size: 14px;
  transition: width 0.15s;
  appearance: none;
  box-sizing: border-box;
  padding: 14px 0;
  background: 0 0;
  outline: 0;
  border: none;
  color: #333;
  &::placeholder {
    color: #fff;
  }
  &:focus {
    width: 100px;
  }
`;

export { Wrapper, InputSearch };
