import styled from "styled-components";
import Topo from "../topo/Topo.js";

export default function SelecionaHorario(){
    return(
        <>
            <Topo>Selecione o Horário</Topo>
            <Container>
                <FilmeData>Quinta-feira - 24/06/2021</FilmeData>
                <ContainerHorario>
                    <FilmeHora>15:00</FilmeHora>
                    <FilmeHora>19:00</FilmeHora>
                </ContainerHorario>

                <FilmeData>Sexta-feira - 24/06/2021</FilmeData>

                <ContainerHorario>
                    <FilmeHora>15:00</FilmeHora>
                    <FilmeHora>19:00</FilmeHora>
                </ContainerHorario>
            </Container>
        </>
    )
}

const ContainerHorario = styled.div`
    display:flex;
`

const Container = styled.div`
    margin-left: 24px;
`
const FilmeHora = styled.h4`
    width: 83px;
    height: 43px;
    margin-right: 8px;

    background: #E8833A;
    border-radius: 3px;
    text-align: center;
    display: flex;
    justify-content:center;
    align-items: center;
`

const FilmeData = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;

    color: #293845;
`