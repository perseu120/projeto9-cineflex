import styled from "styled-components";

export default function Topo(props){
    return(

        <Containe>
           {props.children }
        </Containe>
        
    );
}

const Containe = styled.div`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    min-height: 110px;
    letter-spacing: 0.04em;
    margin-top: 80px;
    color: #293845;
`