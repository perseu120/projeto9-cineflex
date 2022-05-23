import { useState } from "react"
import styled from "styled-components"

export default function Assento({idSelecionado, setIdSelecionado, id, cor, name }) {

    const [isClicado, setIsClicado] = useState(false);


    const corElemento = isClicado ? "#8DD7CF" : cor;

    function selecionado(id) {

        
        if(idSelecionado.includes(id)){
            const filtrado = idSelecionado.filter((i)=> i !== id);
            setIdSelecionado(filtrado);
        }else{
            setIdSelecionado([...idSelecionado, id]);
        }

    }

    
    return (

        (cor === "#FBE192") ? 
        <Container onClick={() => {alert("Esse assento não está disponível") }} cor={cor}>
            {name}
        </Container> :
            <Container onClick={() => { setIsClicado(!isClicado); selecionado(id) }} cor={corElemento}>
                {name}
            </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    margin: 0px 5px 18px 0px;

    background: ${props => props.cor};
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`