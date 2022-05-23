import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header/Header.js";
import SelecionaHorario from "./components/horarioFilme/SelecionaHorario.js";
import SelecionaAssento from "./components/selecionaAssento/selecionaAssento.js";
import SelecionaFilme from "./components/selecionaFilme/SelecionaFilme.js";



export default function App(){

    return(
        
        <Main>
            <BrowserRouter>
            <Header/>
            <Routes>

                <Route path="/" element={<SelecionaFilme/> } />
                <Route path="/sessoes/:id" element={<SelecionaHorario/> } />
                <Route path="/assentos/:id" element={ <SelecionaAssento />} />
                
            </Routes>
        
        </BrowserRouter>
            

        </Main>
    );
}

const Main = styled.main`
    margin-bottom: 125px;
`