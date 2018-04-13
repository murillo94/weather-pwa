import styled from 'styled-components';

const Button = styled.button`
	background-color: transparent;
	border: none;
	box-shadow: none;
	outline: 0;
	margin-right: ${props => props.margin};
	padding: 3px 9px;
	transition: .2s ease-in all;
	&:hover{
		cursor: pointer;
		box-shadow: rgba(5, 15, 44, 0.1) 0px 7px 20px -4px;
    	border-radius: 99px;
	}
`;

Button.defaultProps = {
  	margin: '5px', 
};

export default Button;