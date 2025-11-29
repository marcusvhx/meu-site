import styled from "styled-components";
import { Theme } from "../../Theme";

const Arrow = styled.div<{side:'l'|'r'}>`
    rotate: ${({side}) => side === 'l' ? '180deg' : '0deg'};
    width: 4rem;
    height: 4rem;
    border-radius:50%;
    background-color: ${Theme.colors.emerald};
    border: 0.3rem solid ${Theme.colors.emerald};
    position: relative;
    cursor:pointer;
    &::before{
        content:'';
        position: absolute;
        left:43%;
        transform: translateX(50%);
        top:9%;
        rotate:-45deg;
        width: 15%;
        height: 60%;
        background-color:#fff;
        border-radius:2rem;
    }
    &::after{
        content:'';
        position: absolute;
        left:43%;
        transform: translateX(50%);
        bottom:9%;
        rotate:45deg;
        width: 15%;
        height: 60%;
        background-color:#fff;
        border-radius:2rem;
    }

`
export default Arrow