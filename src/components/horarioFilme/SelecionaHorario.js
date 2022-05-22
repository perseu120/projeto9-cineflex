import styled from "styled-components";
import Footer from "../footer/Footer.js";
import Topo from "../topo/Topo.js";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SelecionaHorario() {

    const {id }= useParams();

    const [sessoes, setSessoes] = useState([]);
    const [diasSemana, setDiasSemana] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)

        promise.then((response) => {

            setSessoes(response.data);
            setDiasSemana(response.data.days);
            console.log(response.data)

        })
        promise.catch((err) => console.log(err))

    }, []);


    function diasEHorarios() {


        return (
            diasSemana.map(dias => (
                <Container>
                    <FilmeData key={dias.id}>{dias.weekday} - {dias.date}</FilmeData>
                    <ContainerHorario>

                        {dias.showtimes.map((hora) => (
                            <Link to={`/assento/${hora.id}`}>
                                <FilmeHora key={hora.id}>{hora.name}</FilmeHora>
                            </Link>
                        
                    ))}
                    </ContainerHorario>
                </Container>
            ))
        )
    }

    return (
        <>
            <Topo>Selecione o Horário</Topo>

            {diasEHorarios()}

            <Footer img={sessoes.posterURL} nome={sessoes.title}>
                <p>{sessoes.title}</p>
            </Footer>
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
    margin-bottom: 23px;

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
    margin-bottom: 23px;

    color: #293845;
`