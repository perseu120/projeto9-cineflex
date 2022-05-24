import { Link } from "react-router-dom";
import styled from "styled-components";
import Topo from "../topo/Topo.js";


export default function Sucesso(props) {



    return (
        <>
            <Topo>Pedido feito com sucesso</Topo>


            <Teste>
                <p>`cpf do comprador {props.final.cpf}`</p>
                <p>{props.final.nomeComprador}</p>
                <p>{props.final.nomeFilme}</p>
                <p>{props.final.dataHora}</p>
                
                
            </Teste>
            <Legenda>
                <Link to ={"/"}>
                    <Buttom type="">Voltar tela inicial</Buttom>
                </Link>
                
            </Legenda>
            

        </>
    )
}

const Teste = styled.div`
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

`
const Buttom = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    justify-content: center;
    
`