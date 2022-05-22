import styled from "styled-components";
import Topo from "../topo/Topo.js";
import Filme from "../filme/Filme.js"
import axios from "axios";
import { React, useState, useEffect } from "react";

export default function SelecionaFilme() {



    const [filme, setFilme] = useState([])



    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {

            setFilme(response.data);

        })
    }, [])

    function exibirFilmes() {

        return (
            filme.map(filme => (
                <Filme key={filme.id} id={filme.id} posterURL={filme.posterURL} />
            ))
        )
    }


    return (

        <>
            <Topo>Selecione o filme</Topo>
            <Container>
                {exibirFilmes()}
            </Container>

        </>

    )
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
`