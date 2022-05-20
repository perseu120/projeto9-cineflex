import styled from "styled-components";
import Topo from "../topo/Topo.js";
import Filme from "../filme/Filme.js"

export default function SelecionaFilme(){

    return(

        <>
            <Topo>Selecione o filme</Topo>
            <Container>
                <Filme />
                <Filme />
                <Filme />
                <Filme />
                <Filme />
                <Filme />
                <Filme />
                <Filme />
                <Filme />

            </Container>

        </>

    )
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
`