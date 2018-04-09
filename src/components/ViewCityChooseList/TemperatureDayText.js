import styled from 'styled-components';

const TemperatureDayText = styled.div`
	font-size: 15px;
	font-weight: ${props => props.fontWeight};
	display: flex;
	align-items: center;
	justify-content:center;
	margin-bottom: 7px;
	&:last-child {
    	margin-bottom: 0;
  	}
`;

TemperatureDayText.defaultProps = {
  fontWeight: 'normal'
}

export default TemperatureDayText;