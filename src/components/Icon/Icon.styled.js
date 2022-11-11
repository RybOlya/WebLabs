import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const IconsWrapper = styled.div`
    
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: 'Righteous', sans-serif;
    > p {
        margin: auto 10px;
    }
`
export const IconBase = styled(Icon)`
font-size: 20px;
margin: 0 10px;
color: ${({color}) => color};
`;