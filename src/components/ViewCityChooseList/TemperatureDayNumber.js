import styled from 'styled-components';

const TemperatureDayNumber = styled.div`
	font-size: 14px;
	color: ${props => props.color};
	display: flex;
	align-items: center;
	justify-content:center;
	margin-bottom: 7px;
	&:last-child {
    	margin-bottom: 0;
  	}
`;

TemperatureDayNumber.defaultProps = {
  color: 'red'
}

export default TemperatureDayNumber;