import styled from 'styled-components';
import { Colors } from './Colors';

export const Wrapper = styled.div`
    background: whitesmoke;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid ${Colors.gray};
    width: 1200px;
    /* position:relative; */
    /* min-height:1200px; */
`;

export const CustomImg = styled.img`
`;

export const CustomImgWithMargin = styled.img`
margin-right: 15px;
`;

export const CustomImageWithBorder = styled.img`
border : 1px solid ${Colors.black};
padding: 2px 4px;
border-radius: 5px;
position:absolute;
right: 0px;
height:15px;
width:15px;
top:1px;
cursor: pointer;
`;