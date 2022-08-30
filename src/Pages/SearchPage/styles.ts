import styled from 'styled-components';
import { Container } from '@mui/system';

export const Wrapper = styled(Container)`

    display: flex;
    flex-direction: column;
    height: 100%;
    height: 98vh;
    max-height: 98vh

`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 92px;
    max-height: 290px;
    height: calc(100% - 560px);
    flex-shrink: 0;
    box-sizing: border-box;
    justify-content: center;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 10px;
    justify-content: space-evenly
`
