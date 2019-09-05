import styled from 'styled-components';


export const Wrapper = styled.div`
    width:100%;
    display: flex;
    position: relative;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 12.75px 2.25px rgba(0, 0, 0, 0.09);
    margin-left: auto;
    max-width: 830px;
    margin-right: auto;
    @media screen and (min-width:900px){
        box-shadow:none;
        max-width: 1200px;
        margin-bottom: 50px;
    }
`