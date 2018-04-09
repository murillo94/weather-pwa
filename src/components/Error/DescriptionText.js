import styled from 'styled-components';

const DescriptionText = styled.p`
	font-size: ${props => props.type.fontSize};
	font-weight: bold;
  	margin: ${props => props.type.margin};
  	text-align: center;
  	padding: 0 40px;
  	&:first-letter {
  		text-transform: capitalize;
  	}
`;

DescriptionText.defaultProps = {
  	fontSize: '23px', 
  	margin: '0 0 25px'
};

export default DescriptionText;