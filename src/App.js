import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/header/Header.js";
import SelecionaHorario from "./components/horarioFilme/SelecionaHorario.js";
import SelecionaAssento from "./components/selecionaAssento/selecionaAssento.js";
import SelecionaFilme from "./components/selecionaFilme/SelecionaFilme.js";
import Sucesso from "./components/sucesso/Sucesso.js";


export default function App() {

    const ingresso ={
        nomeFilme : "",
        dataHora: "",
        assento: "",
        nomeComprador:"",
        cpf: ""
    }

    const [final, setFinal]= useState(ingresso);



    return (

        <Main>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={<SelecionaFilme />} />
                    <Route path="/sessoes/:id" element={<SelecionaHorario />} />
                    <Route path="/assentos/:id" element={<SelecionaAssento final={final} setFinal={setFinal} />} />
                    <Route path="/sucesso" element={<Sucesso final={final} setFinal={setFinal} />} />
                </Routes>

            </BrowserRouter>


        </Main>
    );
}

const Main = styled.main`
    margin-bottom: 125px;
`