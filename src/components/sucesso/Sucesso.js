import styled from "styled-components";
import Topo from "../topo/Topo.js";


export default function Sucesso({ nomeFilme, dataHora, assento, nomeComprador, cpf }) {

  

    return (
        <>
            <Topo>Pedido feito com sucesso</Topo>
            <p> {nomeFilme}</p>
            <Buttom type="submit">Reservar assento</Buttom>

        </>
    )
}

const Assentos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100hv;
    height: 205px;
    margin: 0px 24px
`

const Legenda = styled.div`

    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin-top: 16px;

    div{
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        background: ${props => props.cor};
        border: 1px solid #808F9D;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        width: 91px;
        height: 28px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }

`

const ContainerLegenda = styled.div`
    display: flex;
    justify-content: center;
`

const Buttom = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    margin: 10px auto 0px auto;
    
`
const Input = styled.input`
    width: 327px;
    height: 51px;

    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
`

const Label = styled.label`
    width: 327px;
    height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #293845;
`

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;

    form{
        display: flex;
        justify-content: center;
        align-itens: center;
        flex-direction: column;
    }
`