import styled from 'styled-components';

const InputSearch = styled.input`
  display: inline-block;
  vertical-align: middle;
  width: ${props => props.width}px;
  height: 22px;
  font-size: 14px;
  transition: width 0.2s, padding 0.2s;
  appearance: none;
  box-sizing: border-box;
  padding: 14px ${props => props.padding}px 14px 0;
  background: 0 0;
  outline: 0;
  border: none;
  color: #333;
  &::placeholder {
    color: #fff;
  }
`;

InputSearch.defaultProps = {
  width: 0,
  padding: 0
};

export default InputSearch;
